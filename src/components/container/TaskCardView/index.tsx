import React, { useCallback, useState } from 'react';
import {
  FiAlertTriangle,
  FiAlignJustify,
  FiCalendar,
  FiCheckSquare,
  FiChevronLeft,
  FiEdit2,
  FiPlay,
  FiTrash2,
  FiUser,
} from 'react-icons/fi';
import { useRouter } from 'next/dist/client/router';
import { toast } from 'react-toastify';
import { Button } from '../../shared/Button';

import {
  Container,
  CardHeader,
  EditButton,
  UserDataContainer,
  TaskDataInfo,
  TaskDataDescription,
  TaskActionsContainer,
  TaskDeleteModalBody,
} from './styles';
import { ITask } from '../../../types/interfaces/task';
import { formatDate } from '../../../utils/formatDate';
import { TaskStatus } from '../../../types/enum/taskStatus';
import { Tag } from '../../shared/Tag';
import { Modal } from '../../shared/Modal';
import { useRest } from '../../../hooks/rest';

interface TaskCardFormProps {
  task?: ITask;
}

export const TaskCardView: React.FC<TaskCardFormProps> = props => {
  const { task } = props;
  const { push } = useRouter();
  const { api } = useRest();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChangeTaskStatus = useCallback(
    async (status: TaskStatus) => {
      try {
        setLoading(true);
        const data = {
          status,
        };
        await api.patch(`/tasks/${task?.id}`, data);
        toast.success('Status da tarefa alterado com sucesso!');
        setLoading(false);
        push('/tasks');
      } catch {
        setLoading(false);
      }
    },
    [task, api, push],
  );

  const onDeleteTask = useCallback(async () => {
    try {
      setLoading(true);
      await api.delete(`/tasks/${task?.id}`);
      toast.success('Tarefa removida com sucesso!');
      setLoading(false);
      push('/tasks');
    } catch {
      setLoading(false);
    }
  }, [task, api, push]);

  const goToEditPage = useCallback(() => {
    push(`/tasks/create/${task?.id}`);
  }, [push, task]);

  const renderStatus = useCallback(() => {
    switch (task?.status) {
      case 'OPEN':
        return <Tag type="secondary">Aberta</Tag>;
      case 'IN_PROGRESS':
        return <Tag>Em progresso</Tag>;
      case 'FINISHED':
        return <Tag type="success">Finalizada</Tag>;
      default:
        return <Tag>{task?.status}</Tag>;
    }
  }, [task]);

  const renderPriority = useCallback(() => {
    switch (task?.priority) {
      case 'low':
        return <Tag type="success">Baixa</Tag>;
      case 'medium':
        return <Tag type="secondary">Média</Tag>;
      case 'hight':
        return <Tag type="danger">Alta</Tag>;
      default:
        return <Tag>{task?.priority}</Tag>;
    }
  }, [task]);

  const renderActionStatus = useCallback(() => {
    switch (task.status) {
      case TaskStatus.OPEN:
        return (
          <Button
            onClick={() => onChangeTaskStatus(TaskStatus.IN_PROGRESS)}
            disabled={loading}
          >
            <FiPlay />
            Iniciar
          </Button>
        );
      case TaskStatus.IN_PROGRESS:
        return (
          <Button
            colorType="success"
            onClick={() => onChangeTaskStatus(TaskStatus.FINISHED)}
            disabled={loading}
          >
            <FiCheckSquare />
            Finalizar
          </Button>
        );
      default:
        return null;
    }
  }, [task, onChangeTaskStatus, loading]);

  return (
    <Container>
      <CardHeader>
        <h2>Dados da tarefa</h2>
        <EditButton onClick={() => push('/tasks')}>
          <FiChevronLeft />
        </EditButton>
      </CardHeader>
      <UserDataContainer>
        <TaskDataInfo>
          <div>
            <FiUser />
            <strong>Nome: </strong>
          </div>
          <span>{task?.name}</span>
        </TaskDataInfo>
        <TaskDataInfo>
          <div>
            <FiCheckSquare />
            <strong>Status: </strong>
          </div>
          {renderStatus()}
        </TaskDataInfo>
        <TaskDataInfo>
          <div>
            <FiAlertTriangle />
            <strong>Prioridade: </strong>
          </div>
          {renderPriority()}
        </TaskDataInfo>
        <TaskDataInfo>
          <div>
            <FiCalendar />
            <strong>Prazo final : </strong>
          </div>
          <span>{formatDate(task?.end_date)}</span>
        </TaskDataInfo>
        <TaskDataDescription>
          <div>
            <FiAlignJustify />
            <strong>Descrição : </strong>
          </div>
          <p>{task?.description}</p>
        </TaskDataDescription>
      </UserDataContainer>
      <TaskActionsContainer>
        {renderActionStatus()}
        {task?.status !== TaskStatus.FINISHED && (
          <Button colorType="secondary" onClick={goToEditPage}>
            <FiEdit2 />
            Editar
          </Button>
        )}
        <Button colorType="danger" onClick={() => setShowDeleteModal(true)}>
          <FiTrash2 />
          Remover
        </Button>
      </TaskActionsContainer>
      <Modal
        title="Remover tarefa"
        open={showDeleteModal}
        closeModal={() => setShowDeleteModal(false)}
      >
        <TaskDeleteModalBody>
          <p>
            Deseja remover a tarefa:
            <strong>{`${task?.name}?`}</strong>
          </p>
          <Button colorType="danger" disabled={loading} onClick={onDeleteTask}>
            Remover
          </Button>
        </TaskDeleteModalBody>
      </Modal>
    </Container>
  );
};

import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import {
  FiArrowDown,
  FiArrowUp,
  FiCalendar,
  FiCheckSquare,
  FiChevronLeft,
  FiMinus,
  FiSave,
} from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Card } from '../../shared/Card';
import { CardHeader } from '../../shared/Card/CardHeader';
import { Input } from '../../shared/form/Input';
import {
  Container,
  Form,
  PriorityRadioButtonGroup,
  PriorityContainer,
} from './styles';
import { PriorityRadioButton } from '../PriorityRadioButton';
import { PriorityTypeChecked } from '../../../types/types/priority';
import { Textarea } from '../../shared/form/Textarea';
import { Button } from '../../shared/Button';
import { formatDateToInput } from '../../../utils/formatDate';
import { useRest } from '../../../hooks/rest';
import { ITask } from '../../../types/interfaces/task';

interface ITaskFormProps {
  id?: string;
}

export const TaskForm: React.FC<ITaskFormProps> = props => {
  const { id } = props;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      priority: 'low',
      end_date: formatDateToInput(new Date()),
      description: '',
    },
  });
  const { back, push } = useRouter();
  const { api } = useRest();
  const [loading, setLoading] = useState(false);
  const [prioritySelected, setPrioritySelected] =
    useState<PriorityTypeChecked>('low');

  const onHandleTypeChecked = useCallback(
    (priority: PriorityTypeChecked) => {
      setPrioritySelected(priority);
      setValue('priority', priority);
    },
    [setValue],
  );

  const onSubmit = useCallback(
    async data => {
      try {
        setLoading(true);

        if (id) {
          await api.put(`/tasks/${id}`, data);
        } else {
          await api.post('/tasks', data);
        }
        toast.success('Tarefa salva com sucesso!');
        setLoading(false);
        push('/tasks');
      } catch {
        setLoading(false);
      }
    },
    [api, push, id],
  );

  useEffect(() => {
    async function loadTask() {
      try {
        setLoading(true);
        const response = await api.get<ITask>(`/tasks/${id}`);
        const { name, description, end_date, priority } = response.data;
        setValue('name', name);
        setValue('description', description);
        setValue('end_date', formatDateToInput(end_date));
        setValue('priority', priority);
        setPrioritySelected(priority);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }

    if (id) {
      loadTask();
    }
  }, [api, id, setValue]);

  return (
    <Container>
      <Card>
        <CardHeader title="Nova Tarefa" icon={FiChevronLeft} action={back} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <p>Nome:</p>
          <Input
            placeholder="Nome da tarefa..."
            icon={FiCheckSquare}
            register={register('name', {
              required: true,
            })}
            error={errors.name && 'Nome obrigatório!'}
          />
          <PriorityContainer>
            <p>Prioridade:</p>
            <PriorityRadioButtonGroup>
              <PriorityRadioButton
                icon={FiArrowDown}
                title="Baixa"
                type="low"
                handleTypeChecked={onHandleTypeChecked}
                typeChecked={prioritySelected}
              />
              <PriorityRadioButton
                icon={FiMinus}
                title="Média"
                type="medium"
                handleTypeChecked={onHandleTypeChecked}
                typeChecked={prioritySelected}
              />
              <PriorityRadioButton
                icon={FiArrowUp}
                title="Alta"
                type="hight"
                handleTypeChecked={onHandleTypeChecked}
                typeChecked={prioritySelected}
              />
            </PriorityRadioButtonGroup>
          </PriorityContainer>
          <div>
            <p>Prazo final:</p>
            <Input
              icon={FiCalendar}
              type="date"
              register={register('end_date', {
                required: true,
              })}
              error={errors.end_date && 'Data final obrigatória!'}
            />
          </div>
          <div>
            <p>Descrição:</p>
            <Textarea
              placeholder="Descrição..."
              register={register('description', {
                required: true,
              })}
              error={errors.description && 'Descrição obrigatória!'}
            />
          </div>
          <Button type="submit" disabled={loading}>
            <FiSave />
            {id ? 'Atualizar' : 'Cadastrar'}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

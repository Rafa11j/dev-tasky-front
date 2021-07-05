import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Container, Content } from '../../styles/pages/Tasks';
import { Table } from '../../components/shared/Table';
import { PageHeader } from '../../components/shared/PageHeader';
import { useRest } from '../../hooks/rest';
import { ITableHeaders } from '../../types/interfaces/table';
import { formatDate } from '../../utils/formatDate';
import { Tag } from '../../components/shared/Tag';
import { ITask } from '../../types/interfaces/task';

export default function Tasks(): JSX.Element {
  const { push } = useRouter();
  const { api } = useRest();
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState(false);

  const headers = useMemo(() => {
    const headerItems: ITableHeaders[] = [
      {
        name: 'Nome',
        key: 'name',
      },
      {
        name: 'Prioridade',
        key: 'priority',
        renderColumn: ({ priority }: ITask) => {
          switch (priority) {
            case 'low':
              return <Tag type="success">Baixa</Tag>;
            case 'medium':
              return <Tag type="secondary">Média</Tag>;
            case 'hight':
              return <Tag type="danger">Alta</Tag>;
            default:
              return <Tag>{priority}</Tag>;
          }
        },
      },
      {
        name: 'Status',
        key: 'status',
        renderColumn: ({ status }: ITask) => {
          switch (status) {
            case 'OPEN':
              return <Tag type="secondary">Aberta</Tag>;
            case 'IN_PROGRESS':
              return <Tag>Em progresso</Tag>;
            case 'FINISHED':
              return <Tag type="success">Finalizada</Tag>;
            default:
              return <Tag>{status}</Tag>;
          }
        },
      },
      {
        name: 'Prazo Final',
        key: 'end_date',
        renderColumn: ({ end_date }) => {
          return formatDate(end_date);
        },
      },
    ];

    return headerItems;
  }, []);

  const openModalActions = useCallback(
    (task: ITask) => {
      push(`/tasks/${task.id}`);
    },
    [push],
  );

  useEffect(() => {
    async function laodTasks() {
      try {
        setLoading(true);
        const response = await api.get('/tasks');
        setTasks(response.data);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }

    laodTasks();
  }, [api]);

  return (
    <>
      <Head>
        <title>Tarefas | Dev Tasky</title>
      </Head>
      <Container>
        <Content>
          <PageHeader
            title="Minhas tarefas"
            icon={FiPlus}
            actionTitle="Nova tarefa"
            action={() => push('/tasks/create')}
          />

          <Table
            headers={headers}
            data={tasks}
            identify="id"
            loading={loading}
            selectAction={openModalActions}
          />
        </Content>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.TaskyToken;

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

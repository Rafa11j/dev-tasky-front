import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { TaskCardView } from '../../components/container/TaskCardView';
import { api } from '../../services/api';
import { Container, Content } from '../../styles/pages/Tasks';
import { ITask } from '../../types/interfaces/task';

export default function TaskDetail(task: ITask): JSX.Element {
  return (
    <>
      <Head>
        <title>Tarefas | Dev Tasky</title>
      </Head>
      <Container>
        <Content>
          <TaskCardView task={task} />
        </Content>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<ITask> = async ({
  query,
  req,
}) => {
  try {
    const token = req.cookies.TaskyToken;

    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    const { id } = query;
    const response = await api.get(`/tasks/${id}`, {
      headers: { authorization: token },
    });

    return {
      props: response.data,
    };
  } catch {
    return {
      props: {},
    };
  }
};

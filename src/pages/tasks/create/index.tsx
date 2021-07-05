import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Container, Content } from '../../../styles/pages/Tasks';
import { TaskForm } from '../../../components/container/TaskForm';

export default function CreateTask(): JSX.Element {
  return (
    <>
      <Head>
        <title>Nova tarefa | Dev Tasky</title>
      </Head>
      <Container>
        <Content>
          <TaskForm />
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

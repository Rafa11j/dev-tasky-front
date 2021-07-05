import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { GetServerSideProps } from 'next';
import { Container, Content } from '../../../styles/pages/Tasks';
import { TaskForm } from '../../../components/container/TaskForm';

export default function EditTask(): JSX.Element {
  const { query } = useRouter();
  return (
    <>
      <Head>
        <title>Editar tarefa | Dev Tasky</title>
      </Head>
      <Container>
        <Content>
          <TaskForm id={String(query.id)} />
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

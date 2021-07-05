import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useAuth } from '../hooks/auth';
import { Container, Content } from '../styles/pages/Dashboard';

export default function Dashboard(): JSX.Element {
  const { user } = useAuth();
  return (
    <>
      <Head>
        <title>Início | Dev Tasky</title>
      </Head>
      <Container>
        <Content>
          <h1>
            Bem vindo
            <span>{user?.name}</span>
          </h1>
          <p>Crie tarefas e organize suas atividades pela plataforma!</p>
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

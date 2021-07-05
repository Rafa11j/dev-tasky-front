import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { SignInForm } from '../components/container/SignInForm';

import { Container, Content, Background } from '../styles/pages/SignIn';

export default function SignIn(): JSX.Element {
  return (
    <>
      <Head>
        <title>Login | Dev Tasky</title>
      </Head>
      <Container>
        <Content>
          <SignInForm />
        </Content>
        <Background />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.TaskyToken;

  if (token) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

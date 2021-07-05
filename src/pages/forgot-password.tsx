import Head from 'next/head';
import React from 'react';
import { ForgotPasswordForm } from '../components/container/ForgotPasswordForm';

import { Container, Content, Background } from '../styles/pages/SignIn';

export default function SignIn(): JSX.Element {
  return (
    <>
      <Head>
        <title>Esqueci minha senha | Tasky</title>
      </Head>
      <Container>
        <Content>
          <ForgotPasswordForm />
        </Content>
        <Background />
      </Container>
    </>
  );
}

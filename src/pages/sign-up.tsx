import Head from 'next/head';
import React from 'react';
import { SignUpForm } from '../components/container/SignUpForm';

import { Container, Content, Background } from '../styles/pages/SignUp';

export default function SignUp(): JSX.Element {
  return (
    <>
      <Head>
        <title>Sign Up | Dev Tasky</title>
      </Head>
      <Container>
        <Background />
        <Content>
          <SignUpForm />
        </Content>
      </Container>
    </>
  );
}

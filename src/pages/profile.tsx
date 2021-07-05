import Head from 'next/head';
import React, { useCallback, useState } from 'react';
import { GetServerSideProps } from 'next';
import { Container, Content } from '../styles/pages/Profile';

import { ProfileCardInfo } from '../components/container/ProfileCardInfo';
import { ProfileCardForm } from '../components/container/ProfileCardForm';
import { Modal } from '../components/shared/Modal';
import { ProfileForm } from '../components/container/ProfileForm';
import { ChangePasswordForm } from '../components/container/ChangePasswordForm';

export default function Profile(): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalBody, setModalBody] = useState<'profile' | 'password'>('profile');

  const onHandleEditProfileModal = useCallback(() => {
    setShowModal(true);
    setModalTitle('Editar meus dados');
    setModalBody('profile');
  }, []);

  const onHandleChangePasswordModal = useCallback(() => {
    setShowModal(true);
    setModalTitle('Alterar minha senha');
    setModalBody('password');
  }, []);

  const renderModalBody = useCallback(() => {
    if (modalBody === 'password') {
      return <ChangePasswordForm closeModal={() => setShowModal(false)} />;
    }

    return <ProfileForm closeModal={() => setShowModal(false)} />;
  }, [modalBody]);

  return (
    <>
      <Head>
        <title>Perfil | Dev Tasky</title>
      </Head>
      <Container>
        <Content>
          <ProfileCardInfo />
          <ProfileCardForm
            handleEditProfileModal={onHandleEditProfileModal}
            handleChangePasswordModal={onHandleChangePasswordModal}
          />
        </Content>
      </Container>
      <Modal
        title={modalTitle}
        open={showModal}
        closeModal={() => setShowModal(false)}
      >
        {renderModalBody()}
      </Modal>
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

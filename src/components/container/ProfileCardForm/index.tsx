import React from 'react';
import { FiEdit2, FiMail, FiUser } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { Button } from '../../shared/Button';

import {
  Container,
  CardHeader,
  EditButton,
  UserDataContainer,
  UserDataInfo,
} from './styles';
import { useAuth } from '../../../hooks/auth';

interface ProfileCardFormProps {
  handleEditProfileModal(): void;
  handleChangePasswordModal(): void;
}

export const ProfileCardForm: React.FC<ProfileCardFormProps> = props => {
  const { handleEditProfileModal, handleChangePasswordModal } = props;
  const { user } = useAuth();

  return (
    <Container>
      <CardHeader>
        <h2>Meus Dados</h2>
        <EditButton onClick={handleEditProfileModal}>
          <FiEdit2 />
        </EditButton>
      </CardHeader>
      <UserDataContainer>
        <UserDataInfo>
          <div>
            <FiUser />
            <strong>Nome: </strong>
          </div>
          <span>{user?.name}</span>
        </UserDataInfo>
        <UserDataInfo>
          <div>
            <FiMail />
            <strong>E-mail: </strong>
          </div>
          <span>{user?.email}</span>
        </UserDataInfo>
        <UserDataInfo>
          <div>
            <FaGithub />
            <strong>Github: </strong>
          </div>
          <span>{user?.github ? user.github : 'Não informado'}</span>
        </UserDataInfo>
      </UserDataContainer>
      <Button onClick={handleChangePasswordModal}>Alterar Senha</Button>
    </Container>
  );
};

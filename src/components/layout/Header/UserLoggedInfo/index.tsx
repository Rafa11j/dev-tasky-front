import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useAuth } from '../../../../hooks/auth';
import { Container, Avatar } from './styles';

export const UserLoggedInfo: React.FC = () => {
  const { push } = useRouter();
  const { user } = useAuth();

  return (
    <Container onClick={() => push('/profile')}>
      <Avatar>
        <img src={user?.avatar ? user.avatar : '/avatar.png'} alt={user.name} />
      </Avatar>
      <strong>{user.name}</strong>
    </Container>
  );
};

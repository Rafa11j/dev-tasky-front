import { FiLogOut } from 'react-icons/fi';
import { useCallback } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Container } from './styles';
import { Tooltip } from '../../../shared/Tooltip';
import { useAuth } from '../../../../hooks/auth';

export const MenuItemLogout: React.FC = () => {
  const { signOut } = useAuth();
  const { push } = useRouter();

  const onSignOut = useCallback(() => {
    push('/');
    signOut();
  }, [signOut, push]);

  return (
    <Tooltip title="Sair">
      <Container onClick={onSignOut}>
        <FiLogOut />
      </Container>
    </Tooltip>
  );
};

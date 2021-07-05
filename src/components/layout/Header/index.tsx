import { FiCheckSquare, FiHome } from 'react-icons/fi';
import { Container, Content } from './styles';
import { Link } from '../../shared/Link';
import { MenuItem } from './MenuItem';
import { MenuItemLogout } from './MenuItemLogout';
import { UserLoggedInfo } from './UserLoggedInfo';

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link href="/dashboard">
          <h1>Dev Tasky</h1>
        </Link>
        <nav>
          <MenuItem icon={FiHome} title="Início" path="/dashboard" />
          <MenuItem icon={FiCheckSquare} title="Tarefas" path="/tasks" />
          <MenuItemLogout />

          <UserLoggedInfo />
        </nav>
      </Content>
    </Container>
  );
};

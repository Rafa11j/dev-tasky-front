import { useEffect, useState } from 'react';
import { UserStatisticItem } from './UserStatisticItem';
import { Container, Avatar, UserStatisticContainer } from './styles';
import { useAuth } from '../../../hooks/auth';
import { IShowStatisticsTask } from '../../../types/interfaces/task';
import { useRest } from '../../../hooks/rest';

export const ProfileCardInfo: React.FC = () => {
  const { user } = useAuth();
  const { api } = useRest();
  const [statistics, setStatistics] = useState<IShowStatisticsTask>({
    open: 0,
    in_progress: 0,
    finished: 0,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStatistics() {
      try {
        setLoading(true);
        const response = await api.get('/statistics');
        setStatistics(response.data);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }

    loadStatistics();
  }, [api]);

  return (
    <Container>
      <Avatar>
        <img
          src={user?.avatar ? user.avatar : '/avatar.png'}
          alt={user?.name}
        />
      </Avatar>
      <h2>{user?.name}</h2>
      <UserStatisticContainer>
        <UserStatisticItem type="open" value={statistics.open} />
        <UserStatisticItem type="in-progress" value={statistics.in_progress} />
        <UserStatisticItem type="completed" value={statistics.finished} />
      </UserStatisticContainer>
    </Container>
  );
};

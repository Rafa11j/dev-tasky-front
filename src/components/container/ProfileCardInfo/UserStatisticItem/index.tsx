import React, { useCallback } from 'react';
import { FiCheckSquare, FiMinusSquare, FiSquare } from 'react-icons/fi';

import { Container } from './styles';

interface UserStatisticItemProps {
  type: 'completed' | 'in-progress' | 'open';
  value: number;
}

export const UserStatisticItem: React.FC<UserStatisticItemProps> = ({
  type,
  value,
}) => {
  const renderIcon = useCallback(() => {
    switch (type) {
      case 'completed':
        return <FiCheckSquare />;
      case 'in-progress':
        return <FiMinusSquare />;
      case 'open':
        return <FiSquare />;
      default:
        return <FiSquare />;
    }
  }, [type]);

  return (
    <Container type={type}>
      {renderIcon()}
      <span>{value}</span>
    </Container>
  );
};

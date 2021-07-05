import React, { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container, ActionButton } from './styles';

interface CardHeaderProps {
  title: string;
  icon?: ComponentType<IconBaseProps>;
  action?: () => void;
}

export const CardHeader: React.FC<CardHeaderProps> = props => {
  const { title, action, icon: Icon } = props;

  return (
    <Container>
      <h2 data-testid="cardheader_title">{title}</h2>
      {Icon && (
        <ActionButton type="button" onClick={action}>
          <Icon />
        </ActionButton>
      )}
    </Container>
  );
};

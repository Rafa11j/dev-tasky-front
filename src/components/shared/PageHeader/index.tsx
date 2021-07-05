import React, { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Button } from '../Button';

import { Container } from './styles';

interface PageHeaderProps {
  title: string;
  action(): void;
  actionTitle: string;
  icon: ComponentType<IconBaseProps>;
}

export const PageHeader: React.FC<PageHeaderProps> = props => {
  const { action, actionTitle, icon: Icon, title } = props;
  return (
    <Container>
      <h2>{title}</h2>
      <Button onClick={action}>
        <Icon />
        {actionTitle}
      </Button>
    </Container>
  );
};

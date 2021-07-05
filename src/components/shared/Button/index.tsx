import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorType?: 'primary' | 'secondary' | 'success' | 'danger';
}

export const Button: React.FC<IButtonProps> = ({
  colorType = 'primary',
  children,
  ...rest
}) => {
  return (
    <Container colorType={colorType} {...rest}>
      {children}
    </Container>
  );
};

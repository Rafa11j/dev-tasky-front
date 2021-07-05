import React, { HtmlHTMLAttributes } from 'react';

import { Container } from './styles';

type CardProps = HtmlHTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

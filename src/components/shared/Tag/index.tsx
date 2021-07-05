import React from 'react';

import { Container } from './styles';

interface TagProps {
  type?: 'primary' | 'secondary' | 'success' | 'danger';
}

export const Tag: React.FC<TagProps> = ({ type = 'primary', children }) => {
  return <Container type={type}>{children}</Container>;
};

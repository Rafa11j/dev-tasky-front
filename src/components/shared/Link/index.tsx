import React, { AnchorHTMLAttributes } from 'react';
import NextLink from 'next/link';
import { Container } from './styles';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link: React.FC<LinkProps> = ({ children, href, ...rest }) => {
  return (
    <NextLink href={href} passHref>
      <Container {...rest}>{children}</Container>
    </NextLink>
  );
};

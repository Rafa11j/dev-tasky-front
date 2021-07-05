import styled, { css } from 'styled-components';

interface ContainerProps {
  active: boolean;
}

export const Container = styled.a<ContainerProps>`
  text-decoration: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  transition: background 0.2s;

  &:hover {
    background: ${props => props.theme.colors['gray-dark']};
  }

  ${props =>
    props.active &&
    css`
      background: ${props.theme.colors['gray-dark']};
    `}
`;

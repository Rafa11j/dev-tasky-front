import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.a`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: color 0.2s;
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: ${props => shade(0.2, props.theme.colors.primary)};
  }
`;

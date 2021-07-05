import { shade } from 'polished';
import styled from 'styled-components';

interface ContainerProps {
  colorType: 'primary' | 'secondary' | 'success' | 'danger';
}

export const Container = styled.button<ContainerProps>`
  margin: 1rem 0;
  cursor: pointer;
  width: 200px;
  height: 2.5rem;
  border-radius: 0.25rem;
  border: 0;
  background: ${props => props.theme.colors[props.colorType]};
  color: ${props =>
    props.colorType === 'primary' || props.colorType === 'secondary'
      ? props.theme.colors.dark
      : props.theme.colors.ligth};
  font-weight: 600;
  transition: 0.2s;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background: ${props => shade(0.2, props.theme.colors[props.colorType])};
  }
`;

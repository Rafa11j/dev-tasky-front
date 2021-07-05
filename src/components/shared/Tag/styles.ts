import styled from 'styled-components';

interface ContainerProps {
  type: 'primary' | 'secondary' | 'success' | 'danger';
}

export const Container = styled.span<ContainerProps>`
  background: ${props => props.theme.colors[props.type]};
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
  color: ${props =>
    props.type === 'primary' || props.type === 'secondary'
      ? props.theme.colors.dark
      : props.theme.colors.ligth} !important;
`;

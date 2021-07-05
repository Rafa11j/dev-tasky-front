import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => shade(0.3, props.theme.colors.gray)};
`;

export const ActionButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: ${props => props.theme.colors.gray};

  transition: background 0.2s;

  svg {
    color: ${props => props.theme.colors.ligth};
  }

  &:hover {
    background: ${props => shade(0.2, props.theme.colors.gray)};
  }
`;

import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface ContainerProps {
  type: 'low' | 'medium' | 'hight';
  isChecked: boolean;
}

const type = {
  low: css`
    background: ${props => props.theme.colors['gray-dark']};

    &:hover {
      background: ${props => shade(0.2, props.theme.colors.success)};
      border-color: ${props => props.theme.colors.success};
    }
  `,
  medium: css`
    background: ${props => props.theme.colors['gray-dark']};

    &:hover {
      color: ${props => props.theme.colors.dark};
      background: ${props => shade(0.2, props.theme.colors.secondary)};
      border-color: ${props => props.theme.colors.secondary};
    }
  `,
  hight: css`
    background: ${props => props.theme.colors['gray-dark']};

    &:hover {
      background: ${props => shade(0.2, props.theme.colors.danger)};
      border-color: ${props => props.theme.colors.danger};
    }
  `,
};

const typeChecked = {
  low: css`
    background: ${props => shade(0.2, props.theme.colors.success)};
    border-color: ${props => props.theme.colors.success};
  `,
  medium: css`
    color: ${props => props.theme.colors.dark};
    background: ${props => shade(0.2, props.theme.colors.secondary)};
    border-color: ${props => props.theme.colors.secondary};
  `,
  hight: css`
    background: ${props => shade(0.2, props.theme.colors.danger)};
    border-color: ${props => props.theme.colors.danger};
  `,
};

export const Container = styled.label<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: fit-content;
  padding: 1rem;
  width: 200px;
  height: 3.5rem;
  border-radius: 0.25rem;
  transition: 0.2s;
  border: 2px solid ${props => shade(0.3, props.theme.colors.gray)};

  input {
    display: none;
  }

  ${props => type[props.type]};
  ${props => props.isChecked && typeChecked[props.type]};

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 0.5rem;
    }
  }
`;

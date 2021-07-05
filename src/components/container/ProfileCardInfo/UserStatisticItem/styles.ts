import styled, { css } from 'styled-components';

interface ContainerProps {
  type: 'completed' | 'in-progress' | 'open';
}

const type = {
  completed: css`
    span {
      color: ${props => props.theme.colors.success};
    }
  `,
  'in-progress': css`
    span {
      color: ${props => props.theme.colors.primary};
    }
  `,
  open: css`
    span {
      color: ${props => props.theme.colors.secondary};
    }
  `,
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props => type[props.type]}

  span {
    margin-top: 0.5rem;
    font-weight: 600;
    font-size: 18px;
  }
`;

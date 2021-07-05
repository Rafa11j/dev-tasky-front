import styled, { css } from 'styled-components';

interface ContainerStyleProps {
  isFocused: boolean;
  isFilled: boolean;
  error: boolean;
}

export const Controller = styled.div`
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.small`
  color: ${props => props.theme.colors.danger};
  font-weight: 600;
`;

export const Container = styled.div<ContainerStyleProps>`
  display: flex;
  position: relative;

  svg {
    position: absolute;
    left: 1.25rem;
    top: 1.25rem;
    transform: translate(-50%, -50%);
    color: ${props => props.theme.colors.gray};

    transition: color 0.2s;
  }

  ${props =>
    props.isFocused &&
    css`
      svg {
        color: ${props.theme.colors.primary};
      }
      input {
        border-color: ${props.theme.colors.primary} !important;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      svg {
        color: ${props.theme.colors.primary};
      }
    `}

  ${props =>
    props.error &&
    css`
      svg {
        color: ${props.theme.colors.danger};
      }
      input {
        border-color: ${props.theme.colors.danger} !important;
      }
    `}

  input {
    flex: 1;
    height: 2.5rem;
    padding: 0 1rem 0 2.5rem;
    border: 2px solid ${props => props.theme.colors['gray-dark']};
    border-radius: 0.25rem;
    background: ${props => props.theme.colors['gray-dark']};
    color: ${props => props.theme.colors.ligth};
    width: 270px;

    transition: border-color 0.2s;
  }
`;

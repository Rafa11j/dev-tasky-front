import styled, { css } from 'styled-components';

interface ContainerStyleProps {
  isFocused: boolean;
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
  margin-bottom: 1rem;
  font-size: 14px;

  ${props =>
    props.isFocused &&
    css`
      textarea {
        border-color: ${props.theme.colors.primary} !important;
      }
    `}

  textarea {
    flex: 1;
    padding: 1rem;
    border: 2px solid ${props => props.theme.colors['gray-dark']};
    border-radius: 0.25rem;
    background: ${props => props.theme.colors['gray-dark']};
    color: ${props => props.theme.colors.ligth};
    width: 270px;
    resize: none;
    font-family: inherit;
    font-size: inherit;

    transition: border-color 0.2s;
  }
`;

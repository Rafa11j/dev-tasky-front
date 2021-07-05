import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 5rem);
  height: calc(100% - 5rem);
  background: ${props => props.theme.colors['gray-dark']};

  display: flex;

  color: ${props => props.theme.colors.ligth};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;

  display: flex;
  flex-direction: column;

  > h1 {
    span {
      margin-left: 0.5rem;
      color: ${props => props.theme.colors.primary};
    }
  }

  p {
    margin-top: 0.5rem;
    color: ${props => shade(0.2, props.theme.colors.ligth)};
  }
`;

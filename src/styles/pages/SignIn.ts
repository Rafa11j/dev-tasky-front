import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: ${props => props.theme.colors['gray-dark']};

  display: flex;
  justify-content: stretch;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 700px;
  width: 100%;
`;

export const Background = styled.div`
  flex: 1;
  background: url('/login-background.svg') no-repeat center;
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 5rem);
  background: ${props => props.theme.colors['gray-dark']};

  display: flex;

  color: ${props => props.theme.colors.ligth};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;

  display: grid;
  grid-template-columns: 300px auto;
  gap: 2rem;
`;

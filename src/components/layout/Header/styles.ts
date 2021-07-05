import styled from 'styled-components';

export const Container = styled.header`
  height: 5rem;
  background: ${props => props.theme.colors.gray};
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    height: 5rem;
    display: flex;
    align-items: center;

    div + div {
      margin-left: 0.5rem;
    }

    div:last-child {
      margin-left: 1rem;
    }
  }
`;

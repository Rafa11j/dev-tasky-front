import styled from 'styled-components';

export const Container = styled.form`
  background: ${props => props.theme.colors.gray};
  padding: 2rem 3rem;

  border-radius: 0.25rem;

  button {
    margin-top: 2rem;
    width: 100%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;

  img {
    width: 70px;
    height: 70px;
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.ligth};
  text-align: center;

  span {
    margin-left: 0.5rem;
    color: ${props => props.theme.colors.primary};
  }
`;

export const CreateAccountLink = styled.span`
  color: ${props => props.theme.colors.ligth};
  margin-top: 1rem;
  font-size: 14px;
  font-weight: bold;

  a {
    margin-left: 0.5rem;
  }
`;

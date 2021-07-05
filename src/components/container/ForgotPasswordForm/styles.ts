import styled from 'styled-components';

export const Container = styled.form`
  background: ${props => props.theme.colors.gray};
  padding: 2rem 3rem;

  border-radius: 0.25rem;

  button {
    width: 100%;
    margin-top: 2rem;
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.ligth};
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  color: ${props => props.theme.colors.ligth};
  text-align: center;
  margin-bottom: 2rem;
  max-width: 270px;
  font-size: 12px;
`;

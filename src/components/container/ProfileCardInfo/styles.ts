import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  height: fit-content;
  width: 300px;
  border-radius: 0.25rem;
  background: ${props => props.theme.colors.gray};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.div`
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  padding: 0.25rem;

  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  img {
    height: 120px;
    width: 120px;
    object-fit: cover;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const UserStatisticContainer = styled.div`
  margin-top: 2rem;
  padding: 0.5rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  div + div {
    border-left: 1px solid ${props => shade(0.3, props.theme.colors.gray)};
  }
`;

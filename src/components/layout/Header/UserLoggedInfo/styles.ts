import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  padding: 0.25rem;
  border-radius: 0.25rem;

  strong {
    margin-left: 0.5rem;
    color: ${props => props.theme.colors.primary};
  }
`;

export const Avatar = styled.div`
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  padding: 2px;

  img {
    height: 28px;
    width: 28px;
    object-fit: cover;
    border-radius: 50%;
    object-fit: cover;
  }
`;

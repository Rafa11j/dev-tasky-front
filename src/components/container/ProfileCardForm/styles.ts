import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.gray};
  border-radius: 0.25rem;
  width: 100%;
  height: fit-content;
  padding: 2rem;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => shade(0.3, props.theme.colors.gray)};
`;

export const EditButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: ${props => props.theme.colors.gray};

  transition: background 0.2s;

  svg {
    color: ${props => props.theme.colors.ligth};
  }

  &:hover {
    background: ${props => shade(0.2, props.theme.colors.gray)};
  }
`;

export const UserDataContainer = styled.div`
  padding: 1rem 0;

  div:last-child {
    margin-bottom: 0;
  }
`;

export const UserDataInfo = styled.div`
  padding: 1rem;
  border-radius: 0.25rem;
  background: ${props => shade(0.2, props.theme.colors.gray)};
  border-left: 4px solid ${props => props.theme.colors.primary};

  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }

  span {
    margin-left: 0.5rem;
    color: ${props => props.theme.colors.primary};
  }

  margin-bottom: 1rem;
`;

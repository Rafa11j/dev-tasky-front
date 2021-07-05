import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(1.75rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: ${props => props.theme.colors.gray};
  padding: 2rem;
  border-radius: 0.25rem;
  min-width: 240px;
  max-width: 700px;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  &.open {
    animation: ${animation} 0.5s;
  }
`;

export const ModalTitle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${props => props.theme.colors.ligth};
`;

export const CloseButtonContainer = styled.div`
  cursor: pointer;
  margin-left: 1rem;
  border-radius: 0.25rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  svg {
    color: ${props => props.theme.colors.ligth};
  }

  &:hover {
    background: ${props => shade(0.2, props.theme.colors.gray)};
    svg {
      color: ${props => props.theme.colors.ligth};
    }
  }
`;

export const ModalBody = styled.div`
  margin: 1rem 0;
`;

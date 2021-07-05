import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  span {
    background: ${props => props.theme.colors.primary};
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-size: 14px;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    position: absolute;
    top: calc(100% + 1rem);
    width: auto;
    max-width: 200px;
    left: 50%;
    transform: translateX(-50%);
    color: #312e38;
    &::before {
      border-style: solid;
      border-color: ${props => props.theme.colors.primary} transparent;
      border-width: 0 6px 6px 6px;
      content: '';
      bottom: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

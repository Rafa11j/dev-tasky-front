import { lighten, shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      padding: 1rem 2rem;
      line-height: 1.5rem;
      text-align: center;

      color: ${props => lighten(0.2, props.theme.colors.gray)};

      &:first-child {
        text-align: left;
      }
    }

    tbody tr {
      cursor: pointer;
      background: ${props => props.theme.colors.gray};

      transition: background 0.2s;

      &:hover {
        background: ${props => shade(0.1, props.theme.colors.gray)};
      }
    }

    td {
      padding: 1rem 2rem;
      border: 0;

      text-align: center;

      &:first-child {
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        text-align: left;
      }

      &:last-child {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
      }
    }
  }
`;

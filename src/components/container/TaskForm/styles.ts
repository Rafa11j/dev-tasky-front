import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
`;

export const Form = styled.form`
  margin-top: 1rem;

  p {
    margin-bottom: 0.25rem;
    font-weight: 600;
    font-size: 14px;
  }

  button {
    margin-top: 2rem;
  }
`;

export const PriorityContainer = styled.div`
  margin-bottom: 1rem;
`;

export const PriorityRadioButtonGroup = styled.div`
  display: grid;
  grid-template-columns: min-content min-content min-content;
  gap: 0.5rem;
`;

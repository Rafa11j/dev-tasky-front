import { render, RenderResult, fireEvent } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/themes';

const Providers = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: React.ReactElement, options = {}): RenderResult =>
  render(<Providers>{ui}</Providers>, { ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, fireEvent };

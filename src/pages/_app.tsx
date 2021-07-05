import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import AppProvider from '../hooks';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/themes';
import { ApplicationLayout } from '../components/layout/ApplicationLayout';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <GlobalStyles />
        <ApplicationLayout>
          <Component {...pageProps} />
        </ApplicationLayout>
        <ToastContainer autoClose={3000} />
      </AppProvider>
    </ThemeProvider>
  );
}

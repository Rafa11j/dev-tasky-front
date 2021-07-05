import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      success: string;
      danger: string;
      gray: string;
      'gray-dark': string;
      ligth: string;
      dark: string;
    };
  }
}

import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#F3DD55', //'#FDD804',
    },
    secondary: {
      main: '#393937', //'#F66528',
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

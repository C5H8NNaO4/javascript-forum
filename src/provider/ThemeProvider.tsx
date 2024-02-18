import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import { useContext } from 'react';
import { stateContext } from './StateProvider';

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

const bgTheme = createTheme({
  palette: {
    primary: {
      main: '#050819', //'#F66528',
    },
    secondary: {
      main: '#54909A', //'#FDD804',
    },
  },
});
export const ThemeProvider = ({ children }) => {
  const { state } = useContext(stateContext);
  const bg = state.animatedBackground;
  return (
    <MUIThemeProvider theme={bg > 2 ? bgTheme : theme}>
      {children}
    </MUIThemeProvider>
  );
};

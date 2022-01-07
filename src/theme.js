import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#f3ca20',
    },
    secondary: {
      main: '#f90000',
      contrastText: '#f7f6f6',
    },
    background: {
      default: '#000000',
      paper: '#000000',
    },
    text: {
      primary: '#f3ca20',
    },
  },
});
export default theme;

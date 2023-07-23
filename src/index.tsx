import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import GlobalProvider from './contexts/globalContext';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <ThemeProvider theme={theme}>
    <script src="https://cdn.cubing.net/js/cubing/twisty" type="module"></script>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

    <GlobalProvider>
      <App />
    </GlobalProvider>
  </ThemeProvider>,
);

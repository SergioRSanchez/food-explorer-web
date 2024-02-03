import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import theme from './styles/theme';

import { Home } from './pages/Home/index';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Teste } from './pages/Teste';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Teste />
    </ThemeProvider>
  </React.StrictMode>,
)

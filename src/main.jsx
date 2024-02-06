import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import theme from './styles/theme';

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { NewMeal } from './pages/NewMeal';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NewMeal />
    </ThemeProvider>
  </React.StrictMode>,
)

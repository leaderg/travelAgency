import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import { theme } from './palette.js'
import { ThemeProvider } from '@material-ui/styles';

import Dashboard from './Pages/Dashboard';
import Quotes from './Pages/Quotes';

import Navigation from './Components/Navigation';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
      </Switch>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


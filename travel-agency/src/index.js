import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Pages/Home';

import Navigation from './Components/Navigation';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);


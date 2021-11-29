import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './AppRouter.js'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


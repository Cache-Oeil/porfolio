import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import Screens from './components/Screens';

import './global.scss';

ReactDOM.render(
  <MuiThemeProvider>
    <Screens />
  </MuiThemeProvider>
  , document.getElementById('root')
);
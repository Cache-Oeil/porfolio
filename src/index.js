import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Screens from './components/Screens';

import './global.scss';

const theme = createMuiTheme();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Screens />
  </MuiThemeProvider>
  , document.getElementById('root')
);
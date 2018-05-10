import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import { getTranslation } from 'redux-i18n';
import i18n from "redux-i18n/immutable";
import Screens from './components/Screens';

import './global.scss';

ReactDOM.render(
  <MuiThemeProvider>
    <Screens />
  </MuiThemeProvider>
  , document.getElementById('root')
);
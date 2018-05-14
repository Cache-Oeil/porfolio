import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { BrowserRouter, HashRouter } from 'react-router-dom';

import I18n from "redux-i18n";

import Screens from './Screens';

import reducers from './reducers';

import { locale } from '../assets/translations';
import './global.scss';

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <I18n translations={locale()} initialLang="fr">
        <HashRouter>
          <Screens />
        </HashRouter>
      </I18n>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root')
);
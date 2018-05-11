import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { BrowserRouter, HashRouter } from 'react-router-dom';

import { getTranslation } from 'redux-i18n';
import i18n from "redux-i18n/immutable";

import Screens from './components/Screens';

import reducers from './reducers';

import './global.scss';

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <HashRouter>
        <Screens />
      </HashRouter>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root')
);
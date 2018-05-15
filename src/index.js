import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import I18n from "redux-i18n";

import Screens from './components/Screens';

import reducers from './reducers';

import { locale } from '../assets/translations';
import './global.scss';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducers, applyMiddleware(middleware))

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <I18n translations={{}} initialLang="fr" useReducer={true}>
        <ConnectedRouter history={history}>
          <Screens />
        </ConnectedRouter>
      </I18n>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root')
);
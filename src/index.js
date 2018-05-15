import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { createBrowserHistory } from 'history';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import I18n from "redux-i18n";
import { setLanguage } from 'redux-i18n';

import Screens from './Screens';

import reducers from './reducers';

import { locale } from '../assets/translations';
import './global.scss';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <I18n translations={locale()} initialLang="fr">
        <HashRouter>
          <Screens lang={store.getState().i18nState.lang} setLang={(lang) => store.dispatch(setLanguage(lang))}/>
        </HashRouter>
      </I18n>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root')
);
import { combineReducers } from 'redux';
import {i18nState} from 'redux-i18n';
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  routing: routerReducer,
  i18nState
});

export default reducers;
import { combineReducers }  from 'redux';
import { routerReducer } from 'react-router-redux';
import { i18nState } from 'redux-i18n';

import { reducer as appReducer } from './modules/app/reducer';
import { reducer as raidsReducer } from './modules/raids/reducer';
import { reducer as reportsReducer } from './modules/reports/reducer';

const rootReducer = combineReducers(
  {
    routing: routerReducer,
    app: appReducer,
    raids: raidsReducer,
    reports: reportsReducer,
    i18nState
  }
);

export default rootReducer;

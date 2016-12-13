import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import questionnaire from './data/questionnaire';
import answers from './data/answers'
import depressionSeverity from './data/depressionSeverity'

// create an object for the default data
const defaultState = {
  questionnaire,
  answers,
  depressionSeverity
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

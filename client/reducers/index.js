import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questionnaire from './questions';
import answers from './answers'

const rootReducer = combineReducers({
	questionnaire,
	answers,
	routing: routerReducer 
});

export default rootReducer;

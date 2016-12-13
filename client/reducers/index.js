import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questionnaire from './questions';
import answers from './answers'
import results from './results'

const rootReducer = combineReducers({
	questionnaire,
	answers,
	results,
	routing: routerReducer 
});

export default rootReducer;

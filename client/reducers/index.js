import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questionnaire from './questions';
import answers from './answers'
import results from './results'
import depressionSeverity from './depressionSeverity'
import therapists from './therapists'

const rootReducer = combineReducers({
	questionnaire,
	answers,
	results,
	depressionSeverity,
	therapists,
	routing: routerReducer 
});

export default rootReducer;

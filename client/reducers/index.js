import { combineReducers } from 'redux'

import questionnaire from './questions'
import answers from './answers'
import results from './results'
import depressionSeverity from './depressionSeverity'
import therapists from './therapists'

const rootReducer = combineReducers({
  questionnaire,
  answers,
  results,
  depressionSeverity,
  therapists
})

export default rootReducer

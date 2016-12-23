import { createStore } from 'redux'

// import the root reducer
import rootReducer from './reducers/index'

// import the data files
import questionnaire from './data/questionnaire'
import answers from './data/answers'
import depressionSeverity from './data/depressionSeverity'
import therapists from './data/therapists'

// create an object for the default data
const defaultState = {
  questionnaire,
  answers,
  therapists,
  depressionSeverity
}

const store = createStore(rootReducer, defaultState)

export default store

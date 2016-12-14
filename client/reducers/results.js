function results(state = [], action) {
  const { question, questionIndex, answerValue } = action
  switch (action.type) {
  case 'GET_ANSWERS':
   return Object.assign({}, state, { [questionIndex]: answerValue })
    default:
      return state
  }
}

export default results

const initialState = {
  submitAnswer: false,
  submitTherapist: false
}

const results = (state = initialState, action) => {
  const { questionIndex, answerValue } = action
  switch (action.type) {
    case 'GET_ANSWERS':
      return Object.assign({}, state, {
        [questionIndex]: answerValue
      })
    case 'SUBMIT_ANSWERS':
      return Object.assign({}, state, {
        submitAnswer: true
      })
    case 'SUBMIT_THERAPISTS':
      return Object.assign({}, state, {
        submitTherapist: true
      })
    default:
      return state
  }
}

export default results


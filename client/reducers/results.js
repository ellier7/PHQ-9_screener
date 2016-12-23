const initialState = {
	// id: 0,
	submitAnswer: false,
	submitTherapist: false
}
function results(state = initialState, action) {
  const { question, questionIndex, answerValue } = action
  switch (action.type) {
  case 'GET_ANSWERS':
   return Object.assign({}, state, { 
   	[questionIndex]: answerValue
   })
   case 'SUBMIT_ANSWERS' :
      return Object.assign({}, state, {
        submitAnswer: true
      })
       case 'SUBMIT_THERAPISTS' :
      return Object.assign({}, state, {
        submitTherapist: true
      })
    default:
      return state
  }
}

export default results


// action creator to keep track of the question number and answer value when a user selects an answer
export const increment = (questionIndex, answerValue) => {
  return {
    type: 'GET_ANSWERS',
    questionIndex,
    answerValue
  }
}

// triggered when all answers are submitted, Submit component will be rendered
export const submitAnswers = (e) => {
  e.preventDefault()
  return {
    type: 'SUBMIT_ANSWERS'
  }
}

// triggered when therapist is selected, Appointment component will be rendered
export const submitTherapists = (e) => {
  e.preventDefault()
  return {
    type: 'SUBMIT_THERAPISTS'
  }
}

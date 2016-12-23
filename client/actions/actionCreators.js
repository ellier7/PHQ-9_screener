// increment
export const increment = (questionIndex, answerValue) => {
  return {
    type: 'GET_ANSWERS',
    questionIndex,
    answerValue
  }
}

export const submitAnswers = (e) => {
  e.preventDefault()
  return {
    type: 'SUBMIT_ANSWERS'
  }
}

export const submitTherapists = (e) => {
  e.preventDefault()
  return {
    type: 'SUBMIT_THERAPISTS'
  }
}

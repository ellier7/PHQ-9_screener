// action creator to keep track of the question number and answer value when a user selects an answer
export function increment(question, questionIndex, answerValue) {
  return {
    type: 'GET_ANSWERS',
    question, 
	questionIndex, 
	answerValue
  }
}

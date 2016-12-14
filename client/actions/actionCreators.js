// increment
export function increment(question, questionIndex, answerValue) {
  return {
    type: 'GET_ANSWERS',
    question, 
	questionIndex, 
	answerValue
  }
}

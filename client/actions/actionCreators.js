// increment
export const increment = (questionIndex, answerValue) => {
	// console.log("INCREMENT")
	// console.log("questionIndex", questionIndex)
	// console.log("answerValue", answerValue)
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
	console.log("SUBMITTHERAPISTS ACTION")
  return {
    type: 'SUBMIT_THERAPISTS'
  }
}
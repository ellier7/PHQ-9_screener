// increment
export function increment(question, index, value, selectedAnswer) {
	console.log("INCREMENTTTT")
	console.log("QUESTIONS", selectedAnswer)
  return {
    type: 'GET_ANSWERS',
   question, 
	index, 
	value
  }
}


// increment

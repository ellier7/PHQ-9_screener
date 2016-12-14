// increment
export function increment(question, index, value) {
  return {
    type: 'GET_ANSWERS',
    question, 
	index, 
	value
  }
}

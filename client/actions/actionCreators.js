// increment
export function increment(question, index, score) {
	console.log("INCREMENTTTT")
	console.log("QUESTION", question)
	console.log("INDEX FROM ACTIOn", index)
	console.log("SCORE", score)
  return {
    type: 'GET_ANSWERS',
    question,
    index,
    score
  }
}
// increment
export function increment(index, score) {
	console.log("INCREMENTTTT")
  return {
    type: 'INCREMENT_SCORE',
    index,
    score
  }
}
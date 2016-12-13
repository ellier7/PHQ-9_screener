function questionnaire(state = [], action) {
	// console.log("ACTIONINDEX", action.index)
  // switch (action.type) {
  // case 'GET_ANSWERS':
  //     // console.log("STATE", state);
  //     const index = action.index
  //          return state.map((question, index) => {
  //          	console.log("QUESTION", question)
  //          	// console.log("INDEX", index)

  //          	// const score = Object.keys(results).reduce((memo, key) => memo + results[key].value, 0);
  //     	 return Object.assign({}, question, {
  //     	 	score: action.score
  //     	 })
  // })
  //      default:
  //     return state;
  // // const { question, index, score } = action;
  // //  return {
  // //       ...state,
  // //       // [question]: { index, value }
  // //     };
  // //   default:
  // //     return state;
  // }
  switch (action.type) {
    default:
      return state;
  }
}

export default questionnaire;

          // console.log("QUESTION", question.question)
        // console.log("ACTIONQUESTIONINDEX", action.index)
        // console.log("SCORE", action.score)

  //          return state.map((question, index) => {
  //       if (index !== action.index) {
  //         return Object.assign({}, question)
  //     } else {
  //     	 return Object.assign({}, question, {
  //           score: action.score
  //         })
  //     }
  // })
  //   default:
  //     return state;
  // }

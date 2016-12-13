function questionnaire(state = [], action) {
	// console.log("ACTIONINDEX", action.index)
  switch(action.type) {
    case 'INCREMENT_SCORE':
          const { question, index, score } = action;
          console.log("QUESTION", question)
  console.log("INDEX", index)
  console.log("SCORE", score)
      return state.map((question, index) => {
        Object.assign({}, question, {
        	index: index,
            score: score
          })
      })
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

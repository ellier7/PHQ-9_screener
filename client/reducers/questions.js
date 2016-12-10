// function posts(state = [], action) {
//   console.log("STATE", state)
//   switch(action.type) {
//     case 'INCREMENT_LIKES' :
//       console.log("Incrementing Likes!!");
//       const i = action.index;
//       return [
//         ...state.slice(0,i), // before the one we are updating
//         {...state[i], likes: state[i].likes + 1},
//         ...state.slice(i + 1), // after the one we are updating
//       ]
//     default:
//       return state;
//   }
// }

// export default posts;


function questionnaire(state = [], action) {
	// console.log("ACTIONINDEX", action.index)
  switch(action.type) {
    case 'INCREMENT_SCORE':
           return state.map((question, index) => {
          console.log("QUESTION", question.question)
        if (index === action.index) {
        console.log("ACTIONQUESTIONINDEX", action.index)
        console.log("SCORE", action.score)
          return Object.assign({}, question, {
            score: action.score
          });
        } else {
          console.log("WHEN WILL I HIT HERE", index)
          return Object.assign({}, question);
        }
      })
    default:
      return state;
  }
}

export default questionnaire;


// export const questionAnswers = (state, { type, answerId, questionId }) => {
//     console.log("initial STATE", initialState)
//   switch(type) {
//     case types.SELECT_ANSWER:
//       return Object.assign({}, state, { [questionId]: answerId })
//     default:
//       return state
//   }
// }

// const questionnaire = (state = initialState, action) => {
//       // console.log("QUESTIONAIRE ANSWERS", state.questionAnswers)
//   return Object.assign({}, state, {
//     questionAnswers: questionAnswers(state.questionAnswers, action)
//   })
// }

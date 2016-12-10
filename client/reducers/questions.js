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
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incrementing Likes!!");
      const i = action.index;
      console.log(">>>I", i)
      return state
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

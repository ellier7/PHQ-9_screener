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


function questions(state = [], action) {
  console.log("STATE", state)
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

export default questions;

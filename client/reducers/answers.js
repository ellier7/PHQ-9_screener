function answers(state = [], action) {
  switch(action.type) {
    case 'GET ANSWERS' :
      console.log("Incrementing Likes!!");
      const i = action.index;
      console.log(">>>I", i)
      return state
    default:
      return state;
  }
}

export default answers;


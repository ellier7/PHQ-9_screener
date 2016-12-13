export default (state=[], action) => {
  switch (action.type) {
  case 'GET_ANSWERS':
      console.log("Incrementing Likes!!");
      // const index = action.index
           return state.map((question, index) => {
      	 return Object.assign({}, question, {
            score: action.score
          })
  })
       default:
      return state;
  }
}
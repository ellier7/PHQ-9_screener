function results(state = [], action) {

    const { question, index, value } = action;
  switch (action.type) {
  case 'GET_ANSWERS':
   // return {
   //      ...state,
   //      [index]: value
   //    };
   return Object.assign({}, state, { [index]: value })
    default:
      return state;
  }

}

export default results;


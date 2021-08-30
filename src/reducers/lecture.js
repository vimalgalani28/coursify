const lectureReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_LECTURES":
      return action.lectures;
    case "RESET_LECTURES":
      return [];
    default:
      return state;
  }
};

export default lectureReducer;

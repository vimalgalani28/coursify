const courseReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_COURSES":
      return action.courses;
    case "ADD_COURSE":
      return [...state, action.course];
    case "RESET_COURSES":
      return [];
    default:
      return state;
  }
};

export default courseReducer;

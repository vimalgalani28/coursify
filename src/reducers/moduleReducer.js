const moduleReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_MODULES":
      return action.modules;
    case "RESET_MODULES":
      return [];
    default:
      return state;
  }
};

export default moduleReducer;

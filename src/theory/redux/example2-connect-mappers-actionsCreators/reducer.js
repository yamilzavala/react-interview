import actionTypes from "./actionTypes";

const user_reducer = (state = [], action) => {
  if (action.type === actionTypes.addUser) {
    return [...state, action.payload];
  }

  return state;
};

export default user_reducer;
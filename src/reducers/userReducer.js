import uuid from "uuid/v1";

export const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [
        ...state,
        {
          name: action.user.name,
          age: action.user.age,
          id: uuid(),
        },
      ];

    case "REMOVE_USER":
      return state.filter((user) => user.id !== action.id);
    default:
      return state;
  }
};

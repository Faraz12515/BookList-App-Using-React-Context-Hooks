import React, { createContext, useReducer } from "react";

export const AgeContext = createContext();

const ageReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ONE":
      return state + 1;
    case "ADD_FIVE":
      return state + 5;
    default:
      return state;
  }
};

dispatch({ type: "ADD_ONE" });
dispatch({ type: "ADD_FIVE" });

export default function AgeContextProvider(props) {
  const [age, dispatch] = useReducer(ageReducer, 20);

  const value = { age, dispatch };

  return (
    <AgeContext.Provider value={value}>{props.children}</AgeContext.Provider>
  );
}

import React, { createContext, useReducer, useEffect } from "react";
import { userReducer } from "../reducers/userReducer";

export const UserContext = createContext();

const ninjas = [
  { name: "Shaun", age: 23, id: 1 },
  { name: "Ryu", age: 25, id: 2 },
];

export default function UserContextProvider(props) {
  const [ninja, dispatch] = useReducer(userReducer, ninjas, () => {
    const localData = localStorage.getItem("NINJAS"); //NINJAS is key//
    return localData ? JSON.parse(localData) : ninjas;
  });

  useEffect(() => {
    localStorage.setItem("NINJAS", JSON.stringify(ninja));
  }, [ninja]);

  const value = { ninja, dispatch };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

export default function BookContextProvider(props) {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("BOOKS"); //BOOKS is key//
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("BOOKS", JSON.stringify(books));
  }, [books]);

  const value = { books, dispatch };

  return (
    <BookContext.Provider value={value}>{props.children}</BookContext.Provider>
  );
}

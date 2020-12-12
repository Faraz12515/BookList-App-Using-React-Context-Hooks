import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

export default function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "Name of the wind", author: "patrick rothfuss", id: 1 },
    { title: "The final empire", author: "brandon sanderson", id: 2 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const value = { books, addBook, removeBook };

  return (
    <BookContext.Provider value={value}>{props.children}</BookContext.Provider>
  );
}

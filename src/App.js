import React from "react";
// import BookForm from "./components/BookForm";
// import BookList from "./components/BookList";
// import BookContextProvider from "./contexts/BookContext";

import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      {/* <BookContextProvider> */}
      {/* <BookList />
      <BookForm /> */}
      <UserContextProvider>
        <Navbar />
        <UserList />
        <UserForm />
      </UserContextProvider>
      {/* </BookContextProvider> */}
    </div>
  );
}

export default App;

import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export default function BookForm() {
  const { dispatch } = useContext(UserContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(name, age);
    dispatch({
      type: "ADD_USER",
      user: {
        name,
        age,
      },
    });
    setName("");
    setAge("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ninja name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ninja age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input type="submit" value="Add ninja" />
    </form>
  );
}

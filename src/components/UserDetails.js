import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function BookDetails({ user }) {
  const { dispatch } = useContext(UserContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_USER", id: user.id })}>
      <div className="title">{user.name}</div>
      <div className="author">{user.age}</div>
    </li>
  );
}

import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Navbar() {
  const { ninja } = useContext(UserContext);
  return (
    <div className="navbar">
      <h1>Ninjas List</h1>
      <p>Currently {ninja.length} ninjas are active...</p>
    </div>
  );
}

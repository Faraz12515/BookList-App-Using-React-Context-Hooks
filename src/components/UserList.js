import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import UserDetails from "./UserDetails";

export default function UserList() {
  const { ninja } = useContext(UserContext);

  useEffect(() => {
    console.log("users :>> ", ninja);
  }, []);

  return ninja.length ? (
    <div className="book-list">
      <ul>
        {ninja.map((user) => {
          return <UserDetails user={user} key={user.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No users to display... :(</div>
  );
}

import React, { useContext } from "react";
import User from "./User";
import { UseContext } from "../Context/UseContext";

function Users() {
  const {users} = useContext(UseContext);

  return (
    <div className="UsersWrap">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Users;

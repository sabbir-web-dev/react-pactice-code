import React from "react";
import Users from "./UserHendle/Users";
import NewUser from "./UserHendle/NewUser";
import UsersProvider from "./Context/UseContext";

function UseContextProject() {
  return (
    <UsersProvider>
      <NewUser />
      <Users />
    </UsersProvider>
  );
}

export default UseContextProject;

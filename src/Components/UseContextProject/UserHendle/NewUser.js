import React, { useContext, useState } from "react";
import { UseContext } from "../Context/UseContext";

function NewUser() {
  const {addUser} = useContext(UseContext);
  const [newName, setNewName] = useState("");
  const henhlesubmit = (e) => {
    e.preventDefault();
    addUser(newName)
    setNewName("")
  };
  return (
    <div>
      <form onSubmit={henhlesubmit}>
        <input
          type="text"
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          required
        />
        <button type="submit" className="UsrBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewUser;

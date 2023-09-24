import React, { useState } from "react";
import "./Form.css";

export default function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHendel = (e) => {
    setName(e.target.value);
  };

  const emailHendel = (e) => {
    setEmail(e.target.value);
  };

  const passHendel = (e) => {
    setPassword(e.target.value);
  };

  const submitHendel = (e) => {
      const userInfo = {
        name : name,
        email: email,
        password : password
      }

      console.log(userInfo)
    e.preventDefault();
  };

  return (
    <>
      <form action="" onSubmit={submitHendel}>
        <div>
          <label htmlFor="name">Name:</label> <br />
          <input
            onChange={nameHendel}
            type="text"
            value={name}
            name="name"
            id="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label> <br />
          <input
            onChange={emailHendel}
            type="email"
            value={email}
            name="email"
            id="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label> <br />
          <input
            onChange={passHendel}
            type="password"
            value={password}
            name="password"
            id="password"
            required
          />
        </div>

        <div className="">
          <button type="submit" className="btn">
            submit
          </button>
        </div>
      </form>
    </>
  );
}

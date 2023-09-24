import React, { useState } from "react";
import "./Form.css";

export default function FormComponentTwo() {
  const [user,setUser] = useState({name:"",email:"",password:""})
  const {name,email,password }= user;


  const changeHendel = (e) =>{
    setUser({...user,[e.target.name]:e.target.value})
  }


  // const changeHendel= (e) => {
  //   const fileName = e.target.name;
  //   if(fileName === "name"){
  //     setUser({name: e.target.value, email,password});
  //   }
  //   else if(fileName === "email"){
  //     setUser({name, email : e.target.value, password});
  //   }
  //   else if(fileName === "password"){
  //     setUser({name, email,password: e.target.value});
  //   }
  // };

  const submitHendel = (e) => {
      console.log(user)
    e.preventDefault();
  };

  return (
    <>
      <form action="" onSubmit={submitHendel}>
        <div>
          <label htmlFor="name">Name:</label> <br />
          <input
            onChange={changeHendel}
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
            onChange={changeHendel}
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
            onChange={changeHendel}
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

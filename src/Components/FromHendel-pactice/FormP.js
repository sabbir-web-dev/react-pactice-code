import "./Form.css";
import { useState } from 'react';

export default function FormP() {
    const [user,setUser] = useState({name:"",email:"",password:""});
    const {name,email,password} = user;

    const inputHendel = (e) => {
      setUser({...user,[e.target.name]:e.target.value})
      
    }
    const submitHendel = (e) =>{
      console.log(user)
      e.preventDefault();
    }

  return (
    <>
      <form action="" onSubmit={submitHendel}>
        <div>
          <label htmlFor="name">Name:</label> <br />
          <input
            onChange={inputHendel}
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
            onChange={inputHendel}
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
            onChange={inputHendel}
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

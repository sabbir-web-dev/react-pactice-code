import React, { useState } from 'react'


import "./From.css"
import { useFormik } from 'formik';



export default function Form() {
    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");

    
    // console.log(formik.values.name)
    // const hendelName = (e) => {
    //     setName(e.target.value)
    // }
    // const hendelEmail = (e) => {
    //     setEmail(e.target.value)
    // }
    // const hendelPassword = (e) => {
    //     setPassword(e.target.value)
    // }
    
    // const submitHendel = (e) =>{
    //     e.preventDefault()
    //     const data = {
    //         name,
    //         email,
    //         password
    //     }

    //     console.log(data)
    // }
    const formik = useFormik({
        initialValues :{
            name : "",
            email : "",
            password: ""
        },
        onSubmit: (value, {resetForm}) => {
            console.log(value);
            resetForm({values : ""});
            
        }
    })



    
  return (
    <div className='formWrap'>
      <h3>Sign Up</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-wrap">
            <label htmlFor="name">Name:</label>
            <input 
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            />
        </div>
        <div className="input-wrap">
            <label htmlFor="email">Email:</label>
            <input
             type="email"
             name="email"
             id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            />
        </div>
        <div className="input-wrap">
            <label htmlFor="password">Password:</label>
            <input 
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            />
        </div>
        <div className="f">
            <button type="submit">
                sign up
            </button>
        </div>
      </form>
    </div>
  )
}

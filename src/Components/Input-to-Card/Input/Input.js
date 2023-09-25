import React from "react";
import style from "./Input.module.css";
import "./Form.css"
import { useFormik } from "formik";


export default function Input(props) {
  
    const formik = useFormik({
      initialValues : {
        name : "",
        email: ""
      },
      onSubmit : (values,{resetForm})=> {
        props.data(values)
        resetForm({
          name : "",
          email : ""
        })
      }
    })
  return (
    <div className={style.input}>
      <h2>Input Your Data</h2>

      <form onSubmit={formik.handleSubmit} >
        <div class="group">
          <input type="text" 
           name="name"
           onChange={formik.handleChange} 
           value={formik.values.name}
           required 

           />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label htmlFor="name">Name</label>
        </div>

        <div class="group">
            <input 
            type="email" 
            name="email" 
            id="" 
            onChange={formik.handleChange}
            value={formik.values.email}
            required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label htmlFor="email">Email</label>
        </div>

        <div className="">
            <button type="submit" className={style.btn}>submit</button>
        </div>

      </form>
    </div>
  );
}

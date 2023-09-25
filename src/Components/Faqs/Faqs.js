import React, { useState } from 'react'
import Style from "./faqs.module.css"

// import { FaBeer } from "react-icons/fa" ;


export default function Faqs(props) {
    const {answer,question} = props.data;

    const [faqAns,setFaqAns] = useState(false);

  return (
    <div className={Style.faq}>
        <div onClick={()=> setFaqAns(!faqAns)} className={Style.qusWrap}>
            <h3>{question}</h3>
            <span>{faqAns ? "-" : "+"}</span>
        </div>
        {
            faqAns && <p><small>{answer}</small></p>
        }
    </div>
  )
}

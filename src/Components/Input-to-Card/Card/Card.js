import React from 'react'
import style from "./Card.module.css"

export default function Card(props) {
  const {name,email} = props.data
  return (
    <div className={style.cardWrap}>
        <h3>Name:{name}</h3>
        <span>Email:{email}</span>
        <div className={style.signature}>
            <p>{name}</p>
        </div>
    </div>
  )
}

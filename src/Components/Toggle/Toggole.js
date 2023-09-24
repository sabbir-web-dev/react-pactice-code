import React, { useState } from 'react'

export default function Toggole() {
  const [togole,setTogole] = useState(true);

  return (
    <div>

    {togole &&<p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod voluptatem rem voluptates unde obcaecati, perferendis recusandae assumenda alias dicta ab ducimus dolorum distinctio quidem. Quae vitae nulla consectetur amet.</p>}

      <button onClick={() => setTogole(!togole)}>{togole ? "hide" : "show"}</button>
    </div>
  )
}

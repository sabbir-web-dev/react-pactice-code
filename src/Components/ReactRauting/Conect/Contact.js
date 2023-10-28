import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const naviget = useNavigate();
  return (
    <div className='Wrap'>
      <h1>Contact</h1>
      <p className='p' style={{background: "#f003"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, sit suscipit ducimus asperiores earum iusto ipsa quasi quos saepe. Numquam tenetur vitae, error ducimus ab sapiente. Aspernatur voluptatibus molestiae dolores!</p>
      <button onClick={() => naviget("/")}>Go Home</button>
    </div>
  )
}

export default Contact

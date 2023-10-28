import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
// import { blogData } from './BlogData';


function Blog() {
  const {title} = useParams();
  // const [data,setData] = useState("")

  const navigate = useNavigate();
  const {state} = useLocation()

  // useEffect(() =>{
  //   const filter = blogData.filter(blogData => blogData.title === title);
  //   return setData(filter[0].body)
  // },[title])

  const hendleCLick = () =>{
    navigate("/blog")
  }
  return (
    <div>
      <h2>{title}</h2>
      <p>{state.slice(0,300)}</p>
      <p>{state.slice(300,500)}</p>
      <p>{state.slice(500,500000)}</p>
      <button onClick={hendleCLick}>All BLog</button>
    </div>
  )
}

export default Blog

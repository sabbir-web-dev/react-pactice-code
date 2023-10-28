import React, { useState } from "react";
import { blogData } from "./BlogData";
import { Link } from "react-router-dom";

const data = blogData;
function Blogs() {
  const [blogs] = useState(data);

  const sliceData = (data, number) => {
    if(data.length > number){
      return data.slice(0,number) + "....";
    }else{
      return data;
    }
  }
  return (
    <div className="Wrap">
      <h1>Blog</h1>
      <section>
      {
        blogs.map(blog =>{
          const {id,title,body} = blog;
          return(
            <article key={id}>
              <h3>{title}</h3>
              <p>{sliceData(body,120)}</p>
              <Link to={title} state={body} >lrean more.</Link>
            </article>
          )
        })
      }
      </section>
    </div>
  );
}

export default Blogs;

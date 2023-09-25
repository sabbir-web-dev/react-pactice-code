import React, { useEffect, useState } from 'react'

export default function LodingAndErr() {
    const [data,setData] = useState(null);
    const [lodding,setIsLoding] = useState(true);

    useEffect(() =>{
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{
                if(!res.ok){
                    throw Error ("Can No call api")
                }else{
                    return res.json();
                }
            })
            .then(data =>{
                setData(data)
                setIsLoding(false)
            })
        },2000)
    },[]);

    const loddingMessage = <p>Data is Lodding...</p>

    const Element = data && data.map((data) =>{
        return <div 
        style={
            {border:"1px solid #222",
            padding: "10px",
            width: "300px",
            margin: "10px"
            }} 
            key={data.id}>
            <h3>Nane:{data.name}</h3>
            <p><small>Email:{data.email}</small></p>
        </div>
    })
  return (
    <div>
        {
            lodding && loddingMessage
        }
      {
        Element
      }
    </div>
  )
}

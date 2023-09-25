import React, { useEffect, useState } from 'react'
 
export default function useFatch(url) {
    const [data,setData] = useState(null);
    const [isLodding,setIsLodding] = useState(true);
    const [error,setError] = useState(null)


    useEffect(()=>{
        fetch(url)
        .then((res) =>{
            if(!res.ok){
                throw Error ("Data is Not Hear");
            }
            else{
                return res.json();
            }
        })
        .then(data =>{
            setData(data);
            setIsLodding(false)
            setError(null)
        })
        .catch((err) =>{
            setError(err.message)
            setIsLodding(false)
        })
    },[url])

  return {data,isLodding,error}
}

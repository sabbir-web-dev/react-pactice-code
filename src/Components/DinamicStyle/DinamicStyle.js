import React, { useEffect, useState } from "react";

function DinamicStyle() {

  const [name,setName] = useState("");
  const [dStyle, setDstyle] = useState(false);
  
  useEffect(()=>{
    if(name.length < 2){
      setDstyle(false)
    }else{
      setDstyle(true)
    }
  },[name])

  const hendleChange = (e) => {
    setName(e.target.value);
  }
  return (
    <div>
      <input
        style={{ background: dStyle && "green" }}
        type="text"
        value={name}
        onChange={hendleChange}
      />
    </div>
  );
}

export default DinamicStyle;

import React, { useCallback, useState } from "react";
import Counter from "../UseMamo&useCallbacke/Counter";

function MamoUseCallbacke() {
  const [count, setCount] = useState(0);
  const [toggle,setToggle] = useState(false)
  console.log("iam Rander")

  const messageUp = useCallback(() =>{
    setCount(count +1)
  },[count])
  
  return (
    <div>
      {toggle ? "on" : "of"}
      <button onClick={()=> setToggle(!toggle)}>toggle</button>
      <h2>{count}</h2>
      <button onClick={() => setCount((count + 1))}>+</button>
      <Counter count={count} messageUp={messageUp} />
    </div>
  );
}

export default MamoUseCallbacke;

import React, { useRef } from "react";

function RefhookFComponents() {
  const userNameRef = useRef();

  const submitHandle = (e) => {
    e.preventDefault(); // Corrected the typo here
    const userName = userNameRef.current.value;
    userNameRef.current.style.color = "red"
    console.log(userName);
  }

  return (
    <div>
      <div>
        <form onSubmit={submitHandle}>
          <input type="text" ref={userNameRef}/>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default RefhookFComponents;

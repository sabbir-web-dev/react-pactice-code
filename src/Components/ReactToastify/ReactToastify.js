import React from "react";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

function ReactToastify() {
  const hendleToastify = () => {
    toast("Hi i'm Toastify Message")
  };
  return (
    <div>
      <button onClick={hendleToastify}>Click Me</button>
      <ToastContainer />
    </div>
  );
}

export default ReactToastify;

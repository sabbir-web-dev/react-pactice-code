import React, { useState } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import Input from "../Input/Input";
import Card from "../Card/Card";

export default function AllSet() {

  const [card,setCard] = useState()
  const valueHendel = (value) => {
    setCard(<Card data={{name: value.name ,email: value.email}} />)
  };

  return (
    <div>
      <Header />
      <Input data={valueHendel} />
      {
        card 
      }
      {/* <Footer /> */}
    </div>
  );
}

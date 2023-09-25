import React from 'react';
import Style from "./Home.module.css"
import Data from "./FaqData.json"
import Faqs from '../Faqs';

export default function FaqWrap() {

  return (
    <div className={Style.homeWrap}>
        <h2>RAQs</h2>
        <div className={Style.faqWrap}>
            {
                Data.map((data,index) => <Faqs key={index} data={data}  />)
            }
        </div>
    </div>
  )
}

import React from 'react'
import CardComponents from '../Card/Card'
import State from '../State/State'
import Condison from '../Condisonal-steatment/Condison'
import OnchangeClass from '../Onchange-event-classC/OnchangeClass'
import Data from "../../Data.json";
import Shop from "../Shop/Shop";
import Baind from '../Bind/Baind'
import Count from '../Count/Count'
import FormP from '../FromHendel-pactice/FormP'
import TodoApp from "../TodoApp/TodoBody/TodoApp"
import FaqWrap from "../Faqs/Home/FaqWrap"
import AllSet from "../Input-to-Card/HeaderAndFooter/AllSet"
import Toggle from "../Toggle/Toggole"
import LodingAndErr from '../LoddingAndErrr/LodingAndErr'
import UseCustomHook from '../CustomHookUse/UseCustomHook'
import ReactToastify from '../ReactToastify/ReactToastify'
import CountryHome from '../CountryApp/CountryHome'
import DinamicStyle from '../DinamicStyle/DinamicStyle'
import UseEfectPactice from './../UseEfect/UseEfectPactice';
import PropsType from '../PropsType/PropsType'
import RefHook from '../RefExemple/RefHook'
import RefhookFComponents from '../RefExemple/RefhookFComponents'
import ReduceHook from "../UseReducer/ReduceHook"
import PropBuling from '../PropBulding/PropBuling'
import UseContextComponents from '../UseContext/UseContext'
import UseContextProject from '../UseContextProject/UseContextProject'
import Routess from '../ReactRauting/RauteApp/Routes'

export default function AlinOne() {
  return (
    <div>
      <Routess />
      <UseContextProject />
      <UseContextComponents />
      <PropBuling />
      <ReduceHook />
      <RefhookFComponents />
      <RefHook />
      <PropsType />
      <DinamicStyle />
      <CountryHome />
      <ReactToastify />
      <UseCustomHook />
      <LodingAndErr /> 
      <UseEfectPactice />
      <AllSet />
      <Toggle />
      <FaqWrap />
        <TodoApp />
        <FormP />
        <Count />
        <OnchangeClass />
        <Baind />
        <CardComponents />
        <State />
        <Condison />
        <OnchangeClass />

        <div className="shop-wrap"
         style={{display: "flex", flexWrap:"wrap", gap: "10px",
         padding: "0px 5%"}}>
        {Data.map((data) => (
          <Shop
            key={data.id}
            title={data.title}
            image={data.image}
            dsc={data.description}
            price={data.price}
            rate={data.rating.rate}
          />
        ))}
      </div>
    </div>
  )
}

import "./play.css";
import {FiPlay } from "react-icons/fi";
import React from 'react'
import toggle from "../Toggle/toggle";

const play = ({togglePage, toggle}) => {

  function checkCondition(){
    if(toggle==='up')
      togglePage();
  }

  return (
    
    <div onClick={checkCondition} className="play__container">
      <FiPlay className="play__icon"/>
      <p className="play__text">Start slideshow</p>
    </div>
  )
}

export default play

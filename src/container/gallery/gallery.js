import React from 'react'
import { Photodescription,Photo } from '../../components'
import "./gallery.css";
import {Footwidgets} from "../../components";
const gallery = ({carousle,photoArray,togglePage,smallPhoto,currentPhoto}) => {
  return (
    <div className="gallery__container">
      
      <Photo carousle={carousle} photoArray={ photoArray} togglePage={togglePage}/>
      {/* <Photodescription/> */}
      
    {/* <Footwidgets currentPhoto={currentPhoto} smallPhoto={smallPhoto}/> */}
    </div>
  )
}

export default gallery

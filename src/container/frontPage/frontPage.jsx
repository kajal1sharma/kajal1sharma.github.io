import React from 'react'
import "./frontPage.css";
import {BsPlayCircleFill} from "react-icons/bs";
const FrontPage = ({togglePage}) => {
  return (
    <div className='frontPage__container1'>
      <div onClick={togglePage} className='play__button-container'>
        <BsPlayCircleFill className='play__button'/>
      </div>
      <img className="frontpage__image" src={require("../../photos/folderimage.jpg")} alt="##"/>
      <div className='frontPage__container2'>
        <h2>Project Gallery</h2>
        <h3>9/21/18</h3>
     
          <p>Modified 7/3/20, 12:03 PM <span className='span1'>10 images</span><span className='span2'>jAlbum - customizable image galleries · Projector</span></p>
      </div>

    </div>
  )
}

export default FrontPage

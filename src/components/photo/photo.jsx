import React from 'react'
import "./photo.css";
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { AiOutlineCloseCircle} from 'react-icons/ai';
import { FiArrowLeft ,FiArrowRight} from 'react-icons/fi';


const Photo = ({carousle,photoArray,togglePage}) => {
  const [imageval, setimage] =useState({imageNumber:0});
  const pause=useRef(true);
  const timer =useRef(null);
  useEffect( ()=>{
    
    //console.log(imageval.imageNumber)
    //clearTimeout(timer.current);
     
    if(carousle===true  && pause.current===true)
        {clearTimeout(timer.current);
          timer.current= setTimeout(()=>{
            setimage({...imageval, imageNumber:(imageval.imageNumber+1)%(photoArray.length)});
          },2000);
        }
    else {
        clearTimeout(timer.current);
    }
  },[imageval,carousle,photoArray])

  function photoPause(){
   // console.log("entering")
    pause.current=pause.current===true?false:true;
    clearTimeout(timer.current);
    setimage({...imageval,imageNumber:(imageval.imageNumber)%(photoArray.length)});
  }

  if(photoArray.length===0){
    return (
    <div className="photo__container">
     <p>No Such match!!</p>
     <div className='cross__info-container' onClick={togglePage}>
        < AiOutlineCloseCircle className='cross__info'/>
     </div>
    
    </div>
    )
  }
  else if(photoArray.length===1){
    return <div className="photo__container" onClick={photoPause}>
                
          <img className='photo__img' src={require(`../../photos/${photoArray[imageval.imageNumber]}`)} alt="#"/>
      
      </div>
  }
  else
  return (
    <div>
      <div>
        <FiArrowLeft className='leftArrow' onClick={()=>{setimage({...imageval, imageNumber:(imageval.imageNumber===0?photoArray.length-1:imageval.imageNumber-1)%(photoArray.length)})} }/>
      </div>
      <div className="photo__container" onClick={photoPause}>
                
          <img className='photo__img' src={require(`../../photos/${photoArray[imageval.imageNumber]}`)} alt="#"/>
      
      </div>
      <div>
        <FiArrowRight className='rightArrow'  onClick={()=>{setimage({...imageval, imageNumber:(imageval.imageNumber+1)%(photoArray.length)})} }/>
      </div>
    </div>
    
  )
}

export default  Photo

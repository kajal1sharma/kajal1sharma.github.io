import "./footwidgets.css"

import React from 'react'

const Footwidgets = ({smallPhoto,currentPhoto}) => {
  return (
    <div className=" foot__container">
      {smallPhoto.map( (ele)=>{
        return <img onClick={currentPhoto} id={ele} className ="widgets__photo " src={require(`../../photos/${ele}`)} alt={ele}/>
      })}
      {console.log(smallPhoto)}
    </div>
  )
}

export default Footwidgets;

import React from 'react'
import "./toggle.css"
import { FiArrowUp ,FiArrowDown} from 'react-icons/fi'
const toggle = ({toggle,togglePage}) => {
  
    return toggle==="down"?
    <div onClick={togglePage}>
      <FiArrowDown className='downArrow'/>
    </div>
  
  :
  
    <div onClick={togglePage}>
            <FiArrowUp className='upArrow'/>
    </div>
  
}

export default toggle

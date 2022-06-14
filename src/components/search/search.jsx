import React from 'react';
import "./search.css";
import { useState } from 'react';
import { FiArrowLeft ,FiSearch} from 'react-icons/fi';


const Search = ({searchPhoto}) => {
  const[clicked , setclicked]=useState(false);
  let searchkey="";
  function getInput(event){
      console.log(event.target.value);
      searchkey=event.target.value;
     
  }
  function searchfun(){
    console.log(searchkey)
    if(searchkey!=="" && searchkey!==" " && searchkey!==null){
      setclicked(false);
      searchPhoto(searchkey);
    }
    
  }
  function getsearchbar(){
    if(clicked===true){
      return <div className='searchbar'>
          <input onChange={getInput}/>
          <FiSearch className='search__search' onClick={searchfun}/>
          <FiArrowLeft className='leftArrow__search' onClick={()=>{clicked===true?setclicked(false):setclicked(true)}}/>
      </div>
    }
  }
 
  return (
    <div>{console.log(clicked+"is it clickde")}
    <div className='search__container' onClick={()=>{clicked===true?setclicked(false):setclicked(true)}}> 
      <FiSearch className='search__icon'/>
      <p className='search__text'>Search</p>
    </div>
    {getsearchbar()}
    </div>
  )
}

export default Search

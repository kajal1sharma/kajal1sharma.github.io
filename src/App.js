import React from 'react';
import "./app.css";
import { Gallery, Sidebar,Frontpage } from './container'
import { Toggle } from './components';
import { useState } from 'react';
import Photoobj from './utils/getPhoto';

import SearchPhotoinArray from './utils/searchPhotoinArray';
//cntl+D=>multiple
const App = () => {
  const [values, setvalues ] =useState({toggle:"up",carousle:false , samllPhoto:Photoobj.SmallPhotoArray,photoArray:Photoobj.PhotoArray});
  
  function togglePage(){
    console.log(Photoobj.PhotoArray);
    values.toggle==='up'?setvalues({toggle:"down",carousle:true ,samllPhoto:Photoobj.SmallPhotoArray,photoArray:Photoobj.PhotoArray})
    :setvalues({toggle:"up",carousle:false,photoArray:Photoobj.PhotoArray,samllPhoto:Photoobj.SmallPhotoArray});
  }
  
  function searchPhoto(searchKey){
    console.log("search this photo "+ searchKey);
    let album=SearchPhotoinArray(searchKey);
    console.log("this is what i have got ",album)
    if(album.length===0){
      setvalues({...values,toggle:"down",carousle:false, photoArray:album});
    }
    else{
      setvalues({...values,toggle:"down",carousle:true, photoArray:album});
    }
    
    console.log(values.photoArray);
 }

 function currentPhoto(event){
    let phtotoName=event.target.id;
    setvalues({...values, })  
 }

  return values.toggle==='up'?(
                        <div>
                            <div className='main__container'>
                                
                              <div>
                                  <Toggle togglePage={togglePage} toggle={values.toggle}/>
                                  <Sidebar toggle={values.toggle} togglePage={togglePage} searchPhoto={searchPhoto}/>
                              </div>
                              <div>
                                  <Frontpage togglePage={togglePage}/>
                              </div>
                              
                            </div>
                            <div>
                                < Gallery currentPhoto={currentPhoto} togglePage={togglePage} smallPhoto={values.samllPhoto} carousle={values.carousle} className ="photo__div"  photoArray={ values.photoArray}/>
                            </div>
                            </div>
                          )
                          :
                          (<div className='main__container'>
                            <div>
                                <Toggle togglePage={togglePage} toggle={values.toggle}/>
                                <Sidebar toggle={values.toggle} togglePage={togglePage} searchPhoto={searchPhoto}/>
                            </div>
                            <div>
                                < Gallery currentPhoto={currentPhoto} carousle={values.carousle} smallPhoto={values.samllPhoto} togglePage={togglePage} className ="photo__div" photoArray={ values.photoArray}/>
                            </div>
                            </div>
                          )

 
    
}

export default App

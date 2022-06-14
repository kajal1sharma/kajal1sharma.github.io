import React from 'react';
import "./sidebar.css";
import { Search, Play } from '../../components';
const Sidebar = ({toggle,togglePage,searchPhoto}) => {
  return (
    <div className="sidebar__container">
      <div>
        <Search searchPhoto={searchPhoto} />
      </div>
      <div>
        <Play toggle={toggle} togglePage={togglePage}/>
      </div>
    </div>
  )
  }

export default Sidebar;

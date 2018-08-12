import React from 'react';
import './components.css';

const Sidebar = () => {
  return (
    <aside className="yoti-sidebar">
      <div className="yoti-sidebar__content">
        <div className="icon-activity"></div>
        <p className="yoti-sidebar__text">
          Activity
        </p>  
      </div>  
    </aside>
  )
};

export default Sidebar;

import React, { useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  const [extend, setExtend] = useState(false);

  const toggleMenu = () => {
    setExtend(!extend);
  };

  return (
    <div className='sidebar'>
      <div className="top">
        <img className='menu' src={assets.menu_icon} alt="" onClick={toggleMenu} />
        <div className="newchat">
          <img src={assets.plus_icon} alt="" />
          {extend ? <p>New chat</p> : null}
        </div>
        {extend ? (
          <div className="recent">
            <p className="recenttitle">Recent</p>
            <div className="recententry">
              <img src={assets.message_icon} alt="" />
              <p>What is react ...</p>
            </div>
          </div>
          
        ) : null}
      </div>
      <div className="bottom">
        <div className="recententry">
          <img src={assets.question_icon} alt="" />
          {extend ? <p>Help</p> : null}
        </div>
        <div className="recententry">
          <img src={assets.history_icon} alt="" />
          {extend ? <p>Activity</p> : null}
        </div>
        <div className="recententry">
          <img src={assets.setting_icon} alt="" />
          {extend ? <p>Settings</p> : null}
        </div>
      </div>
      
    </div>
    
  );
};

export default Sidebar;
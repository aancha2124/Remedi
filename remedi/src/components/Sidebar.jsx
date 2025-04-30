import React, { useState } from 'react';
import './Sidebar.css'; 
import menu_icon from './menu_icon.png';
import plus_icon from './plus_icon.png';
import chat_icon from './chat_icon.png';
import question_icon from './question_icon.png';
import time_icon from './time_icon.png';
import setting_icon from './setting_icon.png';

function SideBar() {

  const [extended , setExtended] = useState(false);
  


  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" src={menu_icon} alt="Menu Icon"  onClick={()=>extended?setExtended(false):setExtended(true)} />
        <div className="new-chat">
          <img src={plus_icon} alt="New Chat Icon" />
          
          {extended?<p>New Chat</p>:null}
        </div>
        
        {extended?
        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={chat_icon} alt="Chat Icon" />
            <p>What is react...</p>
          </div>
        </div>:null}
      </div>

      <div className="bottom">
        <div className="bottom-item">
          <img src={question_icon} alt="Help Icon" />
          {extended?<p>Help</p>:null}
        </div>

        <div className="bottom-item">
          <img src={time_icon} alt="Activity Icon" />
          {extended?<p>Activity</p>:null}
        </div>

        <div className="bottom-item">
          <img src={setting_icon} alt="Settings Icon" />
         {extended? <p>Settings</p>:null}
        </div>
      </div>
    </div>
  );
}

export default SideBar;

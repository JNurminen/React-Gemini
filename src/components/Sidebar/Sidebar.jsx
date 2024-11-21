import React, { useContext, useState } from "react";
import "./Sidebar.css";
import {assets} from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {

    const [extended, setExtended] = useState(false); // extended state for sidebar
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context) // get onSent function and prevPrompts from context 

    // recent prompt click handler
    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

  return (
    <div className="sidebar">
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" /> {/* toggle extended state */}
            <div onClick={()=>newChat()} className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>:null} {/* show only when extended is true */}
            </div>

            {extended?
             <div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompts.map((item, index)=> {
                    return (
                    <div onClick={() => loadPrompt(item)} className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p>{item.slice(0, 18)} ...</p>
                    </div>
                    )
                })}

                
            </div>
            :null} {/* show only when extended is fallse */}           
        </div>

        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null} {/* show only when extended is true */}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null} {/* show only when extended is true */}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Settings</p>:null} {/* show only when extended is true */}
            </div>
        </div>
    </div>
  );
};


export default Sidebar;
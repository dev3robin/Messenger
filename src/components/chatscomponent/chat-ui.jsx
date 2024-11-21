import { useEffect,useRef, useState, useContext } from "react";
import ReactDOM from "react-dom";
import ProfileCard from "../profileCard"
import ChatProfile from "./chatProfile";
function Chatting(props){
      const {isChatting,setIsChatting,chatData}=props
      const [isChatProfile,setIsChatProfile]=useState(false)
      const inputRef=useRef(null)
      useEffect(() => {
            if (isChatting && inputRef.current) {
                inputRef.current.focus();
            }
        }, [isChatting, inputRef]);
      function handleChatProfile(){
            setIsChatProfile(true)
      }
      return <>
                  {ReactDOM.createPortal(
                  <div className={"chatting "+(isChatting? "visible":'')}>
                        <div className="top-layer">
                              <div className="return-btn hovering">
                                    <button onClick={()=>{setIsChatting(false)}}>
                                          <i class="fa-solid fa-arrow-left"></i>
                                    </button>
                              </div>
                              <div className="user-detail-div" onClick={handleChatProfile}>
                                    <ProfileCard size='40px' avatar={chatData?.avatar}/>
                                    <div className="user-detail">
                                          <span>{chatData?.username}</span>
                                          <span>last Active</span>
                                    </div>
                              </div>
                              <div className="hovering"><i class="fa-solid fa-phone"></i></div>
                              <div  className="hovering"><i class="fa-solid fa-video"></i></div>
                              <div  className="hovering"><i class="fa-solid fa-info"></i></div>
                        </div>
                        <div className="msg">
                        </div>
                        <div className="bottom-layer">
                              <div className="bottom-layer-icon"><i class="fa-solid fa-plus"></i></div>
                              <div className="bottom-layer-icon"><i class="fa-solid fa-camera"></i></div>
                              <div className="bottom-layer-icon"><i class="fa-solid fa-image"></i></div>
                              <div className="bottom-layer-icon"><i class="fa-solid fa-microphone"></i></div>
                              <div className="bottom-layer-input"><input ref={inputRef} type="text" placeholder="Message"/></div>
                              <div className="bottom-layer-icon"><span>👨‍🔧</span></div>
                        </div>
                  </div>,
                  document.getElementById('chatPortal')
            )}

            {isChatProfile && 
                  <ChatProfile 
                        isChatProfile={isChatProfile}
                        setIsChatProfile={setIsChatProfile}
                        chatData={chatData}
                  
                  />

            }
      </>
      
}
export default Chatting
import { useState,useContext,useEffect } from "react";
import ReactDOM from "react-dom";
import ProfileCard from "../profileCard"
import ChatProfile from "./chatProfile";
import { InputIsFocused, InputIsNotFocused } from "./chats-input";
import { UserD } from "../contextApi/user";
// import chatHistory from "../data/chatHistory";

function Chatting(props){
      const {isChatting,setIsChatting,chatData}=props
      const { User, setUser } = useContext(UserD);
      const [isChatProfile,setIsChatProfile]=useState(false)
      const [isInputFocused,setInputFocused]=useState(false)
      const [newMessage,setNewMessage]=useState('')
      const [selectedIndex, setSelectedIndex] = useState(null);
      const [chatHistory, setChatHistory] = useState(
            JSON.parse(localStorage.getItem("chatHistory")) || {}
          );

      const loggedUserName=User.userName;
      const selectedUserName=chatData.userName;
      const logUserId=User.userId
      
      function CovnName(loggedUserName, selectedUserName){
            const user1 = loggedUserName.trim().split(" ");
            const user2 =selectedUserName.trim().split(" ");

            const lastName1 = user1[user1.length - 1];
            const lastName2 = user2[user2.length - 1];
            
            const sortedNames = [lastName1, lastName2].sort();
            return sortedNames.join("-");
      }
      const conName = CovnName(loggedUserName,selectedUserName)
      const conversation=chatHistory[conName]
      //scroll when new msg added
      useEffect(() => {
            const msgContainer = document.querySelector(".msg");
            msgContainer.scrollTop = msgContainer.scrollHeight;
          }, [chatHistory]);

      // add new messages to localstroages    
      useEffect(() => {
            const handleStorageChange = () => {
              setChatHistory(JSON.parse(localStorage.getItem("chatHistory")) || {});
            };
        
            // Add event listener for storage changes
            window.addEventListener("storage", handleStorageChange);
        
            return () => {
              window.removeEventListener("storage", handleStorageChange);
            };
          }, []);
      // ading new msg 
      const addNewMessage = (message) => {
            const updatedChatHistory = {
                  ...chatHistory,
                  [conName]: [...(conversation || []), message],
            };
            
            setChatHistory(updatedChatHistory);
            localStorage.setItem("chatHistory", JSON.stringify(updatedChatHistory));
            };
      const handleMessageClick = (index) => {
        setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
      };
      function handleInputFocusing(){
            setInputFocused(true)
      }
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
                                    <ProfileCard size='40px' avatar={chatData?.photos.profile}/>
                                    <div className="user-detail">
                                          <span id="user-detail-name">{chatData?.userName}</span>
                                          <span>last active</span>
                                    </div>
                              </div>
                              <div className="hovering"><i class="fa-solid fa-phone"></i></div>
                              <div  className="hovering"><i class="fa-solid fa-video"></i></div>
                              <div  className="hovering"><i class="fa-solid fa-info"></i></div>
                        </div>
                        <div className="msg-bottom-layer">
                              <div className="msg">
                                    {!conversation?(
                                          ""):
                                          (conversation.map((MsgObj,index) => {
                                                return (
                                                      <div className="msg-div" key={index}>
                                                            {selectedIndex === index && 
                                                            <div className="time-div">{MsgObj.timestamp}</div>}
                                                            <div className={`msg-box ${MsgObj.senderId === logUserId ? 'outgoing' : 'incoming'}`}
                                                                        onClick={() => handleMessageClick(index)} >
                                                                  <div className={`msg-text ${MsgObj.senderId === logUserId ? 'bgColor_blue' : 'bgColor_grey'}`}>
                                                                        {MsgObj.content}
                                                                  </div>
                                                            </div>
                                                      </div>
                                                );
                                          }))}
                              </div>
                              {isInputFocused ? 
                                    <InputIsFocused 
                                          setInputFocused={setInputFocused}
                                          newMessage={newMessage}
                                          setNewMessage={setNewMessage}
                                          conName={conName}
                                          User={User}
                                          chatData={chatData}
                                          ConName={conName}
                                          addNewMessage={addNewMessage}
                                    />
                                    :
                                    <InputIsNotFocused 
                                          handleInputFocusing={handleInputFocusing}
                                    />
                              }
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
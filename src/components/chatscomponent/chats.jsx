import React, { useState, useEffect,useContext } from 'react';
import ProfileCard from "../profileCard";
import Chatting from './chat-ui';;
function Chats() {
  const [userData, setUserData] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [isChatting,setIsChatting]=useState(false)
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);
  function passChats(user){
    setSelectedChat(user);
    setIsChatting(true);
  }

  return (
    <div className="chats">
      {userData.map(user => (
        <div key={user.id} 
          className="chat-item"
          onClick={()=>passChats(user)}  
        >
          <div>
            <ProfileCard  
              size={user.story ? "40px" : "52px"} 
              avatar={user.avatar} 
              story={user.story}
            />
          </div>
          <div>
            <div>{user.username}</div>
            <div>Last message here</div>
          </div>
          <div className="noti-controler"><i class="fa-solid fa-bell-slash"></i></div>
        </div>
      ))}
      {isChatting && (
        <Chatting
          isChatting={isChatting}
          setIsChatting={setIsChatting}
          chatData={selectedChat}
        />
      )}
    </div>
  );
}

export default Chats;

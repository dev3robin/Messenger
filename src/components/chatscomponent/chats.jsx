import React, { useState, useContext } from "react";
import ProfileCard from "../profileCard";
import Chatting from "./chat-ui";
import Messenger from "../data/data"; // Assume Messenger contains the user data
import { UserD } from "../contextApi/user";

function Chats() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isChatting, setIsChatting] = useState(false);
  const { User } = useContext(UserD);

  function passChats(user) {
    setSelectedChat(user);
    setIsChatting(true);
  }
  
  function getUserDataById(userId) {
    const users=Object.values(Messenger).map(user=>{
      return user
    })
    return users.find(user => user.userId === userId); // Locate the user by userId
  }
  return (
    <div className="chats">
      {User.friends.map(friend => {
        const userData = getUserDataById(friend.userId); 
        if (!userData) return null; // Skip if userId does not exist in Messenger
        return (
          <div
            className="chat-item"
            key={friend.userId}
            onClick={() => passChats(userData)} // Pass the retrieved user data to passChats
          >
            
            <div>
              <ProfileCard
                size={userData.storyInfo.isStory ? "40px" : "52px"}
                avatar={userData.photos.profile}
                story={userData.storyInfo.isStory}
              />
            </div>
            <div>
              <div className="username">{userData.userName}</div>
              <div className="lastmsg">Last message here</div>
            </div>
            <div className="noti-controler">
              <i className="fa-solid fa-bell-slash"></i>
            </div>
          </div>
        );
      })}

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

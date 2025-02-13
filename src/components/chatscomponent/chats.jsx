import React, { useState, useContext, useEffect } from "react";
import ProfileCard from "../profileCard";
import Chatting from "./chat-ui";
import Messenger from "../data/data";
import { LoggedUser } from "../contextApi/user";
import {SelectedChat} from "../contextApi/selectedChat";
import { IsChatting } from "./chattingStatus";

function Chats() {
  // const [isChatting, setIsChatting] = useState(false);
  const {isChatting, setIsChatting}=useContext(IsChatting)
  const {selectedChat,setSelectedChat}=useContext(SelectedChat)
  const { loggedUser } = useContext(LoggedUser);
  
  const [chatHistory, setChatHistory] = useState(
    JSON.parse(localStorage.getItem("chatHistory")) || {}
  );

  function passChats(user) {
    setSelectedChat(user);
    setIsChatting(true);
  }
  function getLoggedUserDataById(userId) {
    return Object.values(Messenger).find(user => user.userId === userId);
  }

  function CovnName(loggedUserName, selectedUserName) {
    const user1 = loggedUserName.trim().split(" ");
    const user2 = selectedUserName.trim().split(" ");

    const lastName1 = user1[user1.length - 1];
    const lastName2 = user2[user2.length - 1];

    const sortedNames = [lastName1, lastName2].sort();
    return sortedNames.join("-");
  }
  //updated chatHistory
  useEffect(() => {
    const handleStorageChange = () => {
      setChatHistory(JSON.parse(localStorage.getItem("chatHistory")) || {});
    };
    window.addEventListener("storage", handleStorageChange);
    const interval = setInterval(handleStorageChange, 1000);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);
  
  //gaurd course
  if (!loggedUser || !loggedUser.friends) return null;
  return (
    <div className="chats">
      {loggedUser.friends.map(friend => {
        const UsersFriends = getLoggedUserDataById(friend.userId);

        const convName=CovnName(loggedUser.userName,UsersFriends.userName)
        const conversation=chatHistory[convName]        
        const lastMsg = conversation?.[conversation.length - 1];
        const result = conversation && lastMsg && lastMsg.content 
          ? (lastMsg.senderId === friend.userId ? lastMsg.content  : `You: ${lastMsg.content}`)
          : "No messages yet";

        if (!UsersFriends) return null;

        return (
          <div
            className="chat-item"
            key={friend.userId}
            onClick={() => passChats(UsersFriends)} 
          >
            <div>
              <ProfileCard
                size={UsersFriends.storyInfo.isStory ? "40px" : "52px"}
                avatar={UsersFriends.photos.profile}
                story={UsersFriends.storyInfo.isStory}
              />
            </div>
            <div>
              <div className="username">{UsersFriends.userName}</div>
              <div className="lastmsg">{result}</div>
            </div>
            <div className="noti-controler">
              <i className="fa-solid fa-bell-slash"></i>
            </div>
          </div>
        );
      })}

      {isChatting && selectedChat && (
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

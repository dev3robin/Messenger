import React, { useContext, useState } from "react";
import "../navSection/as-css.css";
import Messenger from "../data/data";
import ProfileCard from "../profileCard";
import { LoggedUser } from "../contextApi/user";
import { SelectedChat } from "../contextApi/selectedChat";
import Chatting from "../chatscomponent/chat-ui";
import { IsChatting } from "../chatscomponent/chattingStatus";

const SearchQuery = (props) => {
  const { query } = props;
  const { loggedUser } = useContext(LoggedUser);
  
  const {setSelectedChat}=useContext(SelectedChat)
  const {isChatting, setIsChatting}=useContext(IsChatting)

  const [selectedTab, setSelectedTab] = useState("all");
  const chatData=JSON.parse(localStorage.getItem("chatHistory")) || {}

  function searchUsers(query, Messenger) {
    const lowerQuery = query.toLowerCase();
    return Object.values(Messenger).filter(user =>
      user.userName.toLowerCase().includes(lowerQuery)
    );
  }

  const filteredUsers = searchUsers(query, Messenger);
  const logdUserF_list = Object.values(loggedUser.friends);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  function searchUserMessages(messagesData, loggedInUserId, searchTerm) {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const result = {};
  
    Object.entries(messagesData).forEach(([conversationId, messages]) => {
      messages.forEach(({ senderId, receiverId, content }) => {
        if (
          (senderId === loggedInUserId || receiverId === loggedInUserId) &&
          content.toLowerCase().includes(lowerSearchTerm)
        ) {
          const otherUserId = senderId === loggedInUserId ? receiverId : senderId;
          if (!result[otherUserId]) {
            result[otherUserId] = 0;
          }
          const matchCount = (content.match(new RegExp(lowerSearchTerm, "gi")) || []).length;
          result[otherUserId] += matchCount;
        }
      });
    });
  
    return result;
  }

  const msgCount=searchUserMessages(chatData, loggedUser.userId, query)
  
  return (
    <>
    <div className="searchQuery">
      <div className="nav">
        <button 
          className={selectedTab === "all" ? "selected" : ""} 
          onClick={() => handleTabClick("all")}
        >All</button>
        <button 
          className={selectedTab === "people" ? "selected" : ""} 
          onClick={() => handleTabClick("people")}
        >People</button>
        <button 
          className={selectedTab === "messages" ? "selected" : ""} 
          onClick={() => handleTabClick("messages")}
        >Messages</button>
        <button 
          className={selectedTab === "channels" ? "selected" : ""} 
          onClick={() => handleTabClick("channels")}
        >Channels</button>
      </div>

      {selectedTab === "all" && (
        <>
          <div className="connnectedPeople">
            {filteredUsers.length > 0 ? (
              filteredUsers
                .filter(user => logdUserF_list
                  .map(friend => friend.userId)
                  .includes(user.userId))
                .map(user => (
                  <div key={user.userId} className="user-card">
                    <ProfileCard
                      size={user.storyInfo.isStory ? "30px" : "35px"}
                      avatar={user.photos.profile}
                      story={user.storyInfo.isStory}
                    />
                    <div>
                      <span>{user.userName}</span>
                      <span>Connected</span>
                    </div>
                  </div>
                ))
            ) : (
              <p>No results found</p>
            )}
          </div>
          {/* {filteredUsers.length > 0?():''} */}
          <div className="mp">
            <div className="subline">
              <div>More People</div>
              <div>see more</div>
            </div>
            <div className="morePeople">
              {filteredUsers.length > 0 ? (
                filteredUsers
                  .filter(user => !logdUserF_list
                    .map(friend => friend.userId)
                    .includes(user.userId))
                  .map(user => (
                    <div key={user.userId} className="user-card">
                      <ProfileCard
                        size={user.storyInfo.isStory ? "30px" : "35px"}
                        avatar={user.photos.profile}
                        story={user.storyInfo.isStory}
                      />
                      <div>
                        <span>{user.userName}</span>
                        <span>Not connected</span>
                      </div>
                    </div>
                  ))
              ) : (
                <p>No results found</p>
              )}
            </div>
          </div>

          <div>
            <div className="subline">
              <div>Messages</div>
              <div>see more</div>
            </div>
            <div className="messages">
              {Object.entries(msgCount).length > 0 ? (
                Object.entries(msgCount)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 3).map(([userId, count]) => {
                  const user = Object.values(Messenger).find(u => u.userId === userId);
                  return user ? (
                    <div key={userId} className="message-result"  onClick={() => {
                      setSelectedChat(user);
                      setIsChatting(true);
                }}>
                      <ProfileCard 
                        size="35px" 
                        avatar={user.photos.profile} 
                      />
                      <div className="UN_Count">
                        <span>{user.userName}</span>
                        <span>{count} matched messages</span>
                      </div>
                    </div>
                  ) : null;
                })
              ) : (
                <p>No messages found</p>
              )}
            </div>
          </div>
          <div>
            <div className="subline">
              <div>Discover</div>
              <div>see more</div>
            </div>
            <div className="discover"></div>
          </div>
          <div>
            <div className="subline">
              <div>Channels</div>
              <div>see more</div>
            </div>
            <div className="channels"></div>
          </div>
        </>
      )}

      {selectedTab === "people" && (
        <>
        <div className="connnectedPeople">
          {filteredUsers.length > 0 ? (
            filteredUsers
              .filter(user => logdUserF_list
                .map(friend => friend.userId)
                .includes(user.userId))
              .map(user => (
                <div key={user.userId} className="user-card">
                  <ProfileCard
                    size={user.storyInfo.isStory ? "30px" : "35px"}
                    avatar={user.photos.profile}
                    story={user.storyInfo.isStory}
                  />
                  <div>
                    <span>{user.userName}</span>
                    <span>Connected</span>
                  </div>
                </div>
              ))
          ) : (
            <p>No results found</p>
          )}
        </div>
        <div className="mp">
        <div className="subline">
          <div>More People</div>
          <div>see more</div>
        </div>
        <div className="morePeople">
          {filteredUsers.length > 0 ? (
            filteredUsers
              .filter(user => !logdUserF_list
                .map(friend => friend.userId)
                .includes(user.userId))
              .map(user => (
                <div key={user.userId} className="user-card">
                  <ProfileCard
                    size={user.storyInfo.isStory ? "30px" : "35px"}
                    avatar={user.photos.profile}
                    story={user.storyInfo.isStory}
                  />
                  <div>
                    <span>{user.userName}</span>
                    <span>Not connected</span>
                  </div>
                </div>
              ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
        </>
      )}

      {selectedTab === "messages" && (
        <div>
          <div className="subline">
            <div>Messages</div>
            <div>see more</div>
          </div>
          <div className="messages">
          {Object.entries(msgCount).length > 0 ? (
              Object.entries(msgCount).map(([userId, count]) => {
                const user = Object.values(Messenger).find(u => u.userId === userId);
                return user ? (
                  <div key={userId} className="message-result"  onClick={() => {
                    setSelectedChat(user);
                    setIsChatting(true);
              }}>
                    <ProfileCard 
                      size="35px" 
                      avatar={user.photos.profile} 
                    />
                    <div className="UN_Count">
                      <span>{user.userName}</span>
                      <span>{count} matched messages</span>
                    </div>
                  </div>
                ) : null;
              })
            ) : (
              <p>No messages found</p>
            )}
          </div>
        </div>
      )}

      {selectedTab === "channels" && (
        <div>
          <div className="subline">
            <div>Channels</div>
            <div>see more</div>
          </div>
          <div className="channels"></div>
        </div>
      )}
      {isChatting && <Chatting />}
    </div>
    </>
  );
};

export default SearchQuery;

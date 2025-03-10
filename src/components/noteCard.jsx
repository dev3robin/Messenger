import { useState,useEffect,useContext } from "react";
import ProfileCard from "./profileCard";
import Messenger from "./data/data";
import { LoggedUser } from "./contextApi/user";
function NoteCard(){
      const { loggedUser } = useContext(LoggedUser);
      console.log(loggedUser);
      
      function getUserDataById(userId) {
            const users=Object.values(Messenger).map(user=>{
              return user
            })
            return users.find(user => user.userId === userId); // Locate the user by userId
          }
      if (!loggedUser || !loggedUser.friends) return null; 
      return (
            <div className="note-card">
                  {loggedUser.friends.map(friend => { 
                        const userData = getUserDataById(friend.userId); 
                        if (!userData || !userData.noteInfo.hasNotes) return null;
                              return (
                                    <div key={userData.noteInfo.noteId} className="note-item">
                                          <span className="note">{userData.noteInfo.noteContent}</span>
                                          <span className="noteC-profile">
                                                <ProfileCard
                                                      size={"55px"}
                                                      avatar={userData.photos.profile}
                                                      story={userData.story} 
                                                />
                                          </span>
                                          <span className="noteC-username">{userData.userName}</span>
                                    </div>
                              )})}

            </div>
      )
}

export default NoteCard;
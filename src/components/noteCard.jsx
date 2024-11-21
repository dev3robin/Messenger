import { useState,useEffect } from "react";
import ProfileCard from "./profileCard";

function NoteCard(){
      const [userData, setUserData] =useState([]);
      useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }
      }, []);
      return (
            <div className="note-card">
                  {userData
                  .filter(user => user.noteInfo.hasNotes === true)
                  .map(user => (
                        <div key={user.id} className="note-item">
                              <span className="note">{user.noteInfo.note}</span>
                              <span className="noteC-profile">
                                    <ProfileCard  npm run dev
                                          size={user.story ? "50px" : "62px"}
                                          avatar={user.avatar}
                                          story={user.story} 
                                    />
                              </span>
                              <span className="noteC-username">{user.username}</span>
                        </div>
                  ))}

            </div>
      )
}

export default NoteCard;
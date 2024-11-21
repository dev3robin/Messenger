import ProfileCard from "../profileCard";
import React, { useState, useEffect } from 'react';

function PumkCard(){
      const [userData, setUserData] = useState([]);
      useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }
      }, []);
      return (
            <div className="su-container">
                  { userData.map((user ,userIndex) => (
                        userIndex <3 &&(
                              <div className="suCard" key={user.id}>
                                    <div><ProfileCard size="30px" avatar={user.avatar}/></div>
                                    <div className="unAndmuf">
                                          <div><span>{user.username}</span></div>
                                          <div className="muFriendcounter"><span>32 mutual friends including...</span></div>
                                    </div>
                                    <div><button className="add-friend-btn">ADD FRIEND</button></div>
                              </div>
                        )
                  ))}
                  
            </div>
      )
}



export default PumkCard


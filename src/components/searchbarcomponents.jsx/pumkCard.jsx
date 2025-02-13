import Messenger from "../data/data";
import ProfileCard from "../profileCard";
import React, { useState, useEffect } from 'react';

function PumkCard(){
      // const [userData, setUserData] = useState([]);
      // useEffect(() => {
      //   const storedUserData = localStorage.getItem('userData');
      //   if (storedUserData) {
      //     setUserData(JSON.parse(storedUserData));
      //   }
      // }, []);
      return (
            <div className="su-container">
                  { Object.values(Messenger).map((user ,userIndex) => (
                        userIndex <3 &&(
                              <div className="suCard" key={user.userId}>
                                    <div><ProfileCard size="30px" avatar={user.photos.profile}/></div>
                                    <div className="unAndmuf">
                                          <div><span>{user.userName}</span></div>
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


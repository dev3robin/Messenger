import React, { useState, useEffect } from 'react';
import ProfileCard from "../profileCard"
function SuggestedUserCard(){
      const [userData, setUserData] = useState([]);
      useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }
      }, []);
      return (
            <div className="su-container">
                  {userData.map(user =>{
                        return(
                              <div className="suCard" key={user.id}>
                                    <ProfileCard 
                                          size={user.story ? "40px" : "52px"}
                                          avatar={user.avatar}
                                          story={user.story}
                                    />
                                    <span>{user.username}</span>
                              </div>
                        )
                  })}
                  
            </div>
      )
}

export default SuggestedUserCard
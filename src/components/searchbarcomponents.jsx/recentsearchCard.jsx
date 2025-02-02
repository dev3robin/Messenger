import ProfileCard from "../profileCard"
import React, { useState, useEffect } from 'react';
import Messenger from "../data/data";


function RecentSearchCard(){
      const [userData, setUserData] = useState([]);
      useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }
      }, []);
      return (
            <div className="rs-container">
                  {userData.map((user,index) =>{
                        if(index<8){
                        return(
                              <div className="rsCard" key={user.id}>
                                    <ProfileCard
                                          size={user.story ? "40px" : "52px"}
                                          avatar={user.avatar}
                                          story={user.story}
                                    />
                                    <span>{user.username}</span>
                              </div>
                        )
                  }})}
                  
            </div>
      )
}

export default RecentSearchCard
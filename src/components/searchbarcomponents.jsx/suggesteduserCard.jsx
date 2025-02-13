import React from 'react';
import ProfileCard from "../profileCard"
import Messenger from '../data/data';
function SuggestedUserCard(){
      return (
            <div className="su-container">
                  {Object.values(Messenger).map(user =>{
                        return(
                              <div className="suCard" key={user.userId}>
                                    <ProfileCard 
                                          size={user.story ? "40px" : "52px"}
                                          avatar={user.photos.profile}
                                          story={user.story}
                                    />
                                    <span>{user.userName}</span>
                              </div>
                        )
                  })}
                  
            </div>
      )
}

export default SuggestedUserCard
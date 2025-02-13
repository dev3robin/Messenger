import ProfileCard from "../profileCard"
import React from 'react';
import Messenger from "../data/data";


function RecentSearchCard(){
      return (
            <div className="rs-container">
                  {Object.values(Messenger).map((user,index) =>{
                        if(index<8){
                        return(
                              <div className="rsCard" key={user.userId}>
                                    <ProfileCard
                                          size={user.story ? "40px" : "52px"}
                                          avatar={user.photos.profile}
                                          story={user.story}
                                    />
                                    <div  className="rsUN"><span>{user.userName}</span></div>
                              </div>
                        )
                  }})}
                  
            </div>
      )
}

export default RecentSearchCard
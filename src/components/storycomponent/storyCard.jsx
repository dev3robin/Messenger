import { useEffect, useState } from "react";
import ProfileCard from "../profileCard";


function StoryCard(){
      const [userData,setUserData]=useState([])
      useEffect(()=>{
            const storedUserData = localStorage.getItem('userData');
            if (storedUserData) {
                  setUserData(JSON.parse(storedUserData));
            }
      },[])
      return (
            <div className="story-container">
                  {userData.filter(user=>user.story===true)
                  .map(user=>(
                        <div className="story-bg">
                              <div className="storyCard"  key={user.id}>
                                    <div className="main-story">content</div>
                                    <div className="prfile-div"><ProfileCard size="35px" avatar={user.avatar}story={user.story} /></div>
                                    <div className="num_story">2</div>
                                    <div className="username"><span>{user.username}</span></div>
                              </div>
                        </div>
                  ))}
            </div>
      )
}

export default StoryCard
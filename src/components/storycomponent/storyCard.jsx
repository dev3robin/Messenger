import { useContext } from "react";
import ProfileCard from "../profileCard";
import { UserD } from "../contextApi/user";
import Messenger from "../data/data";
function StoryCard(){
        const { User } = useContext(UserD);
        function getUserDataById(userId) {
            const users=Object.values(Messenger).map(user=>{
              return user
            })
            return users.find(user => user.userId === userId); // Locate the user by userId
          }
      return (
            <div className="story-container">
            {User.friends.map(friend => {
                  const userData = getUserDataById(friend.userId); 
                  if (!userData || !userData.storyInfo.isStory) return null; // Skip if userId does not exist in Messenger
                  return(
                        <div className="story-bg">
                              <div className="storyCard"  key={userData.userId}>
                                    <div className="main-story"><img src={userData.storyInfo.stories} alt="" height="200px" width={140} /></div>
                                    <div className="prfile-div">
                                          <ProfileCard                                                 
                                                avatar={userData.photos.profile}
                                                size="35px" story={userData.story} 
                                          />
                                    </div>
                                    <div className="num_story">2</div>
                                    <div className="storyC_username"><span>{userData.userName}</span></div>
                              </div>
                        </div>
                  )})}
            </div>
      )
}

export default StoryCard
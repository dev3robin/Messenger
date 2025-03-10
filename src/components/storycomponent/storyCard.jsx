import { useContext,useState  } from "react";
import ProfileCard from "../profileCard";
import { LoggedUser } from "../contextApi/user";
import Messenger from "../data/data";
import { Story } from "./story";
import './story.css'
import StoryUpload from "./storyUpload";
function StoryCard(){
      const { loggedUser } = useContext(LoggedUser);
      const [storyUpload,setStoryUpload]=useState(false)
      function getUserDataById(userId) {
      return Object.values(Messenger).find(user => user.userId === userId);
      }
      const handleFileUpload=()=>{
            setStoryUpload(true)
      }
      return (
            <>
                  <div className="story-container"key={1}>
                        <div className="story-bg"key={loggedUser.userId} role="button"onClick={handleFileUpload}>
                              <div className="storyCard"  >
                                    <div className="main-story">
                                          <img src={loggedUser.photos.profile} alt="" />
                                    </div>
                                    <div className="prfile-div">
                                          <ProfileCard                                                 
                                                size="35px" story={loggedUser.story} 
                                          />
                                    </div>
                                    <div className="addStory"><span>Add to story</span></div>
                              </div>
                        </div>
                        {loggedUser.storyInfo.isStory &&
                              <Story userStory={loggedUser}/>
                        }
                  {loggedUser.friends.map(friend => {
                        const friends = getUserDataById(friend.userId); 
                        if (!friends || !friends.storyInfo.isStory) return null; // Skip if userId does not exist in Messenger
                        return(
                              <Story userStory={friends}/>
                  )})}
                  </div>
                  {storyUpload && <StoryUpload setStoryUpload={setStoryUpload}/>}
            </>
      )
}

export default StoryCard
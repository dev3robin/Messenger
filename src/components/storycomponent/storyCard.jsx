import { useContext,useState  } from "react";
import ProfileCard from "../profileCard";
import { LoggedUser } from "../contextApi/user";
import Messenger from "../data/data";
function StoryCard(){
      const { loggedUser } = useContext(LoggedUser);
      function getUserDataById(userId) {
      return Object.values(Messenger).find(user => user.userId === userId);
      }
      const [preview, setPreview] = useState(null);

      // Handle file selection
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setPreview(imageUrl);
        }
      };
      return (
            <div className="story-container">
                  <div className="story-bg"key={loggedUser.userId}>
                        <div className="storyCard"  >
                              <div className="main-story">
                                    <input type="file" accept="image/*" onChange={handleFileChange} />
                                    {preview && <img
                                    src={preview} alt="Story Preview" className="story-preview" />}
                              </div>
                              <div className="prfile-div">
                                    <ProfileCard                                                 
                                          avatar={loggedUser.photos.profile}
                                          size="35px" story={loggedUser.story} 
                                    />
                              </div>
                              <div className="num_story">{loggedUser.storyInfo ?.stories ?.length}</div>
                              <div className="storyC_username"><span>{loggedUser.userName}</span></div>
                        </div>
                  </div>
            {loggedUser.friends.map(friend => {
                  const friends = getUserDataById(friend.userId); 
                  if (!friends || !friends.storyInfo.isStory) return null; // Skip if userId does not exist in Messenger
                  return(
                        <div className="story-bg"key={friends.userId}>
                              <div className="storyCard"  >
                                    <div className="main-story">
                                          <img src={friends.storyInfo.stories} alt="" height="200px" width={140} />
                                    </div>
                                    <div className="prfile-div">
                                          <ProfileCard                                                 
                                                avatar={friends.photos.profile}
                                                size="35px" story={friends.story} 
                                          />
                                    </div>
                                    <div className="num_story">{friends.storyInfo ?.stories ?.length}</div>
                                    <div className="storyC_username"><span>{friends.userName}</span></div>
                              </div>
                        </div>
                  )})}
            </div>
      )
}

export default StoryCard
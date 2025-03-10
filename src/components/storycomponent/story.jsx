import React, { useContext, useState, useEffect } from 'react';
import ProfileCard from '../profileCard';
import { LoggedUser } from '../contextApi/user';
import StoryPortal from './storyPotal';

export const Story = (props) => {
   const { userStory } = props;
   const { loggedUser } = useContext(LoggedUser);
   const [storyPortal, setStoryPortal] = useState(false);

   return (
      <>
      <div className="story-bg" role="button" onClick={() => setStoryPortal(true)} key={userStory.userId}>
         <div className="storyCard">
            <div className="main-story">
               <img src={userStory.storyInfo.stories[0]} alt="" height="200px" width={140} />
            </div>
            <div className="prfile-div">
               <ProfileCard avatar={userStory.photos.profile} size="35px" story={userStory.story} />
            </div>
            {loggedUser.userId !== userStory.userId && (
               <div className="num_story">{userStory.storyInfo?.stories?.length}</div>
            )}
            <div className="storyC_username">
               <span>{userStory.userName}</span>
            </div>
         </div>
      </div>
      {storyPortal && <StoryPortal userStory={userStory} setStoryPortal={setStoryPortal} />}
      </>
   );
};

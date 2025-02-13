import ChatContent from '../chatscomponent/chatcontent'
import StoryCard from '../storycomponent/storyCard'

import { ProfileNavContext } from '../contextApi/profileNavContext';
import ProfileNav from '../navSection/profileNav';
import { useContext } from 'react';
function ContentContainer(props){
      const {isChatActive}=props
      const { isProfileNav} = useContext(ProfileNavContext);
      return (
            <div className="content-section" >
                  {isChatActive ? <ChatContent /> : <StoryCard />}
                  {isProfileNav &&
                        <ProfileNav />
                  }
            </div>
            
      )
}

export default ContentContainer
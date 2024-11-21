import ChatContent from '../chatscomponent/chatcontent'
import StoryCard from '../storycomponent/storyCard'
function ContentContainer(props){
      const {isChatActive}=props
      return (
            <div className="content-section" >
                  {isChatActive ? <ChatContent /> : <StoryCard />}
            </div>
            
      )
}

export default ContentContainer
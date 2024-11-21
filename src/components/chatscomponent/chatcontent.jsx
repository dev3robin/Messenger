import React from 'react'
import SearchBar from '../searchbarcomponents.jsx/searchbar'
import Chats from './chats'
import NoteCard from '../noteCard'
function ChatContent(props) {
      const {setisSearchActive,inputRef,setIsChatting}=props
      return (
                  <>
                        <SearchBar inputRef={inputRef} setisSearchActive={setisSearchActive}/>
                        <NoteCard />
                        <Chats         
                              setIsChatting={setIsChatting}
                        />
                  
                  </>
      )
}

export default ChatContent
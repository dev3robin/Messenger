import React, { useEffect, useRef } from 'react';
export const InputIsFocused = (props) => {
  const { setInputFocused, newMessage,setNewMessage,User,addNewMessage,chatData,ConName } = props;
  const inputRef1 = useRef(null);
  useEffect(() => {
    if (inputRef1.current) {
      inputRef1.current.focus();
    }
  }, []);

  useEffect(() => {
    let timeoutId;
    if (!newMessage || newMessage.trim() === '') {
      timeoutId = setTimeout(() => {
        setInputFocused(false); 
      }, 3000);
    } else {
      setInputFocused(true); 
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [newMessage, setInputFocused]);
  
  function createMessageObj(messageId, content, senderId, receiverId,timeStamp) {
    return {
      messageId:messageId ,
      content:content,
      senderId:senderId,
      receiverId:receiverId,
      timestamp:timeStamp
    };
  };
  function generateRandomString(length) {
    return Math.random().toString(36).substring(2, 2 + length);
  };
  function handleMsg(){
    const now = new Date();
    const CT= now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    const msgObj=createMessageObj(generateRandomString(5),newMessage,User.userId,chatData.userId,CT)
    addNewMessage(msgObj)
    setNewMessage("")
  };
  return (
    <div className="bottom-layer">
      <div className="bottom-layer-icon">
        <i className="fa-solid fa-chevron-right ic"></i>
      </div>
      <div className="bottom-layer-input">
        <div className="input-div">
          <input
            ref={inputRef1}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            type="text"
            placeholder="Message..."
          />
          <div className="input-div-icon">
           <i className="fa-solid fa-face-smile ic"></i>
          </div>
        </div>
      </div>
      <div className="bottom-layer-icon"onClick={handleMsg}>
        {newMessage?<i class="fa-solid fa-paper-plane ic"></i>:<i className="fa-solid fa-thumbs-up ic"></i>}
      </div>
    </div>
  );
};


export const InputIsNotFocused = (props) => {
      const {setInputFocused,newMessage,handleInputFocusing}=props
   return (
      <div className="bottom-layer">                                          
         <div className="bottom-layer-icon"><i class="fa-solid fa-plus"></i></div>
         <div className="bottom-layer-icon"><i class="fa-solid fa-camera"></i></div>
         <div className="bottom-layer-icon"><i class="fa-solid fa-image"></i></div>
         <div className="bottom-layer-icon"><i class="fa-solid fa-microphone"></i></div>
         <div className="bottom-layer-input">                        
          <div className="input-div">
            <input
              value={newMessage}
              onClick={handleInputFocusing}
              type="text"
              placeholder="Message"
              onFocus={() => {
              setInputFocused(true);
              }}
            />
            <div className="input-div-icon"><i class="fa-solid fa-face-smile ic"></i></div>
          </div>
         </div>
         <div className="bottom-layer-icon"><span>👨‍🔧</span></div>
   </div>
   )
 }
 
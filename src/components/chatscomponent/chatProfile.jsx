import ReactDOM from "react-dom";
import ProfileCard from "../profileCard";
import { useContext } from "react";
import { SelectedChat } from "../contextApi/selectedChat";
function ChatProfile(props){
      const {setIsChatProfile}=props
      const{selectedChat}=useContext(SelectedChat)
      function handleCloseChatProfile(){
            setIsChatProfile(false)
      }
      return ReactDOM.createPortal(
            <div className="chatProfile">
                  <div className="cp-top-layer">
                        <div><button className="cp-top-layer-btn" onClick={handleCloseChatProfile}><i class="fa-solid fa-arrow-left"></i></button></div>
                        <div><button className="cp-top-layer-btn"><i class="fa-solid fa-ellipsis-vertical"></i></button></div>
                  </div>
                  <div className="cp-details">
                        <div className="chatProfile-section">
                              <div className="userProfile">
                                    <ProfileCard size="80px" avatar={selectedChat.photos.profile}/>
                                    <div className="userName">{selectedChat.userName}</div>
                                    <button className="encryptBtn">
                                          <i class="fa-sharp fa-solid fa-lock"></i>
                                          <span>End-to-end encryption</span>
                                    </button>
                              </div>
                              <div className="contect-section">
                                    <div>
                                          <div><i class="fa-solid fa-phone"></i></div>
                                          <span>Audio</span>
                                    </div>
                                    <div>
                                          <div><i class="fa-solid fa-video"></i></div>
                                          <span>Video</span>
                                    </div>
                                    <div>
                                          <div><i class="fa-solid fa-user"></i></div>
                                          <span>profile</span>
                                    </div>
                                    <div>
                                          <div><i class="fa-solid fa-bell"></i></div>
                                          <span>Mute</span>
                                    </div>
                                    
                              </div>
                        </div>
                        <div className="customaization">
                              <span className="grey-scale">Customaization</span>
                              <div>
                                    <div className="theme-div"><span ></span></div>
                                    <span>Theme</span>
                              </div>
                              <div>
                                    <div><i class="fa-solid fa-face-smile"></i></div>
                                    <span>Quick reaction</span>
                              </div>
                              <div>
                                    <div><i class="fa-solid fa-font"></i></div>
                                    <span>Nicknames</span>
                              </div>
                              <div>
                                    <div><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                                    <span>Word effects</span>
                              </div>
                        </div>
                        <div className="moreActions">
                              <span className="grey-scale">More actions</span>
                              <div>
                                    <div><i class="fa-solid fa-image"></i></div>
                                    <span>Veiw media, files & links</span>
                              </div>
                              <div>
                                    <div><i class="fa-solid fa-arrow-down-long"></i></div>
                                    <span>Save photos & videos</span>
                              </div>
                              <div>
                                    <div><i class="fa-solid fa-thumbtack"></i></div>
                                    <span>View pinned messages</span>
                              </div>
                              <div>
                                    <div><i class="fa-solid fa-magnifying-glass"></i></div>
                                    <span>Search in conversation</span>
                              </div>
                              <div>
                                    <div><i class="fa-solid fa-bell"></i></div>
                                    <div className="notifications">
                                          <span>Notifications & shound</span>
                                          <p className="grey-scale">on</p>
                                    </div>
                              </div>
                              <div>
                                    <div><i class="fa-solid fa-user-group"></i></div>
                                    <span>Create group chat with <b>user</b></span>
                              </div>
                              <div>
                                    <div><i class="fa-sharp fa-solid fa-share-nodes"></i></div>
                                    <span>Share contact</span>
                              </div>


                        </div>
                        <div className="privacy-support">
                              <span className="grey-scale">Privacy & support</span>
                              <div>
                                    <div><i class="fa-solid fa-lock"></i></div>
                                    <span>Verify end-to-end encryption</span>
                              </div>
                              <div>
                                    <div><i class="fa-solid fa-clock-rotate-left"></i></div>
                                    <div>
                                          <span>Disappearing messages</span>
                                          <span></span>
                                    </div>
                              </div>
                              <div>
                                    <div><i class="fa-solid fa-eye"></i></div>
                                    <div className="read-receipts">
                                          <span>Read receipts</span>
                                          <p className="grey-scale">on</p>
                                    </div>
                              </div>
                              <div>
                                    <div><i class="fa-duotone fa-solid fa-ban"></i></div>
                                    <span>Restrict</span>
                              </div>
                              <div>
                                    <div><i class="fa-solid fa-circle-exclamation"></i></div>
                                    <span>Block</span>
                              </div>
                              <div>
                                    <div><i class="fa-solid fa-triangle-exclamation"></i></div>
                                    <div className="report-div">
                                          <span>Report</span>
                                          <p className="grey-scale">Give feedback and report conversation</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>,
             document.getElementById('chatprofilePortal')
      )
}

export default ChatProfile;
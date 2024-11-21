import ReactDOM from "react-dom";
import ProfileCard from "../profileCard";
import { useContext,useRef,useEffect } from "react";
import { ProfileNavContext } from "../contextApi/profileNavContext";
function ProfileNav(props){
      const {chatData}=props
      const { isProfileNav, setProfileNav } = useContext(ProfileNavContext);
      const profileNavRef = useRef(null);
      useEffect(() => {
        function handleClickOutside(event) {
          if (profileNavRef.current && !profileNavRef.current.contains(event.target)) {
            setProfileNav(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [setProfileNav]);
      return ReactDOM.createPortal(
            <div className={"profileNav " +(isProfileNav?"visible":'')}>
                  <div className="profileNavMain" ref={profileNavRef}>
                        <div className="account-section">
                              <div className="ac-left-part" >
                                    <div><ProfileCard size="40px"  /></div>
                                    <div>username</div>
                                    <span><i class="fa-solid fa-angle-down"></i></span>
                              </div>
                              <div className="ac-right-part"><button className="setting-btn"><i class="fa-solid fa-gear"></i></button></div>
                        </div>
                        <div className="main-content-div">
                              <div className="main-div-hover">
                                    <div className="div-hover"tabIndex="0">
                                          <div><i class="fa-solid fa-comment icon-bg"></i></div>
                                          <span>Chats</span>
                                    </div>
                              </div>
                              <div className="main-div-hover">
                                    <div className="div-hover"tabIndex="0">
                                          <div><i class="fa-solid fa-store icon-bg"></i></div>
                                          <span>Marketplace</span>
                                    </div>
                              </div>
                              <div className="main-div-hover">
                                    <div className="div-hover"tabIndex="0">
                                          <div><i class="fa-solid fa-comment-dots icon-bg"></i></div>
                                          <span>Message requests</span>
                                    </div>
                              </div>
                              <div className="main-div-hover">
                                    <div className="div-hover"tabIndex="0">
                                          <div><i class="fa-solid fa-box-archive icon-bg"></i></div>
                                          <span>Archive</span>
                                    </div>
                              </div>
                              <div className="dpa"><span>More</span></div>
                              <div className="main-div-hover">
                                    <div className="div-hover"tabIndex="0">
                                          <div><i class="fa-solid fa-user-group icon-bg"></i></div>
                                          <span>Friend requests</span>
                                    </div>
                              </div>
                              <div className="dpa"><span>Communities</span></div>
                              <div className="main-div-hover">
                                    <div className="div-hover"tabIndex="0">
                                          <div><i class="fa-solid fa-plus icon-bg"></i></div>
                                          <span>Create community</span>
                                    </div>
                              </div>
                              <div>
                                    <div>
                                          <div className="group-edit dpa"><span>Facebook groups</span><button>Edit</button></div>
                                    </div>
                              </div>

                        </div>
                  </div>
            </div>,
            document.getElementById("profileNavPortal")
      )
}
export default ProfileNav;
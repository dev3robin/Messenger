import ReactDOM from "react-dom";
import ProfileCard from "../profileCard";
import { useContext, useRef, useEffect, useState } from "react";
import { ProfileNavContext } from "../contextApi/profileNavContext";
import { LoggedUser } from "../contextApi/user";
import AccountSection from "./accountSection";
function ProfileNav() {
  const { isProfileNav, setProfileNav } = useContext(ProfileNavContext);
  const profileNavRef = useRef(null);
  const { loggedUser } = useContext(LoggedUser);
  const [isSettingsPortalOpen, setSettingsPortalOpen] = useState(false); // State to handle the new portal visibility

  useEffect(() => {
    function handleClickOutside(event) {
      const settingsPortalElement = document.getElementById("settingsPortal");
      if (
        profileNavRef.current &&
        !profileNavRef.current.contains(event.target) &&
        settingsPortalElement &&
      !settingsPortalElement.contains(event.target)
      ) {
        setProfileNav(false);
        setSettingsPortalOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setProfileNav]);

  const handleSettingsClick = () => {
    setSettingsPortalOpen(true);
  };
//unused
  const closeSettingsPortal = () => {
    setSettingsPortalOpen(false);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div className={"profileNav " + (isProfileNav ? "visible" : "")}>
          <div className="profileNavMain" ref={profileNavRef}>
            <div className="account-section">
              <div className="ac-left-part">
                <div>
                  <ProfileCard size="40px" avatar={loggedUser?.photos.profile} />
                </div>
                <div>{loggedUser?.userName}</div>
                <span>
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </div>
              <div
                className="ac-right-part"
                onClick={handleSettingsClick} // Open settings portal on click
              >
                <button className="setting-btn">
                  <i className="fa-solid fa-gear"></i>
                </button>
              </div>
            </div>
            <div className="main-content-div">
              <div className="main-div-hover">
                <div className="div-hover" tabIndex="0">
                  <div>
                    <i className="fa-solid fa-comment icon-bg"></i>
                  </div>
                  <span>Chats</span>
                </div>
              </div>
              <div className="main-div-hover">
                <div className="div-hover" tabIndex="0">
                  <div>
                    <i className="fa-solid fa-store icon-bg"></i>
                  </div>
                  <span>Marketplace</span>
                </div>
              </div>
              <div className="main-div-hover">
                <div className="div-hover" tabIndex="0">
                  <div>
                    <i className="fa-solid fa-comment-dots icon-bg"></i>
                  </div>
                  <span>Message requests</span>
                </div>
              </div>
              <div className="main-div-hover">
                <div className="div-hover" tabIndex="0">
                  <div>
                    <i className="fa-solid fa-box-archive icon-bg"></i>
                  </div>
                  <span>Archive</span>
                </div>
              </div>
              <div className="dpa">
                <span>More</span>
              </div>
              <div className="main-div-hover">
                <div className="div-hover" tabIndex="0">
                  <div>
                    <i className="fa-solid fa-user-group icon-bg"></i>
                  </div>
                  <span>Friend requests</span>
                </div>
              </div>
              <div className="dpa">
                <span>Communities</span>
              </div>
              <div className="main-div-hover">
                <div className="div-hover" tabIndex="0">
                  <div>
                    <i className="fa-solid fa-plus icon-bg"></i>
                  </div>
                  <span>Create community</span>
                </div>
              </div>
              <div>
                <div>
                  <div className="group-edit dpa">
                    <span>Facebook groups</span>
                    <button>Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById("profileNavPortal")
      )}

      {/* Settings Portal */}
      {isSettingsPortalOpen &&
        ReactDOM.createPortal(
          <AccountSection setSettingsPortalOpen={setSettingsPortalOpen} setProfileNav={setProfileNav}/>,
          document.getElementById("settingsPortal")
        )}
    </>
  );
}

export default ProfileNav;

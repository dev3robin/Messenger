import ReactDOM from "react-dom";
import { React,useEffect,useContext, useState } from "react";
import "../navSection/as-css.css";
import ProfileCard from "../profileCard";
import { UserD } from "../contextApi/user";
import { LoginInfo } from "../contextApi/loginInfo";
import { LoaderContext } from "../loaderComponent/loaderContext";
import Loader from "../loaderComponent/loader";
const AccountSection = (props) => {
  const { setSettingsPortalOpen, setProfileNav } = props;
  const { User } = useContext(UserD);
  const [logOutPortal, setLogOutPortal] = useState(false);
  const { isLogin, setLogin } = useContext(LoginInfo);
  const { isLoading, showLoader, hideLoader } = useContext(LoaderContext);

  function handleReturnBtn() {
    setSettingsPortalOpen(false);
  }

  function handleLoggedUserClick() {
    setLogOutPortal(true);
  }

  function handleSwitching() {
    if (isLogin) {
      showLoader();

      setTimeout(() => {
        hideLoader();
        setLogin(false);
        setProfileNav(false);
        setSettingsPortalOpen(false);
      }, 2000);
    }
  }

  return (
    <div className="as-main-div">
      <div className="top-section">
        <div>
          <button className="return-btn" onClick={handleReturnBtn}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        <div>Switch account</div>
      </div>

      <div className="accounts">
        <div className="loggedUserDiv" onClick={handleLoggedUserClick}>
          <div className="profileImg">
            <ProfileCard size="40px" avatar={User.photos.profile} />
          </div>
          <div className="userDetails">
            <div>{User.userName}</div>
            <div>signed in . {User.userName}</div>
          </div>
          <div>
            <i className="fa-solid fa-check"></i>
          </div>
        </div>
      </div>

      <div className="OtherU">
        <span>Other Facebook accounts</span>
      </div>

      <div className="add-account-sc">
        <button onClick={handleSwitching}>
          <i className="fa-solid fa-plus"></i>
        </button>
        <span>Add account</span>
      </div>

      <div className="footer-text">
        <span>
          Add up to 5 accounts on this device. You'll be able to switch between them and see your messages.
        </span>
      </div>

      {isLoading && <Loader />}

      {logOutPortal &&
        ReactDOM.createPortal(
          <div className="logout-portal">
            <div className="logout-portal-content">
              <button>SignOut</button>
            </div>
          </div>,
          document.getElementById("LogOutPortal")
        )}
    </div>
  );
};

export default AccountSection;

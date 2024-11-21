import { useContext } from "react";
import { ProfileNavContext } from "../contextApi/profileNavContext";

function NavBar(props){
      const {isChatActive}=props
      const { isProfileNav, setProfileNav } = useContext(ProfileNavContext);
      function handleProfileNav(){
            setProfileNav(!isProfileNav)
      }
      return (
            <>
                  <nav className="top-nav">
                        <div className="menu-h2">
                              <button     
                                    className="nav-btn menu"
                                    onClick={handleProfileNav}>
                                          <i class="fa-solid fa-bars"></i>
                              </button>
                              <h2>{isChatActive? "Chats":"Stories"}</h2>
                        </div>
                        <button 
                              className={"nav-btn edit "+ (isChatActive?"":"hideEdit")}>
                                    <i class="fa-solid fa-pen"></i>
                        </button>
                  </nav>
            </>
      )
}

export default NavBar;
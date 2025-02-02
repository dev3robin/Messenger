import { useContext, useState, useEffect } from "react";
import NavBar from "./components/navSection/navbar";
import ContentContainer from "./components/contentcomponent/contentcontainer";
import BottomNavBar from "./components/navSection/bottomnavbar";
import Login from "./components/login/login";
import { LoginInfo } from "./components/contextApi/loginInfo";
import Loader from "./components/loaderComponent/loader";

function MainContent({ isChatActive, setChatActive }) {
  const { isLogin } = useContext(LoginInfo);
  const content = (
    <div className="main">
      {!isLogin && <Login />}
      {isLogin && (
        <>
          <NavBar isChatActive={isChatActive} />
          <ContentContainer isChatActive={isChatActive} />
          <BottomNavBar isChatActive={isChatActive} setChatActive={setChatActive} />
        </>
      )}
    </div>
  );

  return content;
}


export default MainContent;





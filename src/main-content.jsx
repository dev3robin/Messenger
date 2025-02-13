import { useContext, useEffect } from "react";
import NavBar from "./components/navSection/navbar";
import ContentContainer from "./components/contentcomponent/contentcontainer";
import BottomNavBar from "./components/navSection/bottomnavbar";
import Login from "./components/login/login";
import { LoginInfo } from "./components/contextApi/loginInfo";
import Loader from "./components/loaderComponent/loader";
import { LoaderContext } from "./components/loaderComponent/loaderContext";

function MainContent({ isChatActive, setChatActive }) {
  const { isLogin } = useContext(LoginInfo);
  const { isLoading, showLoader, hideLoader } = useContext(LoaderContext);
  useEffect(() => {
    if (isLogin) {
      showLoader()
      const timer = setTimeout(() => {
        hideLoader()
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      hideLoader() 
    }
  }, [isLogin]); 

  const content = (
    <div className="main">
      {!isLogin && <Login />}
      {isLoading ? (
        <Loader />
      ) : (
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





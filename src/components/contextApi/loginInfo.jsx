import { createContext,useState } from "react";

export const LoginInfo = createContext({});

const LoginInfoProvider = ({ children }) => {
   const [isLogin,setLogin]=useState(false)

  return (
    <LoginInfo.Provider value={{ isLogin, setLogin }}>
      {children}
    </LoginInfo.Provider>
  );
};

export default LoginInfoProvider;

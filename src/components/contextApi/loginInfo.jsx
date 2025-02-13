import { createContext, useState, useEffect } from "react";

export const LoginInfo = createContext({});

const LoginInfoProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(() => {
    const storedLoginState = localStorage.getItem("isLogin");
    return storedLoginState === "true";
  });

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin.toString());
  }, [isLogin]);

  return (
    <LoginInfo.Provider value={{ isLogin, setLogin }}>
      {children}
    </LoginInfo.Provider>
  );
};

export default LoginInfoProvider;

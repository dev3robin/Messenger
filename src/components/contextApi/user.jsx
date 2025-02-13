import { createContext, useState, useEffect } from "react";

export const LoggedUser = createContext({});

const LoggedUserInfoProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(() => {
    const storedUser = localStorage.getItem("loggedUser");
    return storedUser ? JSON.parse(storedUser) : {};
  });
  useEffect(() => {
    if (loggedUser) {
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    }
  }, [loggedUser]);

  return (
    <LoggedUser.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </LoggedUser.Provider>
  );
};

export default LoggedUserInfoProvider;

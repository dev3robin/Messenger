import React,{ createContext,useState } from "react";

export const ProfileNavContext = createContext({
});
const ProfileNavProvider = ({ children }) => {
  const [isProfileNav, setProfileNav] = useState(false);

  return (
    <ProfileNavContext.Provider value={{ isProfileNav, setProfileNav }}>
      {children}
    </ProfileNavContext.Provider>
  );
};

export default ProfileNavProvider;
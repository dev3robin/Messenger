import { createContext } from "react";

export const ProfileNavContext = createContext({
  isProfileNav: false,
  setProfileNav: () => {}
});

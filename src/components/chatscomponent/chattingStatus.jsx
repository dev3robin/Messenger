import { createContext,useState } from "react";

export const IsChatting = createContext({});

const IsChattingProvider = ({ children }) => {
  const [isChatting, setIsChatting] = useState(false);

  return (
    <IsChatting.Provider value={{ isChatting, setIsChatting }}>
      {children}
    </IsChatting.Provider>
  );
};

export default IsChattingProvider;
import { createContext,useState } from "react";

export const SelectedChat = createContext({});

const SelectedChatProvider = ({ children }) => {
     const [selectedChat, setSelectedChat] = useState(null);

  return (
    <SelectedChat.Provider value={{ selectedChat, setSelectedChat }}>
      {children}
    </SelectedChat.Provider>
  );
};

export default SelectedChatProvider;
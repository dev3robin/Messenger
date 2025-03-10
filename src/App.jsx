import './App.css';
import './components/login/login.css';
import { useState } from 'react';

import LoggedUserInfoProvider from './components/contextApi/user';
import ProfileNavProvider from './components/contextApi/profileNavContext';
import LoginInfoProvider from './components/contextApi/loginInfo';
import { LoaderProvider } from './components/loaderComponent/loaderContext';
import MainContent from './main-content';
import SelectedChatProvider from './components/contextApi/selectedChat';
import IsChattingProvider from './components/chatscomponent/chattingStatus';
function App() {
  const [isChatActive, setChatActive] = useState(true);
  return (
      <LoaderProvider>
        <LoginInfoProvider>
          <LoggedUserInfoProvider>
            <SelectedChatProvider>
              <ProfileNavProvider>
                <IsChattingProvider>
                  <MainContent isChatActive={isChatActive} setChatActive={setChatActive} />
                </IsChattingProvider>
              </ProfileNavProvider>
            </SelectedChatProvider>
          </LoggedUserInfoProvider>
        </LoginInfoProvider>
      </LoaderProvider> 
  );
}
 

export default App;

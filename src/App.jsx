import './App.css';
import './components/login/login.css';
import { useContext, useState } from 'react';

import { UserD } from './components/contextApi/user';
import ProfileNavProvider from './components/contextApi/profileNavContext';
import LoginInfoProvider from './components/contextApi/loginInfo';
import { LoaderProvider } from './components/loaderComponent/loaderContext';
import MainContent from './main-content';


function App() {
  const [isChatActive, setChatActive] = useState(true);
  const [User, setUser] = useState([]);

  return (
    <LoaderProvider>
      <LoginInfoProvider>
        <UserD.Provider value={{ User, setUser }}>
          <ProfileNavProvider>
            <MainContent isChatActive={isChatActive} setChatActive={setChatActive} />
          </ProfileNavProvider>
        </UserD.Provider>
      </LoginInfoProvider>
    </LoaderProvider> 
  );
}
 

export default App;

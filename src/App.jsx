import './App.css'
import './components/login/login.css'
import NavBar from './components/navSection/navbar'
import {useState} from 'react'
import ContentContainer from './components/contentcomponent/contentcontainer'
import { ProfileNavContext } from './components/contextApi/profileNavContext'
import BottomNavBar from './components/navSection/bottomnavbar'
import Login from './components/login/login'
function App() {
  const [isChatActive, setChatActive]=useState(true)
  const [isProfileNav,setProfileNav]=useState(false)
  const [isLogin,setLogin]=useState(true)
  return (
    <ProfileNavContext.Provider value={{isProfileNav,setProfileNav}}>
      <div className='main'>
        <NavBar 
          isChatActive={isChatActive} 
        />
        <ContentContainer 
          isChatActive={isChatActive}
        />
        <BottomNavBar 
          isChatActive={isChatActive}
          setChatActive={setChatActive}
        />
        {isLogin && 
          <Login />

        }
      </div>

    </ProfileNavContext.Provider>
  )
}
export default App

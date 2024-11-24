import './App.css'
import './components/login/login.css'
import NavBar from './components/navSection/navbar'
import {useState} from 'react'
import ContentContainer from './components/contentcomponent/contentcontainer'
import { ProfileNavContext } from './components/contextApi/profileNavContext'
import { userDataContext } from './components/contextApi/database'
import { UserD } from './components/contextApi/user'
import BottomNavBar from './components/navSection/bottomnavbar'
import Login from './components/login/login'

function App() {
  const [isChatActive, setChatActive]=useState(true)
  const [isProfileNav,setProfileNav]=useState(false)
  const [login_signup_Data,setlogin_signup_Data]=useState([])
  const [User,setUser]=useState([])
  const [isLogin,setLogin]=useState(false)
  return (
    <UserD.Provider value={{User,setUser}}>
      <userDataContext.Provider value={{login_signup_Data,setlogin_signup_Data}}>
        <ProfileNavContext.Provider value={{isProfileNav,setProfileNav}}>
            <div className='main'>
              {!isLogin && <Login setLogin={setLogin} isLogin={isLogin}/>}
              {isLogin && 
                <>
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
                </>
              }
            </div>
        </ProfileNavContext.Provider>
      </userDataContext.Provider>
    </UserD.Provider>
  )
}
export default App

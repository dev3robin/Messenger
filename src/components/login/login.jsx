import ReactDOM from "react-dom";
import React, { useContext, useState } from "react";
import LoginCard from "./loginCard";
import SignupCard from "./signupCard";
import { LoginInfo } from "../contextApi/loginInfo";
function Login() {
  const {isLogin,setLogin}=useContext(LoginInfo)
  const [userName,setUserName]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp,setSignUp]=useState(false)
  function handleUserNameChange(e){
    setUserName(e.target.value)
  }
  function handleEmailChange(e){
    setEmail(e.target.value)
  }
  function handlePasswordChange(e){
    setPassword(e.target.value)
  }
  return ReactDOM.createPortal(
    <div className="login-container">
      {!isSignUp? 
        <LoginCard 
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            email={email}
            password={password}
            setSignUp={setSignUp}
          />
          :
          <SignupCard 
          handleUserNameChange={handleUserNameChange}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            setSignUp={setSignUp}
            userName={userName}
            setUserName={setUserName}
            email={email}
            password={password}
          />
      }
      

    </div>,
    document.getElementById("loginPortal")
  );
}

export default Login;
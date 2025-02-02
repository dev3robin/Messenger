import React, { useContext, useState } from "react";


function SignupCard(props){
      const {
            handleUserNameChange,
            handleEmailChange,
            handlePasswordChange,
            email,
            userName,
            password,setSignUp}=props
      function handleSignupClick(e){
            e.preventDefault();
            const newUserData = {
                  userName,
                  email,
                  password,
            };
            setlogin_signup_Data([...login_signup_Data, newUserData]);
            localStorage.setItem(
                  "login_signup_data",
                  JSON.stringify([...login_signup_Data, newUserData])
            );
            handleUserNameChange({ target:{value:""}})
            handleEmailChange({ target: { value: "" } });
            handlePasswordChange({ target: { value: "" } });
      }
      function handleLoginclick(){
                  setSignUp(false)
            }
      return(
            <>
                  <div><i class="fa-brands fa-facebook-messenger"></i></div>
                  <form onSubmit={handleSignupClick}>
                        <header>SignUp using phone number or Facebook account </header>
                        <input type="text" onChange={handleUserNameChange} value={userName}placeholder="Username" />
                        <input type="Email" onChange={handleEmailChange} value={email} placeholder="Email"/>
                        <input type="password" onChange={handlePasswordChange} value={password} placeholder="Password"/>
                        <button 
                              className="signup-btn sucard_btn sbtn"
                              type="submit">SignUp</button>
                        <div className="or_span"><span>or</span></div>
                        <button className="login-btn sucardL_btn sbtn"onClick={handleLoginclick} >Log In</button>
                  </form>
            
            </>
      )
}

export default SignupCard;
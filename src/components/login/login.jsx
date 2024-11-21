import ReactDOM from "react-dom";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return ReactDOM.createPortal(
    <div className="login-container">
      <div><i class="fa-brands fa-facebook-messenger"></i></div>
      <form action="">
            <header>LogIn with your phone number or Facebook account </header>
            <input type="Email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <div className="info-div"><input type="radio" name="" id="" />Save login info</div>
            <button className="login-btn sbtn">Log In</button>
            <button className="signup-btn sbtn">Create New Account</button>
            <button className="recoverpass-btn sbtn">Forgotten Your Password</button>
      </form>

    </div>,
    document.getElementById("loginPortal")
  );
}

export default Login;
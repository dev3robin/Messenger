import { useState, useEffect, useContext } from "react";
import { UserD } from "../contextApi/user";
import Messenger from "../data/data";
import { LoginInfo } from "../contextApi/loginInfo";

function LoginCard(props) {
  const { isLogin, setLogin } = useContext(LoginInfo);
  const { handleEmailChange, handlePasswordChange, email, password, setSignUp } = props;
  const { User, setUser } = useContext(UserD);

  // State to manage selected language
  const [selectedLanguage, setSelectedLanguage] = useState("Language");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function handleSignUpClick() {
    setSignUp(true);
  }

  function handleLoginClick(e) {
    e.preventDefault();
    const users = Object.values(Messenger).map(user => user);
    const user = users.find(
      user => user.userInfo.email === email && user.userInfo.password === password
    );
    if (user) {
      setUser(user);
      setLogin(true);
    } else {
      console.log(false);
    }
    handleEmailChange({ target: { value: "" } });
    handlePasswordChange({ target: { value: "" } });
  }

  return (
    <>
      <header>
        <div className="custom-select">
          <button
            className="select-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedLanguage}
          </button>
          <div className={`select-options ${dropdownOpen ? "show" : ""}`}>
            <div className="option" onClick={() => { setSelectedLanguage("English (US)"); setDropdownOpen(false); }}>English (US)</div>
            <div className="option" onClick={() => { setSelectedLanguage("English (UK)"); setDropdownOpen(false); }}>English (UK)</div>
            <div className="option" onClick={() => { setSelectedLanguage("Bangla"); setDropdownOpen(false); }}>Bangla</div>
          </div>
        </div>
      </header>

      <form onSubmit={handleLoginClick}>
        <header>Log in with your phone number or Facebook account</header>
        <input type="email" onChange={handleEmailChange} required value={email} placeholder="Email" />
        <input type="password" onChange={handlePasswordChange} required value={password} placeholder="Password" />
        <div className="info-div">
          <input type="radio" />
          <span>Save login info</span>
        </div>
        <button type="submit" className="login-btn sbtn">Log In</button>
        <button className="recoverpass-btn sbtn">Forgot Password?</button>
      </form>

      <footer>
        <button className="signup-btn sbtn" onClick={handleSignUpClick}>Create New Account</button>
        <div><i className="fa-brands fa-facebook"></i>Meta</div>
      </footer>
    </>
  );
}

export default LoginCard;

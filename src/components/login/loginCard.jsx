import { useEffect,useContext } from "react";
import { UserD } from "../contextApi/user";
function LoginCard(props){
      const {handleEmailChange,setLogin,
            handlePasswordChange,email,
            password,setSignUp,isLogin}=props
            const { User, setUser } = useContext(UserD);
      useEffect(() => {
            const script = document.createElement("script");
            script.src = "./src/components/login/script.js";
            script.async = true;
            document.body.appendChild(script);
            
            return () => {
                  document.body.removeChild(script);
            };
            }, []);
      function handleSignUpclick(){
            setSignUp(true)
      }
      function handleLoginClick(e){
            e.preventDefault();
            const users=JSON.parse(localStorage.getItem("login_signup_data")) || [];
            const user = users.find(
                  (user) => user.email === email && user.password === password
                );
                if (user) {
                  setUser(user)
                  setLogin(true)
                  
                } else {
                  console.log(false)
                }
            handleEmailChange({ target: { value: "" } });
            handlePasswordChange({ target: { value: "" } });
      }
      return(
            <>    
                  <header>
                        <div class="custom-select">
                              <button class="select-btn">language</button>
                              <div class="select-options">
                                    <div class="option" data-value="1">English(us)</div>
                                    <div class="option" data-value="2">Englis(uk)</div>
                                    <div class="option" data-value="3">Bangla</div>
                              </div>
                        </div>
                  </header>
                  <div><i className="fa-brands fa-facebook-messenger"></i></div>
                  <form action=""onSubmit={handleLoginClick}>
                        <header>LogIn with your phone number or Facebook account </header>
                        <input type="Email" onChange={handleEmailChange} required value={email} placeholder="Email"/>
                        <input type="password" onChange={handlePasswordChange} required value={password} placeholder="Password"/>
                        <div className="info-div"><input type="radio" name="" id="" /><span>Save login info</span></div>
                        <button type="submit"className="login-btn sbtn" >Log In</button>
                        <button className="recoverpass-btn sbtn">Forgot Password?</button>
                  
                  </form>
                  <footer>
                        <button className="signup-btn sbtn"onClick={handleSignUpclick}>Create New Account</button>
                        <div><i class="fa-brands fa-facebook"></i>Meta</div>
                  </footer>
            
            </>
      )
}

export default LoginCard;
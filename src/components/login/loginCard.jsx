function LoginCard(props){
      const {handleEmailChange,setLogin,
            handlePasswordChange,email,
            password,setSignUp,isLogin}=props
      
      function handleSignUpclick(){
            setSignUp(true)
      }
      function handleLoginClick(e){
            e.preventDefault();
            const users=JSON.parse(localStorage.getItem("login_signup_data")) || [];
            const user = users.find(
                  (user) => user.email === email && user.password === password
                );
                console.log(user)
                if (user) {
                  setLogin(true)
                  console.log(isLogin)
                } else {
                  console.log(false)
                }
            handleEmailChange({ target: { value: "" } });
            handlePasswordChange({ target: { value: "" } });
      }
      return(
            <>
                  <div><i class="fa-brands fa-facebook-messenger"></i></div>
                  <form action=""onSubmit={handleLoginClick}>
                        <header>LogIn with your phone number or Facebook account </header>
                        <input type="Email" onChange={handleEmailChange} required value={email} placeholder="Email"/>
                        <input type="password" onChange={handlePasswordChange} required value={password} placeholder="Password"/>
                        <div className="info-div"><input type="radio" name="" id="" /><span>Save login info</span></div>
                        <button type="submit"className="login-btn sbtn" >Log In</button>
                        <div className="or_span"><span>or</span></div>
                        <button className="signup-btn sbtn"onClick={handleSignUpclick}>Create New Account</button>
                        <button className="recoverpass-btn sbtn">Forgotten Your Password</button>
                  </form>
            
            </>
      )
}

export default LoginCard;

function BottomNavBar(props){
      const {isChatActive, setChatActive}=props
      function handlesetActiveTrue(){
            setChatActive(true)
      }
      function handlesetActiveFalse(){
            setChatActive(false)
      }
      return (
            <div className="bottom_navabr">
                  <button className={"bottom_navbar_btn chats-btn " + (isChatActive?'BNactive':'')} onClick={handlesetActiveTrue}>
                        <span><i class="fa-regular fa-comment"></i></span>
                        <span>Chats</span>      
                  </button>
                  <button className={"bottom_navbar_btn stories-btn " + (isChatActive? '':'BNactive')}onClick={handlesetActiveFalse} >
                        <span><i class="fa fa-columns"></i></span>
                        <span>Stories</span>
                  </button>

            </div>
      )
}

export default BottomNavBar;
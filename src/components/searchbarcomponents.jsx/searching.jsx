import PumkCard from "./pumkCard"
import RecentSearchCard from "./recentsearchCard"
import ReactDOM from "react-dom";
import SuggestedUserCard from "./suggesteduserCard"
import { useEffect, useRef } from "react"

function Searching(props){
      const {isSearching,setIsSearching}=props
      function handleIsSearch(){
            setIsSearching(false)
      }
      const inputRef=useRef(null)
      useEffect(() => {
            if (isSearching && inputRef.current) {
                inputRef.current.focus();
            }
        }, [isSearching, inputRef]);
      return ReactDOM.createPortal(
            <div className={"searching " + (isSearching? "isActive":"")}>
                  <div className="searchInput">
                        <div><button onClick={handleIsSearch}><i class="fa-solid fa-arrow-left"></i></button></div>
                        <div><input ref={inputRef} className="s-input" type="text" placeholder="Search"/></div>
                  </div>
                  <div className="rssp-content">
                        <div className="recent-searches">
                              <div className="rs-bar">
                                    <div>Recent searches</div>
                                    <div><button className="rs-edit-btn">Edit</button></div>
                              </div>
                              <div className="rs-users">
                                    <RecentSearchCard />
                              </div>
                        </div>
                        <div className="Suggested">
                              <div>Suggested</div>
                              <SuggestedUserCard />
                        </div>
                        <div className="pymk">
                              <div>
                                    <div>People you may know</div>
                                    <div><button className="pymk-btn">See more</button></div>
                              </div>
                              <div className="pymk-content">
                                    <PumkCard />

                              </div>
                        </div>
                  </div>
            </div>,
            document.getElementById("searchPortal")
      )
}

export default Searching
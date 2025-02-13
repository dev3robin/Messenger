import ReactDOM from "react-dom";
import PumkCard from "./pumkCard"
import './searchQuery.css'
import RecentSearchCard from "./recentsearchCard"
import SuggestedUserCard from "./suggesteduserCard"
import { useEffect, useRef, useState } from "react"
import SearchQuery from "./searchQuery";
function Searching(props){
      const {isSearching,setIsSearching}=props
      const[query,setQuery]=useState('')
      
      function handleIsSearch(){
            setIsSearching(false)
      }
      const inputRef=useRef(null)
      useEffect(() => {
            if (isSearching && inputRef.current) {
                inputRef.current.focus();
            }
        }, [isSearching, inputRef]);
      function handleClose(){
            setQuery('')
      }
      return ReactDOM.createPortal(
            <div className={"searching " + (isSearching? "isActive":"")}>
                  <div className="searchInput">
                        <div>
                              <div><button onClick={handleIsSearch}><i class="fa-solid fa-arrow-left"></i></button></div>
                              <div>
                                    <input ref={inputRef} 
                                          className="s-input" type="text"
                                          placeholder="Search"
                                          value={query}
                                          onChange={(e)=>{setQuery(e.target.value)}}
                                    />
                              </div>
                        </div>
                        {query && <div><button onClick={handleClose}><i class="fa-solid fa-xmark"></i></button></div>}
                  </div>

                  {query && <SearchQuery query={query}/>}
                  {!query &&
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
                  }
            
            </div>,
            document.getElementById("searchPortal")
      )
}

export default Searching
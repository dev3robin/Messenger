import { useState } from "react";
import Searching from './searching'
function SearchBar(){
      const [isSearching,setIsSearching]=useState(false)
      function handleSearchActive(){
            setIsSearching(true);
      }
      return (
            <div className="search-bar-div">
                  <button className="search-bar" onClick={handleSearchActive}>
                        <span><i class="fa-solid fa-magnifying-glass"></i></span>
                        <span>Search</span>
                  </button>
                  {isSearching && (
                        <Searching
                              isSearching={isSearching}
                              setIsSearching={setIsSearching}
                        />   
                  )}
            </div>
            
      )
}

export default SearchBar;
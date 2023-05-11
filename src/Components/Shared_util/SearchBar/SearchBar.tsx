import React from "react"
import { SearchBarContainer } from "./SearchBarStyles"

const SearchBar = () => {
    return(
        <SearchBarContainer>
            <input 
                type="search" 
                placeholder="search"
                className="search-btn"/>
        </SearchBarContainer>
    )
}

export default SearchBar
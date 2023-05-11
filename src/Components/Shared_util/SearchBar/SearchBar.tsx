import React from "react"
import { SearchBarContainer, SearchBox } from "./SearchBarStyles"
import {MdSearch} from "react-icons/md"

const SearchBar = () => {
    return(
        <SearchBarContainer>
            <SearchBox>
                <input type="search" placeholder="search" className="search-btn"/>
                <MdSearch className="search-icon"/>
            </SearchBox>
        </SearchBarContainer>
    )
}

export default SearchBar
import React from "react"
import { SearchBarContainer, SearchBox } from "./SearchBarStyles"
import {MdSearch} from "react-icons/md"
import { queryProp } from "../Constants/Types"

const SearchBar: React.FC<queryProp> = ({query, setQuery}) => {
    return(
        <SearchBarContainer>
            <SearchBox>
                <input 
                    type="search" 
                    value={query}
                    onChange={e=>setQuery(e.target.value)}
                    placeholder="Search" 
                    className="search-btn"/>
                <MdSearch className="search-icon"/>
            </SearchBox>
        </SearchBarContainer>
    )
}

export default SearchBar
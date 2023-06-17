import React from "react"
import { SearchBarContainer, SearchBox } from "./SearchBarStyles"
import { MdRefresh, MdSearch } from "react-icons/md"
import { queryProp } from "../Constants/Types"
import { RefreshWrapper } from "../../DonorPage/DonorStyles"
import { v4 } from "uuid"

const SearchBar: React.FC<queryProp> = ({ query, setQuery, setRefresh }) => {

    return (
        <SearchBarContainer>
            <SearchBox>
                <input
                    type="search"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search"
                    className="search-btn" />
                <MdSearch className="search-icon" />
            </SearchBox>
            <RefreshWrapper onClick={() => setRefresh(v4())}>
                <MdRefresh size={25} />
            </RefreshWrapper>
        </SearchBarContainer>
    )
}

export default SearchBar
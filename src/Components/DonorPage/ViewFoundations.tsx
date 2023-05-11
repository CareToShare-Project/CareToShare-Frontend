import React from 'react'
import CharityCard from './CharityCard'
import { ViewFoundationContainer, RightSideContentWrapper} from './DonorStyles'
import SearchBar from '../Shared_util/SearchBar/SearchBar'

function ViewFoundations(){
    return(
        <RightSideContentWrapper>
            <SearchBar />
            <ViewFoundationContainer>
                <CharityCard />
                <CharityCard />
                <CharityCard />
                <CharityCard />
                <CharityCard />
                <CharityCard />
                <CharityCard />
                <CharityCard />
                <CharityCard />
                <CharityCard />
            </ViewFoundationContainer>
        </RightSideContentWrapper>
    )

}

export default ViewFoundations
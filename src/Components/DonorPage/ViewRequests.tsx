import React, { useState } from 'react'
import RequestCard from './RequestCard';
import { RightSideContentWrapper, ViewFoundationContainer } from './DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';

function ViewRequests (){
    const [query, setQuery] = useState("")
    return (
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery}/>
            <ViewFoundationContainer>
                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />
            </ViewFoundationContainer>
            
        </RightSideContentWrapper>
    )
}

export default ViewRequests;
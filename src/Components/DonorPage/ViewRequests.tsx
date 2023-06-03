import React, { useState } from 'react'
import RequestCard from './RequestCard';
import { RefreshWrapper, RightSideContentWrapper, ViewFoundationContainer } from './DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import { NoOrganisationContainer as NoRequestContainer } from './DonorStyles';
import { MdRefresh } from 'react-icons/md';

function ViewRequests (){
    const [query, setQuery] = useState("")
    const [requests, setRequests] = useState<any>()
    return (
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery}/>
            <RefreshWrapper>
                <span>Refresh</span>
                <MdRefresh size={25}/>
            </RefreshWrapper>
            <hr></hr>
            {requests && <ViewFoundationContainer>
                            <RequestCard />
                            <RequestCard />
                            <RequestCard />
                            <RequestCard />
                            <RequestCard />
                            <RequestCard />
                            <RequestCard />
                            <RequestCard />
                        </ViewFoundationContainer> }  
            {
                !requests && <NoRequestContainer>
                                <h4>No Request found</h4>
                            </NoRequestContainer>
            }
        </RightSideContentWrapper>
    )
}

export default ViewRequests;
import React, { useState } from 'react'
import RequestCard from './RequestCard';
import { RightSideContentWrapper, ViewFoundationContainer } from './DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import { NoOrganisationContainer as NoRequestContainer } from './DonorStyles';


function ViewRequests (){
    const [query, setQuery] = useState("")
    const [requests, setRequests] = useState<any>("sdfg")
    const [refresh, setRefresh] = useState<string>("")
    return (
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh}/>
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
import React from 'react'
import RequestCard from './RequestCard';
import { RightSideContentWrapper, ViewFoundationContainer } from './DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';

function ViewRequests (){
    return (
        <RightSideContentWrapper>
            <SearchBar />
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
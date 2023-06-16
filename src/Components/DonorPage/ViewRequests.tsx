import React, { useEffect, useState } from 'react'
import RequestCard from './RequestCard';
import { RightSideContentWrapper, ViewFoundationContainer } from './DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import { NoOrganisationContainer as NoRequestContainer } from './DonorStyles';
import { RequestCardProp } from '../Shared_util/Constants/Types';
import { useNavigate } from 'react-router-dom';
import { getAllRequests } from '../Shared_util/Constants/Functions';


function ViewRequests() {
    const [query, setQuery] = useState("")
    const [campaigns, setCampaigns] = useState<any>([])
    const [specificRequests, setSpecificRequest] = useState<any>([])
    const [refresh, setRefresh] = useState<string>("")

    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)

    const userData = sessionStorage.getItem('userDetails')
    const userDetails = userData && JSON.parse(userData)

    const navigate = useNavigate();


    // fetches requests 
    useEffect(() => {
        getAllRequests(setCampaigns, setSpecificRequest, userDetails.username, accessToken, navigate)
    }, [refresh, userDetails.username, accessToken, navigate])

    return (
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />
            {campaigns &&
                <div className='request'>
                    <h5>Campaigns</h5>
                    <ViewFoundationContainer>
                        {campaigns
                            .filter((item: { requestedBy: string }) => {
                                return item.requestedBy.toLowerCase().includes(query.toLowerCase())
                            }).map((req: RequestCardProp['details']) => {
                                return (
                                    <RequestCard details={req} key={req.requestId} />
                                )
                            })}
                    </ViewFoundationContainer>
                </div>}
            {
                !campaigns.length && <NoRequestContainer>No Campaigns available</NoRequestContainer>
            }
            {specificRequests &&
                <div className='request'>
                    <h5>Your Donations</h5>
                    <ViewFoundationContainer>
                        {specificRequests
                            .filter((item: { requestedBy: string }) => {
                                return item.requestedBy.toLowerCase().includes(query.toLowerCase())
                            }).map((req: RequestCardProp['details']) => {
                                return (
                                    <RequestCard details={req} key={req.requestId} />
                                )
                            })}
                    </ViewFoundationContainer>
                </div>

            }
            {!specificRequests.length && <NoRequestContainer>
                No request has been made for your donations
            </NoRequestContainer>}
        </RightSideContentWrapper>
    )
}

export default ViewRequests;
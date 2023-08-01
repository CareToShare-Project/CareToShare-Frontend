import React, { useEffect, useState } from 'react'
import RequestCard from './RequestCard';
import { RightSideContentWrapper} from './DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import { NoOrganisationContainer as NoRequestContainer } from './DonorStyles';
import { RequestCardProp } from '../Shared_util/Constants/Types';
import { useNavigate } from 'react-router-dom';
import { getAllRequests } from '../Shared_util/Constants/Functions';


function ViewRequests() {
    const [query, setQuery] = useState("")
    const [campaigns, setCampaigns] = useState<any>([])
    const [refresh, setRefresh] = useState<string>("")

    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)


    const navigate = useNavigate();


    // fetches requests 
    useEffect(() => {
        getAllRequests(setCampaigns,  accessToken, navigate)
    }, [refresh, accessToken, navigate])

    return (
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />
            {campaigns &&
                            
                        campaigns
                            .filter((item: {
                                requestStatus: string; organisationName: string}) => {
                                return item.organisationName.toLowerCase().includes(query.toLowerCase()) ||
                                item.requestStatus === "In Progress"
                            }).map((req: RequestCardProp['details']) => {
                                return (
                                    <RequestCard details={req} key={req.campaignId} />
                                )
                            })
                        }
            
            {
                !campaigns.length && <NoRequestContainer>No Campaigns available</NoRequestContainer>
            }
        </RightSideContentWrapper>
    )
}

export default ViewRequests;
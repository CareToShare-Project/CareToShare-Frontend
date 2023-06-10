import React, { useEffect, useState} from 'react'
import RequestCard from './RequestCard';
import { RightSideContentWrapper, ViewFoundationContainer } from './DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import { NoOrganisationContainer as NoRequestContainer } from './DonorStyles';
import { BASE_URL } from '../Shared_util/Constants/Base_URL';
import { RequestCardProp } from '../Shared_util/Constants/Types';
import { useParams } from 'react-router-dom';
import { getAllRequests } from '../Shared_util/Constants/Functions';


function ViewRequests (){
    const [query, setQuery] = useState("")
    const [campaigns, setCampaigns] = useState<any>([])
    const [specificRequests, setSpecificRequest] = useState<any>([])
    const [refresh, setRefresh] = useState<string>("")

    const {username} = useParams()

    

    // gets all organisations on page load
    useEffect(()=>{
        const results_1 = sessionStorage.getItem('campaigns')
        const results_2 = sessionStorage.getItem('specificRequests')
        if(results_1 !== null && results_2 !== null) {
            const availableCampaigns = JSON.parse(results_1);
            const availableRequests = JSON.parse(results_2)
            setCampaigns(availableCampaigns)
            setSpecificRequest(availableRequests)
        }else{
            getAllRequests(setCampaigns, setSpecificRequest, username);
        }
        
    },[username])

    // updates request on refresh
    useEffect(()=>{
        getAllRequests(setCampaigns, setSpecificRequest, username)
    }, [refresh, username])

    return (
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh}/>
            {campaigns &&
                <div className='request'>
                    <h5>Campaigns</h5>
                    <ViewFoundationContainer>
                            {campaigns
                                .filter((item: { requestedBy : string})=> {
                                return item.requestedBy.toLowerCase().includes(query.toLowerCase())
                                }).map((req : RequestCardProp['details'])=> {
                                    return (
                                        <RequestCard details={req} key={req.requestId}/>
                                    )
                            })}
                    </ViewFoundationContainer>
               </div>} 
            {specificRequests && 
                <div className='request'>
                    <h5>Your Donations</h5>
                    <ViewFoundationContainer>
                            {specificRequests
                                .filter((item: { requestedBy : string})=> {
                                return item.requestedBy.toLowerCase().includes(query.toLowerCase())
                                }).map((req : RequestCardProp['details'])=> {
                                    return (
                                        <RequestCard details={req} key={req.requestId}/>
                                        )
                            })}
                    </ViewFoundationContainer>
                </div>
            
            }
        
{/* 
            {
                !campaigns && !specificRequests && 
                            <NoRequestContainer>
                                <h4>No Request found</h4>
                            </NoRequestContainer>
            } */}
        </RightSideContentWrapper>
    )
}

export default ViewRequests;
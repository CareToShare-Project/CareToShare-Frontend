import React, { useEffect, useState } from 'react'
import RequestCard from './RequestCard';
import { RightSideContentWrapper, ViewFoundationContainer } from './DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import { NoOrganisationContainer as NoRequestContainer } from './DonorStyles';
import { BASE_URL } from '../Shared_util/Constants/Base_URL';
import { RequestCardProp } from '../Shared_util/Constants/Types';
import { useParams } from 'react-router-dom';


function ViewRequests (){
    const [query, setQuery] = useState("")
    const [campaigns, setCampaigns] = useState<any>([])
    const [specificRequests, setSpecificRequest] = useState<any>([])
    const [refresh, setRefresh] = useState<string>("")

    const {username} = useParams()

    // fetches all requests from the backend
    const getAllRequests = async() => {
        try{
            const response = await fetch(`${BASE_URL}/requests`,{
                method : 'GET',
                headers : {'content-type':'application/json'},
            })

            const results = await response.json();
            const campaignData = results.data.filter((item: { requestType: string; })=> item.requestType === "Campaign");
            const specificRequestData = results.data.filter((item: { requestTo: string; })=> item.requestTo === username);
            console.log(campaignData)
            console.log(specificRequestData)
                if(results.status === "success"){
                    setCampaigns(campaignData)
                    setSpecificRequest(specificRequestData)
                    sessionStorage.setItem('campaigns', JSON.stringify(campaignData))
                    sessionStorage.setItem('specificRequests', JSON.stringify(specificRequestData))
                }
            }catch(error){
            console.log(error)
        }
    }

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
            getAllRequests();
        }
        
    }, [])

    useEffect(()=>{
        getAllRequests()
    }, [refresh])

    return (
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh}/>
            {campaigns && 
                <div className='requests'>
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
               </div>
            }
            {specificRequests && 
                <div className='requests'>
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
        

            {
                !campaigns && !specificRequests && <NoRequestContainer>
                                <h4>No Request found</h4>
                            </NoRequestContainer>
            }
        </RightSideContentWrapper>
    )
}

export default ViewRequests;
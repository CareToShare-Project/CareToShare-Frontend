import React, {useEffect, useState} from 'react'
import CharityCard from './CharityCard'
import { ViewFoundationContainer, RightSideContentWrapper, NoOrganisationContainer, RefreshWrapper} from './DonorStyles'
import SearchBar from '../Shared_util/SearchBar/SearchBar'
import {MdRefresh} from "react-icons/md"
import { BASE_URL } from '../Shared_util/Constants/Base_URL'
import { organisationCardProp } from '../Shared_util/Constants/Types'
import {v4} from "uuid"

function ViewFoundations(){
    const [organisations, setOrganisations] = useState<any>()
    const [refresh, setRefresh] = useState("")
    const [query, setQuery] = useState("")

    // handles page refresh and fetches data from the backend on every refresh
    const refreshPage = () =>{
        setRefresh(v4())
    }

    // a function to fetch all available organisations from the backend
    const getAllOrganisations = async() => {
        try{
            const response = await fetch(`${BASE_URL}/organisations`,{
                method : 'GET',
                headers : {'content-type':'application/json'},
            })

            const results = await response.json();
            const organisation = results.data
                if(results.status === "success"){
                    setOrganisations(organisation)
                    sessionStorage.setItem('organisations', JSON.stringify(organisation))
                }
            }catch(error){
            console.log(error)
        }
    }

    // gets all organisations on page load
    useEffect(()=>{
        const results = sessionStorage.getItem('organisations')
        if(results !== null) {
            const availableOrganisations = JSON.parse(results);
            setOrganisations(availableOrganisations)
        }else{
            getAllOrganisations();
        }
        
    }, [])

    useEffect(()=>{
        getAllOrganisations()
        console.log(refresh)
    }, [refresh])

    return(
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery}/>
            <RefreshWrapper onClick={refreshPage}>
                <span>Refresh</span>
                <MdRefresh size={25}/>
            </RefreshWrapper>
            <hr></hr>
            {organisations && <ViewFoundationContainer>
                                    {organisations
                                        .filter((item: { organisationName : string ; location : string})=> {
                                        return item.organisationName.toLowerCase().includes(query.toLowerCase()) || 
                                                item.location.toLowerCase().includes(query.toLowerCase())
                                        })
                                        .map((org : organisationCardProp['details'])=> {
                                            return (
                                                <CharityCard details={org} key={org.email} />
                                            )
                                    })}
                                </ViewFoundationContainer>}
            {!organisations && <NoOrganisationContainer>
                                    <h4>No organisation found</h4>
                                </NoOrganisationContainer>
                    }
        </RightSideContentWrapper>
    )

}

export default ViewFoundations
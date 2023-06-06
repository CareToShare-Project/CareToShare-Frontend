import React, {useEffect, useState} from 'react'
import CharityCard from './CharityCard'
import { ViewFoundationContainer, RightSideContentWrapper, NoOrganisationContainer} from './DonorStyles'
import SearchBar from '../Shared_util/SearchBar/SearchBar'
import { organisationCardProp } from '../Shared_util/Constants/Types'
import { getAllOrganisations } from '../Shared_util/Constants/Functions'


function ViewFoundations(){
    const [organisations, setOrganisations] = useState<any>()
    const [refresh, setRefresh] = useState("")
    const [query, setQuery] = useState("")


    
    // gets all organisations on page load
    useEffect(()=>{
        const results = sessionStorage.getItem('organisations')
        if(results !== null) {
            const availableOrganisations = JSON.parse(results);
            setOrganisations(availableOrganisations)
        }else{
            getAllOrganisations(setOrganisations);
        }
        
    }, [])

    // fetch organisations on refresh
    useEffect(()=>{
        getAllOrganisations(setOrganisations)
    }, [refresh])

    return(
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh}/>
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
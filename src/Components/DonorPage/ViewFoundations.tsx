import React, {useEffect, useState} from 'react'
import CharityCard from './CharityCard'
import { ViewFoundationContainer, RightSideContentWrapper} from './DonorStyles'
import SearchBar from '../Shared_util/SearchBar/SearchBar'
import { BASE_URL } from '../Shared_util/Constants/Base_URL'
import { organisationCardProp } from '../Shared_util/Constants/Types'

function ViewFoundations(){
    const [organisations, setOrganisations] = useState<any>()
    console.log(organisations)

    const getAllOrganisations = async() => {
        try{
        const response = await fetch(`${BASE_URL}/organisations`,{
            method : 'GET',
            headers : {'content-type':'application/json'},
        })

        const results = await response.json();
        const org = results.data
        if(results.status === "success"){
            setOrganisations(org)
        }}catch(error){
            console.log(error)
        }
    }

    // gets all organisations on page load
    useEffect(()=>{
        getAllOrganisations();
    }, [])

    return(
        <RightSideContentWrapper>
            <SearchBar />
            {organisations && <ViewFoundationContainer>
                {organisations.map((org : organisationCardProp['details'])=> {
                    return (
                        <CharityCard details={org} key={org.email} />
                    )
                })}
            </ViewFoundationContainer>}
        </RightSideContentWrapper>
    )

}

export default ViewFoundations
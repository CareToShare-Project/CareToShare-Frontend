import React, { useEffect, useState } from 'react'
import CharityCard from './CharityCard'
import { ViewFoundationContainer, RightSideContentWrapper, NoOrganisationContainer } from './DonorStyles'
import SearchBar from '../Shared_util/SearchBar/SearchBar'
import { OrganisationProps } from '../Shared_util/Constants/Types'
import { getAllOrganisations } from '../Shared_util/Constants/Functions'
import ProfileModal from './ProfileModal'
import { useNavigate } from 'react-router-dom'



function ViewFoundations() {
    const [organisations, setOrganisations] = useState<OrganisationProps[]>([])
    //const [accessToken, setAccessToken] = useState('')
    const [refresh, setRefresh] = useState("")
    const [query, setQuery] = useState("")
    const [show, setShow] = useState(false)
    const [details, setDetails] = useState<OrganisationProps>()

    const navigate = useNavigate()

    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)




    // fetch organisations on refresh
    useEffect(() => {
        getAllOrganisations(setOrganisations, accessToken, navigate)
    }, [refresh, accessToken, navigate])

    return (
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />
            {organisations && 
            <ViewFoundationContainer>
                {organisations
                    .filter((item: OrganisationProps) => {
                        return item.organisationName.toLowerCase().includes(query.toLowerCase()) ||
                            item.location.toLowerCase().includes(query.toLowerCase())
                    })
                    .map((org: OrganisationProps) => {
                        return (
                            <CharityCard
                                details={org}
                                key={org.email}
                                setDetails={setDetails}
                                setShow={setShow} />
                        )
                    })}
            </ViewFoundationContainer>}
            {!organisations.filter((item: OrganisationProps) => {
                return item.organisationName.toLowerCase().includes(query.toLowerCase()) ||
                    item.location.toLowerCase().includes(query.toLowerCase())
            }).length && <NoOrganisationContainer>
                            <h4>No organisation found</h4>
                        </NoOrganisationContainer>
            }
            <ProfileModal
                show={show}
                setShow={setShow}
                details={details}
            />
        </RightSideContentWrapper>
    )

}

export default ViewFoundations
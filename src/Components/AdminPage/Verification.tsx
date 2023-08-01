import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ApproveDonationContainer } from "./Admin.Styles"
import { NoOrganisationContainer, TableWrapper } from "../DonorPage/DonorStyles"
import SearchBar from "../Shared_util/SearchBar/SearchBar"
import { Table } from "react-bootstrap"
import { getAllOrganisations, calculateUsageDuration, calculateSentiment} from "../Shared_util/Constants/Functions"
import { OrganisationProps} from "../Shared_util/Constants/Types"


const Verification = () => {
    const [organisations, setOrganisation] = useState<OrganisationProps[]>([])
    const [refresh, setRefresh] = useState("")
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)

      

    useEffect(() => {
        getAllOrganisations(setOrganisation, accessToken, navigate)
    }, [refresh, accessToken, navigate])


    return (
        <ApproveDonationContainer>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />
            <TableWrapper>
                <Table responsive className='table' striped hover bordered >
                    <thead className='table-heading'>
                        <tr>
                            <th>Name of Organisation</th>
                            <th>Location</th>
                            <th>Platform Usage Duration</th>
                            <th>Review Count</th>
                            <th>Results</th>
                            <th>Verified</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {organisations.filter(item => item.email.toLowerCase().includes(query.toLowerCase()) ||
                            item.organisationName.toLowerCase().includes(query.toLowerCase()) ||
                            item.location.toLowerCase().includes(query.toLowerCase())).map((org: OrganisationProps) => {
                                return (
                                    <tr key={org.username}>
                                        <td>{org.organisationName}</td>
                                        <td>{org.location}</td>
                                        <td>{calculateUsageDuration(org.createdAt.slice(0, 10))}</td>
                                        <td>{org.reviews.length}</td>
                                        <td>{calculateSentiment(org.reviews)}</td>
                                        <td>{org.isVerified ? "Yes" : "No"}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table>
                {
                    organisations
                            .filter(item => item.email.toLowerCase().includes(query.toLowerCase()) ||
                                            item.organisationName.toLowerCase().includes(query.toLowerCase()) ||
                                            item.location.toLowerCase().includes(query.toLowerCase()))
                            .length === 0 ? <NoOrganisationContainer>No Organisation Found</NoOrganisationContainer> : ""
                }
            </TableWrapper>
        </ApproveDonationContainer>
    )
}


export default Verification
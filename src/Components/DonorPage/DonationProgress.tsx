import React, { useCallback, useEffect, useState } from 'react'
import {NoOrganisationContainer, RightSideContentWrapper, TableWrapper} from './DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import Table from 'react-bootstrap/Table';
import { NoOrganisationContainer as NoDonationContainer } from './DonorStyles';
import { getUserDonations } from '../Shared_util/Constants/Functions';
import { useParams } from 'react-router-dom';
import { donationProps } from '../Shared_util/Constants/Types';


const DonationProgress = () => {
    const {username} = useParams()
    const [query, setQuery] = useState('')
    const [donations, setDonations] = useState<donationProps[]>([])
    const [refresh, setRefresh] = useState<string>("")

  
    useEffect(()=>{
        getUserDonations(setDonations, username)
    }, [username, refresh])

    return(
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh}/>

            {donations && 
            <TableWrapper>
                <Table responsive className='table' striped hover bordered>
                    <thead className='table-heading'>
                        <tr>
                            <th>Type</th>
                            <th>Organisation</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {
                            donations.map((donation: donationProps) => {
                                return (
                                    <tr key={donation.donationId}>
                                        <td>{donation.donationType}</td>
                                        <td>
                                            {donation.donationType === "Specific" ? donation.donatedTo : "-"}
                                        </td>
                                        <td>{donation.updatedAt.slice(0,10)}</td>
                                        <td>{donation.location}</td>
                                        <td>{donation.donationStatus}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                {
                    !donations.length && <NoOrganisationContainer>You haven't made any donations yet</NoOrganisationContainer>
                }
        </TableWrapper>}
        {!donations && <NoDonationContainer>
                            <h4>No Donation found</h4>
                        </NoDonationContainer>}
        </RightSideContentWrapper>
    )
};

export default DonationProgress;
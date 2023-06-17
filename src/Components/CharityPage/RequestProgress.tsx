import React, { useEffect, useState } from 'react'
import { DonateButton, NoOrganisationContainer, RightSideContentWrapper, TableWrapper } from '../DonorPage/DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import Table from 'react-bootstrap/Table';
import { fetchRequests, organisationRequest } from '../Shared_util/Constants/Functions';
import { useNavigate } from 'react-router-dom';
import { requestProps } from '../Shared_util/Constants/Types';


const RequestProgress = () => {
    const [query, setQuery] = useState('')
    const [requests, setRequests] = useState<requestProps[]>([])
    const [refresh, setRefresh] = useState<string>("")

    const navigate = useNavigate()

    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)
    const userData = sessionStorage.getItem('userDetails')
    const userDetails = userData && JSON.parse(userData)

    

    


    useEffect(() => {
        organisationRequest(setRequests, userDetails.organisationName,accessToken, navigate)
    }, [refresh, accessToken, navigate, userDetails.organisationName])

    return (
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />

            {requests &&
                <TableWrapper>
                    <Table responsive className='table' striped hover bordered>
                        <thead className='table-heading'>
                            <tr>
                                <th>Type</th>
                                <th>RequestTo</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='table-body'>
                            {
                                requests.map((req: requestProps) => {
                                    return (
                                        <tr key={req.requestId}>
                                            <td>{req.requestType}</td>
                                            <td>
                                                {req.requestTo}
                                            </td>
                                            <td>{req.createdAt.slice(0,10)}</td>
                                            <td>{req.description}</td>
                                            <td>{req.requestStatus}</td>
                                            <td>
                                            {req.requestTo ==="General" ? 
                                                <DonateButton>
                                                    Close Campaign
                                                </DonateButton> : "No action"
                                                 }
                                                
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    {
                        !requests.length && <NoOrganisationContainer>You haven't made any request yet</NoOrganisationContainer>
                    }
                </TableWrapper>}
        </RightSideContentWrapper>
    )
};

export default RequestProgress;
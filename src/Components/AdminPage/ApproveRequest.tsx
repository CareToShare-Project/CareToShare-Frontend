import React, { useEffect, useState } from 'react';
import { ApproveDonationContainer} from './Admin.Styles';
import { Table } from 'react-bootstrap';
import { NoOrganisationContainer, TableWrapper } from '../DonorPage/DonorStyles';
import { fetchRequests} from '../Shared_util/Constants/Functions';
import SearchBar from "../Shared_util/SearchBar/SearchBar"
import { requestProps } from '../Shared_util/Constants/Types';
import { useNavigate } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';


const ApproveRequest = () => {
    const [requests, setRequests] = useState<requestProps[]>([])
    const [refresh, setRefresh] = useState("")
    const [query, setQuery] = useState("")
    

    const navigate = useNavigate()

    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)



    useEffect(() => {
        fetchRequests(setRequests, accessToken, navigate)
    }, [refresh, accessToken, navigate])

    return (
        <ApproveDonationContainer>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />
            <TableWrapper>
                <span>{requests.length} Requests</span>
                <Table responsive className='table' striped hover bordered >
                    <thead className='table-heading'>
                        <tr>
                            <th>Campaign ID</th>
                            <th>Organisation</th>
                            <th>Campaign</th>
                            <th>Date</th>
                            <th>Target</th>
                            <th>Status</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {requests.filter(item => item.campaignTitle?.toLowerCase().includes(query.toLowerCase()) || 
                                                 item.description?.toLowerCase().includes(query.toLowerCase()) ||
                                                 item.organisationName?.toLowerCase().includes(query.toLowerCase())).map((req: requestProps) => {
                                return (
                                    <tr key={req.campaignId}>
                                        <th>{req.campaignId}</th>
                                        <td>{req.organisationName}</td>
                                        <td>{req.campaignTitle}</td>
                                        <td>{req.createdAt.slice(0, 10)}</td>
                                        <td>{req.target}</td>
                                        <td>{req.requestStatus}</td>
                                        <th><AiFillEye size={15} color="green"/></th>
                                       
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table>
                {
                requests
                        .filter(item => item.description?.toLowerCase().includes(query.toLowerCase()) ||
                                        item.organisationName?.toLowerCase().includes(query.toLowerCase()) || 
                                        item.campaignTitle?.toLowerCase().includes(query.toLowerCase()))
                        .length === 0 ? <NoOrganisationContainer>No Request Found</NoOrganisationContainer> : ""
                }
            </TableWrapper>
            
        </ApproveDonationContainer>
    );
}



export default ApproveRequest;
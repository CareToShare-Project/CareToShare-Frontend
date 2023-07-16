import React, { useEffect, useState } from 'react';
import { ApproveDonationContainer, ApproveButton } from './Admin.Styles';
import { Spinner, Table } from 'react-bootstrap';
import { NoOrganisationContainer, TableWrapper } from '../DonorPage/DonorStyles';
import { fetchRequests, approveRequest } from '../Shared_util/Constants/Functions';
import SearchBar from "../Shared_util/SearchBar/SearchBar"
import LoginToast from '../Shared_util/Toast/LoginToast';
import { requestProps } from '../Shared_util/Constants/Types';
import { useNavigate } from 'react-router-dom';


const ApproveRequest = () => {
    const [requests, setRequests] = useState<requestProps[]>([])
    const [showLoading, setShowLoading] = useState(false)
    const [refresh, setRefresh] = useState("")
    const [query, setQuery] = useState("")
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')

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
                            {/* <th>Request Type</th> */}
                            <th>Requested By</th>
                            {/* <th>Request To</th> */}
                            <th>Description</th>
                            <th>Date</th>
                            {/* <th>Approve</th> */}
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {requests.filter(item => item.description?.toLowerCase().includes(query.toLowerCase()) ||
                            item.requestedBy?.toLowerCase().includes(query.toLowerCase()) || item.requestTo?.toLowerCase().includes(query.toLowerCase())).map((req: requestProps) => {
                                return (
                                    <tr key={req.requestId}>
                                        {/* <td>{req.requestType}</td> */}
                                        <td>{req.requestedBy}</td>
                                        {/* <td>{req.requestType === "Specific" ? req.requestTo : "Generic"}</td> */}
                                        <td>{req.description}</td>
                                        <td>{req.createdAt.slice(0, 10)}</td>
                                        {/* <td>
                                            {req.requestStatus === "Pending" ?
                                                <ApproveButton onClick={() => approveRequest(req.requestId,
                                                    setShowLoading,
                                                    setToastMessage,
                                                    setShowToast,
                                                    accessToken,
                                                    navigate)}
                                                >
                                                    Approve
                                                </ApproveButton> : <span>Approved</span>
                                            }

                                        </td> */}
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table>
                {
                requests
                        .filter(item => item.description?.toLowerCase().includes(query.toLowerCase()) ||
                                        item.requestedBy?.toLowerCase().includes(query.toLowerCase()) || 
                                        item.requestTo?.toLowerCase().includes(query.toLowerCase()))
                        .length === 0 ? <NoOrganisationContainer>No Request Found</NoOrganisationContainer> : ""
                }
                <LoginToast
                    showToast={showToast}
                    setShowToast={setShowToast}
                    toastMessage={toastMessage}
                />
            </TableWrapper>
            {showLoading && <Spinner animation='border' className='spinner' />}
        </ApproveDonationContainer>
    );
}



export default ApproveRequest;
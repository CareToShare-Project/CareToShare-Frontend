import React, { useEffect, useState } from 'react';
import { ApproveDonationContainer, ApproveButton, PaginationContainer } from './Admin.Styles';
import { Spinner, Table } from 'react-bootstrap';
import { TableWrapper } from '../DonorPage/DonorStyles';
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
    // state to show or hide toast
    const [showToast, setShowToast] = useState(false)

    // state to set toast message 
    const [toastMessage, setToastMessage] = useState('')

    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)

    const navigate = useNavigate()

    useEffect(() => {
        fetchRequests(setRequests, accessToken, navigate)
    }, [refresh, accessToken, navigate])

    return (
        <ApproveDonationContainer>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />
            <TableWrapper>
                <Table responsive className='table' striped hover bordered >
                    <thead className='table-heading'>
                        <tr>
                            <th>Request Type</th>
                            <th>Request From</th>
                            <th>Request To</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Approve</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {requests.map((req: requestProps) => {
                            return (
                                <tr key={req.requestId}>
                                    <td>{req.requestType}</td>
                                    <td>{req.requestedBy}</td>
                                    <td>{req.requestType === "Specific" ? req.requestTo : "Generic"}</td>
                                    <td style={{width: '200px'}}>{req.description}</td>
                                    <td>{req.createdAt.slice(0, 10)}</td>
                                    <td>
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

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <PaginationContainer>
                    <ApproveButton> 
                        Previous
                    </ApproveButton>
                    <span>Page 1</span>
                    <ApproveButton> 
                        Next
                    </ApproveButton>
                </PaginationContainer>
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
import React, { useEffect, useState } from 'react'
import { DonateButton,RightSideContentWrapper, TableWrapper } from './DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import Table from 'react-bootstrap/Table';
import { acceptRequest, fetchRequests} from '../Shared_util/Constants/Functions';
import { useNavigate } from 'react-router-dom';
import { requestProps } from '../Shared_util/Constants/Types';
import LoginToast from '../Shared_util/Toast/LoginToast';
import { Spinner } from 'react-bootstrap';


const Requests = () => {
    const [query, setQuery] = useState('')
    const [requests, setRequests] = useState<requestProps[]>([])
    const [refresh, setRefresh] = useState<string>("")

    const [showLoading, setShowLoading] = useState(false)
    // state to show or hide toast
    const [showToast, setShowToast] = useState(false)

    // state to set toast message 
    const [toastMessage, setToastMessage] = useState('')

    const navigate = useNavigate()

    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)
    const userData = sessionStorage.getItem('userDetails')
    const userDetails = userData && JSON.parse(userData)

    let requestsToDonor = requests?.filter(item=> item.requestTo === userDetails.username)

    const acceptRequestHandler = (id : string, requestedBy : any) =>{
        acceptRequest(id,setShowLoading,setToastMessage,setShowToast,accessToken,navigate,requestedBy)
    }


    useEffect(() => {
        fetchRequests(setRequests,accessToken, navigate)
    }, [refresh, accessToken, navigate])

    return (
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />

            {requestsToDonor &&
                <TableWrapper>
                    <Table responsive className='table' striped hover bordered>
                        <thead className='table-heading'>
                            <tr>
                                <th>Type</th>
                                <th>Requested By</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='table-body'>
                            {
                                requestsToDonor.map((req: requestProps) => {
                                    return (
                                        <tr key={req.requestId}>
                                            <td>{req.requestType}</td>
                                            <td>
                                                {req.requestedBy}
                                            </td>
                                            <td>{req.createdAt.slice(0,10)}</td>
                                            <td>{req.description}</td>
                                            <td>{req.requestStatus}</td>
                                            <td>
                                            {req.requestStatus ==="In Progress" ? 
                                                <DonateButton onClick={()=> acceptRequestHandler(req.requestId, req.requestedBy)}>
                                                    Accept
                                                </DonateButton> : "Completed"
                                                 }
                                                
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    <LoginToast
                        showToast={showToast}
                        setShowToast={setShowToast}
                        toastMessage={toastMessage}
                    />
                </TableWrapper>}
                {showLoading && <Spinner animation='border' className='spinner' />}
               
        </RightSideContentWrapper>
    )
};

export default Requests;
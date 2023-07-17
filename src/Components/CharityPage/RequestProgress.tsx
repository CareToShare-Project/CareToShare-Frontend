import React, { useEffect, useState } from 'react'
import { DonateButton, NoOrganisationContainer, RightSideContentWrapper, TableWrapper } from '../DonorPage/DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import Table from 'react-bootstrap/Table';
import {closeCampaign, organisationRequest } from '../Shared_util/Constants/Functions';
import { useNavigate } from 'react-router-dom';
import { requestProps } from '../Shared_util/Constants/Types';
import { BASE_URL } from '../Shared_util/Constants/Base_URL';
import LoginToast from '../Shared_util/Toast/LoginToast';
import { Spinner } from 'react-bootstrap';


const RequestProgress = () => {
    const [query, setQuery] = useState('')
    const [requests, setRequests] = useState<requestProps[]>([])
    const [refresh, setRefresh] = useState<string>("")
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [showLoading, setShowLoading] = useState(false);

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
                                            <td>{req.createdAt.slice(0,10)}</td>
                                            <td style={{width: '300px'}}>
                                                {req.description}
                                            </td>
                                            <td>{req.requestStatus}</td>
                                            <td>
                                            {req.requestTo ==="General" && req.requestStatus !=="Completed"? 
                                                <DonateButton onClick={()=>closeCampaign(req.requestId, setShowLoading,setToastMessage,setShowToast, accessToken,navigate)}>
                                                    Close 
                                                </DonateButton> : "Closed"
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
                    {
                        !requests.length && <NoOrganisationContainer>You haven't made any request yet</NoOrganisationContainer>
                    }
                </TableWrapper>}
                {showLoading && <Spinner animation="border" className="spinner" style={{color: 'black'}}/>}
        </RightSideContentWrapper>
    )
};

export default RequestProgress;
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
import { ApproveButton } from '../AdminPage/Admin.Styles';


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

    function calculateDaysLeft(dateString : Date | undefined) {
        // Convert the given date string to a Date object
        if (dateString=== undefined) return
        const givenDate = new Date(dateString);
      
        // Get the current date
        const currentDate = new Date();
      
        // Calculate the time difference in milliseconds
        const timeDiff =  givenDate.getTime() - currentDate.getTime();
      
        // Convert the time difference to days
        const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

      
        return `${daysDiff} days`;
      }
    
      const getAllDonations = async (campaignId: string) => {
        try {
            const response = await fetch(`${BASE_URL}/donations/${campaignId}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application{/json',
                    'authorization': `Bearer ${accessToken}`
                },
            })
    
            if (response.status === 401) return navigate("/login")
    
            if (response.status === 500) return

            const results = await response.json();
            const donation = results.data
            if (results.status === "success") {
                return donation.reduce((accumulator: any, currentValue: { quantity: any; }) => accumulator + currentValue.quantity, 0)

            }
        } catch (error) {
            console.log(error)
        }
    }

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
                                <th>Campaign</th>
                                <th>Days Left</th>
                                <th>Target</th>
                                <th>Status</th>
                                <th>Close Campaign</th>
                                <th>Donations</th>
                            </tr>
                        </thead>
                        <tbody className='table-body'>
                            {
                                requests.map((req: requestProps) => {
                                    return (
                                        <tr key={req.campaignId}>
                                            <td style={{width: '300px'}}>
                                                {req.campaignTitle}
                                            </td>
                                            <td>{calculateDaysLeft(req.endDate)} </td>
                                            <td>{req.target}</td>
                                            <td>{req.requestStatus}</td>
                                            <td>
                                                <ApproveButton>
                                                    close
                                                </ApproveButton>
                                            </td>
                                            <td>
                                                <ApproveButton>
                                                    view
                                                </ApproveButton>
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
import React, { useEffect, useState } from 'react'
import {NoOrganisationContainer, RightSideContentWrapper, TableWrapper } from '../DonorPage/DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import Table from 'react-bootstrap/Table';
import {closeCampaign, organisationRequest, calculateDaysLeft} from '../Shared_util/Constants/Functions';
import { useNavigate } from 'react-router-dom';
import { donationProps, requestProps } from '../Shared_util/Constants/Types';
import { BASE_URL } from '../Shared_util/Constants/Base_URL';
import LoginToast from '../Shared_util/Toast/LoginToast';
import { Modal, Spinner } from 'react-bootstrap';
import { ApproveButton } from '../AdminPage/Admin.Styles';
import { AiFillEye } from 'react-icons/ai';
import { v4 } from "uuid"


const RequestProgress = () => {
    const [query, setQuery] = useState('')
    const [requests, setRequests] = useState<requestProps[]>([])
    const [donations, setDonations] = useState<donationProps[]>([])
    const [refresh, setRefresh] = useState<string>("")
    const [showToast, setShowToast] = useState(false);
    const [show, setShow] = useState(false)
    const [toastMessage, setToastMessage] = useState("");
    const [showLoading, setShowLoading] = useState(false);

    const navigate = useNavigate()

    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)
    const userData = sessionStorage.getItem('userDetails')
    const userDetails = userData && JSON.parse(userData)

    const closeCampaignHandler = (campaignId: string) => {
        closeCampaign(campaignId, setShowLoading, setToastMessage,setShowToast,accessToken, navigate)
        setRefresh(v4())
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
                setDonations(donation)
                setShow(true)
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
                                <th>Donations</th>
                                <th>Close Campaign</th>
                                
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
                                            <td>{calculateDaysLeft(req.startDate,req.endDate)} </td>
                                            <td>{req.target}</td>
                                            <td>
                                                {calculateDaysLeft(req.startDate,req.endDate) === "Not Started"? "Pending" : req.requestStatus}
                                            </td>
                                            <td onClick={()=> getAllDonations(req.campaignId)}>
                                                <AiFillEye size={15} color="green"/>
                                            </td>
                                            <td>
                                                {req.requestStatus === "In Progress" ?<ApproveButton onClick={()=> closeCampaignHandler(req.campaignId)}>
                                                    Close
                                                </ApproveButton>: "Closed"}
                                            </td>
                                           
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        className='modal-container'
                        style={{ width: '100%', height: 'max-content' }}>
                        <Modal.Body style={{
                            display: 'flex', width: '100%',
                            flexDirection: 'column', padding: '20px', gap: '30px', height: "500px", overflowY : "scroll"
                        }}>
                    <TableWrapper>
                        <span>Donations: {donations.filter(item => item.donationStatus !== "Rejected").length}</span>
                        <Table responsive className='table' striped hover bordered>
                            <thead className='table-heading'>
                                    <tr>
                                        <th>Donated By</th>
                                        <th>Description</th>
                                        <th>Quantity</th>
                                        <th>Status</th>   
                                    </tr>
                                </thead>
                                <tbody className='table-body'>
                                    {
                                        donations.filter(item=> item.donationStatus !== "Rejected").map((donation:  donationProps) => {
                                            return (
                                                <tr key={donation.donationId}>
                                                    <td>{donation.donatedBy}</td>
                                                    <td style={{width: "150px"}}>
                                                        {donation.description}
                                                    </td>
                                                    <td>{donation.quantity}</td>
                                                    <td>
                                                        {!donation.delivered && !donation.received && donation.donationStatus}
                                                        {donation.delivered && !donation.received && "Delivered"}
                                                        {donation.delivered && donation.received && "Received"}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                             </Table>
                             <span>Total Quantity: {donations.filter(item=> item.donationStatus !== "Rejected").reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)}</span>
                            </TableWrapper>
                        </Modal.Body>
                    </Modal>
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
import React, { useEffect, useState } from 'react'
import { DonateButton, NoOrganisationContainer, RightSideContentWrapper, TableWrapper } from './DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import Table from 'react-bootstrap/Table';
import { NoOrganisationContainer as NoDonationContainer } from './DonorStyles';
import { deliverDonation, getUserDonations } from '../Shared_util/Constants/Functions';
import { useNavigate } from 'react-router-dom';
import { donationProps } from '../Shared_util/Constants/Types';
import { Modal } from 'react-bootstrap';
import { AiFillEye } from 'react-icons/ai';
import LoginToast from '../Shared_util/Toast/LoginToast';
import { v4 } from 'uuid';


const DonationProgress = () => {
    const [query, setQuery] = useState('')
    const [donations, setDonations] = useState<donationProps[]>([])
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [showLoading, setShowLoading] = useState(false);
    const [refresh, setRefresh] = useState<string>("")
    const [show, setShow] = useState(false)

    const initialState = {
        donationId: "hello",
        donorEmail: "hello",
        organisationEmail: "hello",
        campaignId: "hello",
        donatedBy: "hello",
        donatedTo: "hello",
        donationStatus: "hello",
        description: "hello",
        itemPhoto: "hello",
        location: "hello",
        createdAt: "hello",
        updatedAt: "hello",
        contact: "hello",
        quantity: 32,
        delivered: false,
        received: false,
        deliveryMethod : "hello",
    }

    const [data, setData] = useState<donationProps>(initialState)

    const navigate = useNavigate()

    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)

    const userData = sessionStorage.getItem('userDetails')
    const userDetails = userData && JSON.parse(userData)

    const deliverDonationHandler = (id: string) => {
        deliverDonation(id,setShowLoading,setToastMessage,setShowToast,accessToken, navigate)
        //acceptDonation(id,setShowLoading,setToastMessage,setShowToast,accessToken, navigate);
        setRefresh(v4())
        setShow(false)
    }

    const displayItems = (donation : donationProps) => {
        setData(donation)
        setShow(true)
    }




    useEffect(() => {
        getUserDonations(setDonations, userDetails.username, accessToken, navigate)
    }, [refresh, accessToken, navigate, userDetails.username])

    return (
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />
            {donations &&
                <TableWrapper>
                    <span>{donations.length} donations</span>
                    <Table responsive className='table' striped hover bordered>
                        <thead className='table-heading'>
                            <tr>
                                {/* <th>Type</th> */}
                                <th>Organisation</th>
                                <th>Delivery Date</th>
                                <th>Transaction Method</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody className='table-body'>
                            {
                                donations.map((donation: donationProps) => {
                                    return (
                                        <tr key={donation.donationId}>
                                            {/* <td>{donation.donationType}</td> */}
                                            <td>
                                                {donation.donatedTo}
                                            </td>
                                            <td>{donation.deliveryDate?.toString().slice(0,10)}</td>
                                            <td>{donation.deliveryMethod}</td>
                                            <td>{donation.location}</td>
                                            <td>
                                                {!donation.delivered && !donation.received && donation.donationStatus}
                                                {donation.delivered && !donation.received && "Delivered"}
                                                {donation.delivered && donation.received && "Received"}
                                            </td>
                                            <td onClick={()=> displayItems(donation)}>
                                                <AiFillEye size={15} color='green' /> 
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    <Modal show={show} onHide={() => setShow(false)}>
                        <Modal.Body>
                            <div style={{width: '500px', height: '350px', display: 'flex' , gap: '20px'}}>
                                <img src={data?.itemPhoto} alt="item" style={{width: '50%', objectFit: "cover"}}/>
                                <div style={{display: 'flex', width:"42%", flexDirection: 'column', gap: '20px', height: "350px", overflowY: "scroll", padding: '5px'}}>
                                    <div>
                                        <span style={{fontFamily: "Poppins", fontWeight: "700", color: '#56C0C8'}}>
                                            Description
                                        </span>
                                        <div style={{lineHeight: '13px', fontWeight: "450"}}>
                                            {data?.description}
                                        </div>
                                    </div>
                                    <div>
                                        <span style={{fontFamily: "Poppins", fontWeight: "700", color: '#56C0C8'}}>
                                            Transaction Method
                                        </span>
                                        <div style={{lineHeight: '13px', fontWeight: "450"}}>
                                            {data?.deliveryMethod}
                                        </div>
                                    </div>
                                    <div>
                                        <span style={{fontFamily: "Poppins", fontWeight: "700", color: '#56C0C8'}}>
                                            Location
                                        </span>
                                        <div style={{lineHeight: '13px', fontWeight: "450"}}>
                                            {data?.location}
                                        </div>
                                    </div>
                                    <div>
                                        <span style={{fontFamily: "Poppins", fontWeight: "700", color: '#56C0C8'}}>
                                            Delivered
                                        </span>
                                        <div style={{lineHeight: '13px', fontWeight: "450"}}>
                                            {data?.delivered ? "Yes" : "No"}
                                        </div>
                                    </div>
                                    <div>
                                        <span style={{fontFamily: "Poppins", fontWeight: "700", color: '#56C0C8'}}>
                                            Received
                                        </span>
                                        <div style={{lineHeight: '13px', fontWeight: "450"}}>
                                            {data?.received ? "Yes" : "No"}
                                        </div>
                                    </div>
                                    <div>
                                        <DonateButton
                                            onClick={()=>deliverDonationHandler(data.donationId)}
                                            disabled= {data.delivered}
                                            style={{width: "60%", borderRadius: "4px", padding: "3px"}}
                                            >
                                                    Deliver
                                        </DonateButton>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                    {
                        !donations.length && <NoOrganisationContainer>You haven't made any donations yet</NoOrganisationContainer>
                    }
                    <LoginToast
                            showToast={showToast}
                            setShowToast={setShowToast}
                            toastMessage={toastMessage}
                        />
                </TableWrapper>}
            {!donations && <NoDonationContainer>
                <h4>No Donation found</h4>
            </NoDonationContainer>}
        </RightSideContentWrapper>
    )
};

export default DonationProgress;
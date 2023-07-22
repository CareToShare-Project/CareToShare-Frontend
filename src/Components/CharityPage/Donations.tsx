import React, { useEffect, useRef, useState } from 'react'
import { DonateButton, NoOrganisationContainer, RightSideContentWrapper, TableWrapper } from '../DonorPage/DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner'
import { acceptDonation, getOrganisationDonations, receiveDonation, rejectDonation, updateDonation } from '../Shared_util/Constants/Functions';
import { useNavigate } from 'react-router-dom';
import { donationProps} from '../Shared_util/Constants/Types';
import LoginToast from '../Shared_util/Toast/LoginToast';
import {AiFillEye} from "react-icons/ai"
import { Modal } from 'react-bootstrap';
import { v4 } from "uuid"



const Donations = () => {
    const [query, setQuery] = useState('')
    const [donations, setDonations] = useState<donationProps[]>([])
    const [refresh, setRefresh] = useState<string>("")
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [showLoading, setShowLoading] = useState(false);
    const deliveryDateRef: any = useRef("");
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

    const acceptDonationHandler = (id: string) => {
        acceptDonation(id,setShowLoading,setToastMessage,setShowToast,accessToken, navigate);
        setRefresh(v4())
        setShow(false)
    }

    const rejectDonationHandler = (id: string) => {
        rejectDonation(id,setShowLoading,setToastMessage,setShowToast,accessToken, navigate)
        setRefresh(v4())
        setShow(false)
    }

    const receiveDonationHandler = (id: string) => {
        receiveDonation(id,setShowLoading,setToastMessage,setShowToast,accessToken, navigate)
        setRefresh(v4())
        setShow(false)
    }

    const updateDonationHandler = (id : string) => {
        const deliveryDate = {
                                deliveryDate : deliveryDateRef.current.value
                            }
                            
        updateDonation(id,setShowLoading,setToastMessage,setShowToast,accessToken, navigate, deliveryDate)
        setRefresh(v4())
        setShow(false)
    }
    

    const displayItems = (donation : donationProps) => {
        setData(donation)
        setShow(true)
    }

    


    useEffect(() => {
        getOrganisationDonations(setDonations, userDetails.organisationName, accessToken, navigate)
    }, [refresh, accessToken, navigate, userDetails.organisationName])

    return (
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />

            {donations &&
                <TableWrapper>
                    <Table responsive className='table' striped hover bordered>
                        <thead className='table-heading'>
                            <tr>
                                <th>Donated By</th>
                                <th>Contact</th>
                                <th>Delivery Date</th>
                                <th>Status</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody className='table-body'>
                            {
                                donations.map((donation: donationProps) => {
                                    return (
                                        <tr key={donation.donationId}>
                                            <td>{donation.donatedBy}</td>
                                            <td>{donation.contact}</td>
                                            <td>{donation.deliveryDate ? donation.deliveryDate.toString().slice(0,10) : 'Not scheduled'}</td>
                                            <td>
                                                {!donation.delivered && !donation.received && donation.donationStatus}
                                                {donation.delivered && !donation.received && "Delivered"}
                                                {donation.delivered && donation.received && "Received"}
                                            </td>
                                            <td>
                                                {donation.itemPhoto ?
                                                    <div onClick={()=> displayItems(donation)}>
                                                       <AiFillEye size={15} color='green' /> 
                                                    </div> : "No image"}
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
                        {showLoading && <Spinner animation="border" className="spinner" style={{color: 'black'}}/>}
                    {
                        !donations.length && <NoOrganisationContainer>No donation Found</NoOrganisationContainer>
                    }
                </TableWrapper>}
                <Modal show={show} onHide={() => setShow(false)}>
                    <Modal.Body>
                        <div style={{width: '500px', height: '350px', display: 'flex' , gap: '20px'}}>
                            <img src={data?.itemPhoto} alt="item" style={{width: '50%', objectFit: "cover"}}/>
                            <div style={{display: 'flex', width:"42%", flexDirection: 'column', gap: '20px', height: "350px", overflowY: "scroll", padding: '5px'}}>
                                <div>
                                    <span style={{fontFamily: "Poppins", fontWeight: "700", color: '#56C0C8'}}>
                                        Donated By
                                    </span>
                                    <div style={{lineHeight: '13px', fontWeight: "450"}}>
                                        {data?.donatedBy}
                                    </div>
                                </div>
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
                                {data.deliveryMethod === "Pickup" && 
                                    <div>
                                        <span style={{fontFamily: "Poppins", fontWeight: "700", color: '#56C0C8'}}>
                                            Pickup Location
                                        </span>
                                        <div style={{lineHeight: '13px', fontWeight: "450"}}>
                                            {data?.location}
                                        </div>
                                    </div>
                                }
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
                                 {!data?.delivered && data?.deliveryMethod !== "Delivery" && 
                                    <div style={{display: "flex", flexDirection: "column"}}>
                                        <label
                                            htmlFor='pickupdate' 
                                            style={{fontFamily: "Poppins", fontWeight: "700", color: '#56C0C8'}}>
                                            Pickup Date
                                        </label>
                                    <div style={{display: "flex", alignItems: "center", gap: "5px"}}>
                                        <input type='date' style={{width: '120px'}} id='location' ref={deliveryDateRef}/>
                                        <button 
                                            onClick={()=> updateDonationHandler(data?.donationId)}
                                            style={{borderRadius: "5px", width: "80px"}}>
                                            Save
                                        </button>
                                    </div>
                                </div>}
                                <div>
                                    <span style={{fontFamily: "Poppins", fontWeight: "700", color: '#56C0C8'}}>
                                        Status
                                    </span>
                                    <div style={{lineHeight: '13px', fontWeight: "450"}}>
                                        {!data?.delivered && !data?.received && data?.donationStatus}
                                        {data?.delivered && !data?.received && "Delivered"}
                                        {data?.delivered && data?.received && "Received"}
                                    </div>
                                </div>
                                <div>          
                                    {!data.delivered ?
                                    <>
                                        <DonateButton
                                            disabled= {data.donationStatus !=="In Progress"}
                                            style={{width: "45%"}}
                                            onClick={()=>acceptDonationHandler(data.donationId)}>
                                                    Accept
                                        </DonateButton>
                                        <DonateButton
                                            disabled= {data.donationStatus !=="In Progress"}
                                            style={{width: "45%"}}
                                            onClick={()=>rejectDonationHandler(data.donationId)}>
                                                    Decline
                                        </DonateButton> 
                                    </>: 
                                        <DonateButton
                                            disabled= {data.received}
                                            style={{width: "60%"}}
                                            onClick={()=>receiveDonationHandler(data.donationId)}>
                                                    Receive
                                        </DonateButton>
                                    }
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
        </RightSideContentWrapper>
    )
};

export default Donations;
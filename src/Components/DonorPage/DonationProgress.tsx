import React, { useEffect, useRef, useState } from 'react'
import { NoOrganisationContainer, RightSideContentWrapper, TableWrapper, ModalContent } from './DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import Table from 'react-bootstrap/Table';
import { NoOrganisationContainer as NoDonationContainer } from './DonorStyles';
import { deliverDonation, getUserDonations } from '../Shared_util/Constants/Functions';
import { useNavigate } from 'react-router-dom';
import { donationProps } from '../Shared_util/Constants/Types';
import { Modal, Spinner } from 'react-bootstrap';
import { AiFillEye } from 'react-icons/ai';
import LoginToast from '../Shared_util/Toast/LoginToast';
import { v4 } from 'uuid';
import { MdDeliveryDining } from 'react-icons/md';


const DonationProgress = () => {
    const [query, setQuery] = useState('')
    const [donations, setDonations] = useState<donationProps[]>([])
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [showLoading, setShowLoading] = useState(false);
    const [refresh, setRefresh] = useState<string>("")
    const [show, setShow] = useState(false)
    const [deliver, setDeliver] = useState(false)
    const [donationId, setDonationId] = useState("")
    const deliveryModeRef: any = useRef("");
    const specificRef: any = useRef("");
    const deliveryDetailsRef: any = useRef("");

   

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

    const deliverDonationHandler = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            let updatedField;
            if(deliveryModeRef.current.value === "others"){
                updatedField = {
                    deliveryMode : specificRef.current.value,
                    deliveryDetails : deliveryDetailsRef.current.value
                }
            }else{
                updatedField = {
                    deliveryMode : deliveryModeRef.current.value,
                    deliveryDetails : deliveryDetailsRef.current.value
                }
            }
    
            deliverDonation(donationId,setShowLoading,setToastMessage,setShowToast,accessToken, navigate, updatedField)
            setRefresh(v4())
            setDeliver(false)
        }catch(err){
            setShowLoading(false)
            console.log("An error occured")
        }
    }


    const displayItems = (donation : donationProps) => {
        setData(donation)
        setShow(true)
    }

    const displayDeliveryForms = (id : string) => {
        setDonationId(id)
        setDeliver(true)
    }

   
    const ViewDonationModal = () => {return (
        <Modal show={show} onHide={() => setShow(false)}>
                            <Modal.Body>
                                <ModalContent>
                                    <img src={data?.itemPhoto} alt="item" style={{width: '50%', objectFit: "cover"}}/>
                                    <div className='content' style={{display: 'flex', width:"42%", flexDirection: 'column', gap: '20px', height: "350px", overflowY: "scroll", padding: '5px'}}>
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
                                    </div>
                                </ModalContent>
                            </Modal.Body>
                        </Modal>
    )}
    
    
    const DeliverDonationModal = () => {return (
        <Modal show={deliver} onHide={() => setDeliver(false)}>
                            <Modal.Body>
                                <ModalContent>
                                    <form onSubmit={deliverDonationHandler}>
                                        <div>
                                            <label htmlFor='deliveryMode'>Mode of Delivery</label>
                                            <select id="delivery Mode" ref={deliveryModeRef} required>
                                                <option value="Ghana Post">Ghana Post</option>
                                                <option value="FedEx Ghana">FedEX Ghana</option>
                                                <option value="DHL Express Ghana">DHL Express Ghana</option>
                                                <option value="IAS Ghana Limited">IAS Ghana Limited</option>
                                                <option value="Street Express">Street Express</option>
                                                <option value="others">Others</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor='specify'>Others (specify)</label>
                                            <input type='text' id= "specify" placeholder='specify the delivery mode' ref={specificRef}/>
                                        </div>
                                        <div>
                                            <label htmlFor='details'>Provide delivery details</label>
                                            <textarea ref={deliveryDetailsRef} required id='details'></textarea>
                                        </div>
                                        <div>
                                            <button>{showLoading && <Spinner animation="border" size="sm" className="spinner" />}
                                                    Make Delivery
                                            </button>
                                        </div>
                                    </form>
                                </ModalContent>
                            </Modal.Body>
                        </Modal>
    )}


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
                                <th>Transaction Method</th>
                                <th>Contact</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>View</th>
                                <th>Deliver</th>
                            </tr>
                        </thead>
                        <tbody className='table-body'>
                            {
                                donations.filter(item=> item.location?.toLowerCase().includes(query.toLowerCase()) || 
                                                        item.donatedTo?.toLowerCase().includes(query.toLowerCase())).map((donation: donationProps) => {
                                    return (
                                        <tr key={donation.donationId}>
                                            {/* <td>{donation.donationType}</td> */}
                                            <td>
                                                {donation.donatedTo}
                                            </td>
                                            <td>{donation.deliveryMethod}</td>
                                            <td>{donation.organisationContact}</td>
                                            <td>{donation.location}</td>
                                            <td>
                                                {!donation.delivered && !donation.received && donation.donationStatus}
                                                {donation.delivered && !donation.received && "Delivered"}
                                                {donation.delivered && donation.received && "Received"}
                                            </td>
                                            <td onClick={()=> displayItems(donation)}>
                                                <AiFillEye size={15} color='green' /> 
                                            </td>
                                            <td>
                                            <button
                                                    disabled= {donation.received || donation.delivered || donation.donationStatus !== "Accepted"}
                                                    onClick={()=> displayDeliveryForms(donation.donationId)}
                                                    style={{border: "0px"}}>
                                                    <MdDeliveryDining size={20} color='green'/>
                                            </button> 
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    {donations.filter(item=> item.location?.toLowerCase().includes(query.toLowerCase()) || 
                                                item.donatedTo?.toLowerCase().includes(query.toLowerCase())).length === 0 &&
                                                     <NoOrganisationContainer>
                                                        No donation match your search
                                                    </NoOrganisationContainer>}
                    
                    {
                        !donations.length && <NoOrganisationContainer>You haven't made any donations yet</NoOrganisationContainer>
                    }
                    <ViewDonationModal />
                    <DeliverDonationModal />
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
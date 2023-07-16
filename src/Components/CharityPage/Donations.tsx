import React, { useEffect, useState } from 'react'
import { DonateButton, NoOrganisationContainer, RightSideContentWrapper, TableWrapper } from '../DonorPage/DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner'
import { acceptDonation, getOrganisationDonations } from '../Shared_util/Constants/Functions';
import { useNavigate } from 'react-router-dom';
import { donationProps} from '../Shared_util/Constants/Types';
import LoginToast from '../Shared_util/Toast/LoginToast';
import {AiFillEye} from "react-icons/ai"
import { Modal } from 'react-bootstrap';


const Donations = () => {
    const [query, setQuery] = useState('')
    const [donations, setDonations] = useState<donationProps[]>([])
    const [refresh, setRefresh] = useState<string>("")
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [showLoading, setShowLoading] = useState(false);

    const [show, setShow] = useState(false)
    const [itemPhoto, setItemPhoto] = useState('')

    const navigate = useNavigate()

    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)
    const userData = sessionStorage.getItem('userDetails')
    const userDetails = userData && JSON.parse(userData)

    const acceptDonationHandler = (id: string) => {
        acceptDonation(id,setShowLoading,setToastMessage,setShowToast,accessToken, navigate)
    }

    const displayItems = (photo : string) => {
        setItemPhoto(photo);
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
                                <th>Location</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>View</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='table-body'>
                            {
                                donations.map((donation: donationProps) => {
                                    return (
                                        <tr key={donation.donationId}>
                                            <td>{donation.donatedBy}</td>
                                            <td>{donation.contact}</td>
                                            <td>{donation.location}</td>
                                            <td>{donation.createdAt.slice(0,10)}</td>
                                            <td style={{width: '200px'}}>
                                                {donation.description}
                                            </td>
                                            <td>
                                                {donation.itemPhoto ?
                                                    <div onClick={()=> displayItems(donation.itemPhoto)}>
                                                       <AiFillEye size={15} color='green' /> 
                                                    </div> : "No image"}
                                            </td>
                                            <td>
                                                {donation.donationStatus === "Completed" ? "Completed" :
                                                 <DonateButton onClick={()=>acceptDonationHandler(donation.donationId)}>
                                                    Accept
                                                </DonateButton>}
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
                        <img src={itemPhoto} alt="item" style={{width: '100%'}}/>
                    </Modal.Body>
                </Modal>
        </RightSideContentWrapper>
    )
};

export default Donations;
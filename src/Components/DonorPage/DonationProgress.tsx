import React, { useEffect, useState } from 'react'
import {DeleteButton, EditButton, RightSideContentWrapper, TableWrapper, 
    UpdateDonationConfirmButton, UpdateDonationField, UpdateDonationInputLabel, 
    UpdateDonationTextWrapper } from './DonorStyles';
import { MdDelete, MdEdit} from 'react-icons/md';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import "../Shared_Styles/Modal/modal.css"
import { NoOrganisationContainer as NoDonationContainer } from './DonorStyles';
import { getUserDonations } from '../Shared_util/Constants/Functions';
import { useParams } from 'react-router-dom';


const DonationProgress = () => {
    const {username} = useParams()

    const [query, setQuery] = useState('')
    const [show, setShow] = useState(false)
    const [donations, setDonations] = useState<any>([])
    const [refresh, setRefresh] = useState<string>("")
    let dontFetch = true;

    const showUpdateModal = () => {
        setShow(true)
    }

    useEffect(()=>{
        const results = sessionStorage.getItem('userDonations')
        if(results !== null) {
            const availableOrganisations = JSON.parse(results);
            setDonations(availableOrganisations)
        }else{
            getUserDonations(setDonations, username)
        }
    }, [username])

    // fetches user donation on refresh
    useEffect(()=>{
        if (dontFetch) return
        console.log("this function is called")
        getUserDonations(setDonations, username)
    }, [username, refresh, dontFetch])

    return(
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh}/>

            {donations && 
            <TableWrapper>
                <Table responsive className='table' striped hover >
                    <thead className='table-heading'>
                        <tr>
                            <th>Type</th>
                            <th>Organisation</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {
                            donations.map((donation: any) => {
                                return (
                                    <tr>
                                        <td>{donation.donationType}</td>
                                        <td>
                                            {donation.donationType === "Specific" ? donation.donatedTo : "-"}
                                        </td>
                                        <td>{donation.updatedAt.slice(0,10)}</td>
                                        <td>{donation.location}</td>
                                        <td>{donation.donationStatus}</td>
                                        <td style={{'display' : 'flex', 'gap':'5px'}}>
                                            <EditButton onClick={showUpdateModal}>
                                                <MdEdit />
                                            </EditButton>
                                            <DeleteButton>
                                                <MdDelete />
                                            </DeleteButton>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

                {/* modal that pops up to edit donation */}
                <Modal show={show} onHide={()=>setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Donation</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                        <div>
                            <UpdateDonationInputLabel>Location</UpdateDonationInputLabel>
                            <UpdateDonationField type='text' placeholder='Location'/>
                        </div>
                        <div>
                            <UpdateDonationInputLabel>Images of items</UpdateDonationInputLabel>
                            <UpdateDonationField type='file' className='file-field'/>
                        </div>
                        <div>
                            <UpdateDonationInputLabel>Description of items</UpdateDonationInputLabel>
                            <UpdateDonationTextWrapper defaultValue={''}></UpdateDonationTextWrapper>
                        </div>
                        <UpdateDonationConfirmButton>Confirm</UpdateDonationConfirmButton>
                    </Modal.Body>
                </Modal>

        </TableWrapper>}
        {!donations && <NoDonationContainer>
                            <h4>No Donation found</h4>
                        </NoDonationContainer>}
        </RightSideContentWrapper>
    )
};

export default DonationProgress;
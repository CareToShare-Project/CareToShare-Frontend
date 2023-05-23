import React, { useState } from 'react'
import {DeleteButton, EditButton, RightSideContentWrapper, TableWrapper, 
    UpdateDonationConfirmButton, UpdateDonationField, UpdateDonationInputLabel, 
    UpdateDonationTextWrapper } from './DonorStyles';
import { MdDelete, MdEdit } from 'react-icons/md';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import "../Shared_Styles/Modal/modal.css"


const DonationProgress = () => {
    const [query, setQuery] = useState('')
    const [show, setShow] = useState(false)

    const showUpdateModal = () => {
        setShow(true)
    }

    return(
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery}/>
            <TableWrapper>
                <Table responsive className='table' striped hover >
                    <thead className='table-heading'>
                        <tr>
                            <th>Type</th>
                            <th>Donation Id</th>
                            <th>Organisation</th>
                            <th>Date</th>
                            <th>location</th>
                            <th>status</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Generic</td>
                            <td>jhkdl12335kjdf</td>
                            <td>-</td>
                            <td>22-05-23</td>
                            <td>Accra, Ghana</td>
                            <td>In progress</td>
                            <td style={{'display' : 'flex', 'gap':'5px'}}>
                                <EditButton onClick={showUpdateModal}>
                                    <MdEdit />
                                </EditButton>
                                <DeleteButton>
                                    <MdDelete />
                                </DeleteButton>
                            </td>
                        </tr>
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

        </TableWrapper>
        </RightSideContentWrapper>
    )
};

export default DonationProgress;
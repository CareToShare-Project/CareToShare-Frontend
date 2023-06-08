import React, { useEffect, useState } from 'react';
import { ApproveDonationContainer , ApproveButton} from './Admin.Styles';
import { Spinner, Table } from 'react-bootstrap';
import { TableWrapper } from '../DonorPage/DonorStyles';
import { getAllDonations, approveDonation } from '../Shared_util/Constants/Functions';
import SearchBar from "../Shared_util/SearchBar/SearchBar"
import LoginToast from '../Shared_util/Toast/LoginToast';


const ApproveDonation = () => {
    const [donations, setDonation] = useState<any>([])
    const [showLoading, setShowLoading] = useState(false)
    const [refresh, setRefresh] = useState("")
    const [query, setQuery] = useState("")
    // state to show or hide toast
    const [showToast, setShowToast] = useState(false)

    // state to set toast message 
    const [toastMessage, setToastMessage] = useState('')

    useEffect(()=> {
        getAllDonations(setDonation)
    }, [refresh])

    return (
          <ApproveDonationContainer>
                <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh}/>
                <TableWrapper>
                    <Table responsive className='table' striped hover >
                        <thead className='table-heading'>
                            <tr>
                                <th>Donated By</th>
                                <th>Donated To</th>
                                <th>Date</th>
                                <th>Location</th>
                                <th>View Items</th>
                                <th>Approve</th>
                            </tr>
                        </thead>
                        <tbody className='table-body'> 
                            {donations.map((donation: any) => {
                                return (
                                    <tr>
                                        <td>{donation.donatedBy}</td>
                                        <td>{donation.donatedTo}</td>
                                        <td>{donation.createdAt.slice(0,10)}</td>
                                        <td>{donation.location}</td>
                                        <td>
                                            <a href={donation.itemPhoto} target="_blank" rel="noreferrer">View</a>
                                        </td>
                                        <td>
                                            {donation.donationStatus === "Pending"  ? 
                                                    <ApproveButton 
                                                        onClick={()=> approveDonation("In Progress", 
                                                                                    donation.donationId, 
                                                                                    setShowLoading,
                                                                                    setToastMessage,
                                                                                    setShowToast)}>
                                                        Approve
                                                    </ApproveButton> : <span>Approved</span>
                                            }
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <LoginToast  
                            showToast={showToast} 
                            setShowToast={setShowToast} 
                            toastMessage={toastMessage}
                        />   
                </TableWrapper>
                {showLoading && <Spinner animation='border'  className='spinner'/>}
          </ApproveDonationContainer>
        );
}



export default ApproveDonation;
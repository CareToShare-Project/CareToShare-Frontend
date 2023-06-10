import React, {useState, useEffect} from 'react'
import { ApproveButton, ApproveDonationContainer } from './Admin.Styles';
import { TableWrapper } from '../DonorPage/DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import LoginToast from '../Shared_util/Toast/LoginToast';
import { Spinner, Table } from 'react-bootstrap';
import { getAllDonors, deactivateDonor, activateDonor } from '../Shared_util/Constants/Functions';



function DonorAccount () {
    const [donors, setDonors] = useState<any>([])
    const [showLoading, setShowLoading] = useState(false)
    const [refresh, setRefresh] = useState("")
    const [query, setQuery] = useState("")
    // state to show or hide toast
    const [showToast, setShowToast] = useState(false)

    // state to set toast message 
    const [toastMessage, setToastMessage] = useState('')

    useEffect(()=>{
        getAllDonors(setDonors)
    }, [])

    useEffect(()=>{
        getAllDonors(setDonors)
    }, [refresh])

    return (
        <ApproveDonationContainer>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh}/>
            <TableWrapper>
                <Table responsive className='table' striped hover bordered>
                    <thead className='table-heading'>
                        <tr>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Status</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'> 
                        {donors.map((donor: any) => {
                            return (
                                <tr key={donor.username}>
                                    <td>{donor.username}</td>
                                    <td>{donor.firstName}</td>
                                    <td>{donor.lastName}</td>
                                    <td>{donor.isActive ? "Active" : "InActive"}</td>
                                    <td className='email'>{donor.email}</td>
                                    <td>{donor.contact}</td>
                                    <td>{donor.location} </td>
                                    <td>
                                        { donor.isActive ?
                                            <ApproveButton onClick={()=> deactivateDonor(donor.username, setShowLoading, 
                                                                    setToastMessage, setShowToast)} >
                                                Deactivate
                                            </ApproveButton> : 
                                            <ApproveButton onClick={()=>activateDonor(donor.username, setShowLoading, 
                                                                                    setToastMessage, setShowToast)}>
                                                Activate
                                            </ApproveButton>
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

export default DonorAccount
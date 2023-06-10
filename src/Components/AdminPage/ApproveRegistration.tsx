import React, { useEffect, useState } from 'react';
import { ApproveDonationContainer , ApproveButton} from './Admin.Styles';
import { Spinner, Table } from 'react-bootstrap';
import { TableWrapper } from '../DonorPage/DonorStyles';
import { getAllOrganisations , approveOrganisationRegistration, 
         deactivateOrganisation,
         activateOrganisation} from '../Shared_util/Constants/Functions';
import SearchBar from "../Shared_util/SearchBar/SearchBar"
import LoginToast from '../Shared_util/Toast/LoginToast';


const ApproveRegistration = () => {
    const [organisations, setOrganisation] = useState<any>([])
    const [showLoading, setShowLoading] = useState(false)
    const [refresh, setRefresh] = useState("")
    const [query, setQuery] = useState("")
    // state to show or hide toast
    const [showToast, setShowToast] = useState(false)

    // state to set toast message 
    const [toastMessage, setToastMessage] = useState('')


    useEffect(()=> {
        getAllOrganisations(setOrganisation)
    }, [refresh])

    return (
          <ApproveDonationContainer>
                <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh}/>
                <TableWrapper>
                    <Table responsive className='table' striped hover >
                        <thead className='table-heading'>
                            <tr>
                                <th>Organisation Name</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Location</th>
                                <th>Mission</th>
                                <th>View Certificates</th>
                                <th>Approve</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='table-body'> 
                            {organisations.map((org: any) => {
                                return (
                                    <tr>
                                        <td>{org.organisationName}</td>
                                        <td>{org.isActive ? "Active" : "Inactive"}</td>
                                        <td>{org.createdAt.slice(0,10)}</td>
                                        <td>{org.location}</td>
                                        <td className='mission'>{org.mission}</td>
                                        <td>
                                            {org.businessCertificate ? 
                                            <a href={org.businessCertificate} target="_blank" rel="noreferrer">View</a> : 
                                            "none"}
                                        </td>
                            
                                        <td>
                                            {org.isApproved ? <span>Approved</span> :
                                                    <ApproveButton 
                                                        onClick={()=> approveOrganisationRegistration(
                                                                        org.username, setShowLoading, 
                                                                        setToastMessage, setShowToast)}
                                                    >
                                                        Approve
                                                    </ApproveButton> 
                                            }
                                        </td>
                                        <td>
                                        { org.isActive ?
                                            <ApproveButton onClick={()=> deactivateOrganisation(org.username, setShowLoading, 
                                                                    setToastMessage, setShowToast)} >
                                                Deactivate
                                            </ApproveButton> : 
                                            <ApproveButton onClick={()=>activateOrganisation(org.username, setShowLoading, 
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



export default ApproveRegistration;
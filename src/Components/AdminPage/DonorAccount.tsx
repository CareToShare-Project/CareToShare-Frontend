import React, { useState, useEffect } from 'react'
import { ApproveButton, ApproveDonationContainer} from './Admin.Styles';
import { NoOrganisationContainer, TableWrapper } from '../DonorPage/DonorStyles';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import LoginToast from '../Shared_util/Toast/LoginToast';
import { Spinner, Table } from 'react-bootstrap';
import { getAllDonors, deactivateDonor, activateDonor } from '../Shared_util/Constants/Functions';
import { DonorProps } from '../Shared_util/Constants/Types';
import { useNavigate } from 'react-router-dom';
import { v4 } from "uuid"



function DonorAccount() {
    const [donors, setDonors] = useState<DonorProps[]>([])
    const [showLoading, setShowLoading] = useState(false)
    const [refresh, setRefresh] = useState("")
    const [query, setQuery] = useState("")
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')

    const navigate = useNavigate()

    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)

    const activateAccountHandler = (username: string) => {
        activateDonor(username, setShowLoading,setToastMessage, setShowToast, accessToken,navigate);
        setRefresh(v4())
    }

    const deactivateAccountHandler = (username: string) => {
        deactivateDonor(username, setShowLoading,setToastMessage, setShowToast, accessToken,navigate);
        setRefresh(v4())
    }

    

    useEffect(() => {
        getAllDonors(setDonors, accessToken, navigate)
    }, [accessToken, navigate, refresh])



    return (
        <ApproveDonationContainer>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />
            <TableWrapper>
                <span>{donors.length} Donors</span>
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
                        {donors.filter(item=> item.username.toLowerCase().includes(query.toLowerCase()) || 
                                        item.email?.toLowerCase().includes(query.toLowerCase()) || item.firstName?.toLowerCase().includes(query.toLowerCase())
                                        || item.lastName?.toLowerCase().includes(query.toLowerCase()) || item.location?.toLowerCase().includes(query.toLowerCase())).map((donor: DonorProps) => {
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
                                        {donor.isActive ?
                                            <ApproveButton onClick={() => deactivateAccountHandler(donor.username)} >
                                                Deactivate
                                            </ApproveButton> :
                                            <ApproveButton onClick={() => activateAccountHandler(donor.username)}>
                                                Activate
                                            </ApproveButton>
                                        }

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                {donors
                    .filter(item=> item.username.toLowerCase().includes(query.toLowerCase()) || 
                                   item.email?.toLowerCase().includes(query.toLowerCase()) || 
                                   item.firstName?.toLowerCase().includes(query.toLowerCase())|| 
                                   item.lastName?.toLowerCase().includes(query.toLowerCase()) || 
                                   item.location?.toLowerCase().includes(query.toLowerCase()))
                    .length === 0 ? <NoOrganisationContainer>No Donor Found</NoOrganisationContainer> : ""
                }
                <LoginToast
                    showToast={showToast}
                    setShowToast={setShowToast}
                    toastMessage={toastMessage}
                />
            </TableWrapper>
            {showLoading && <Spinner animation='border' className='spinner' />}
        </ApproveDonationContainer>
    );

}

export default DonorAccount
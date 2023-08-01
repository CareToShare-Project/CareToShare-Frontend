import React, { useEffect, useState } from 'react';
import { ApproveDonationContainer, ApproveButton} from './Admin.Styles';
import { Spinner, Table } from 'react-bootstrap';
import { NoOrganisationContainer, TableWrapper } from '../DonorPage/DonorStyles';
import {
    getAllOrganisations,
    deactivateOrganisation,
    activateOrganisation
} from '../Shared_util/Constants/Functions';
import SearchBar from "../Shared_util/SearchBar/SearchBar"
import LoginToast from '../Shared_util/Toast/LoginToast';
import { OrganisationProps } from '../Shared_util/Constants/Types';
import { useNavigate } from 'react-router-dom';
import { v4 } from "uuid"


const ApproveRegistration = () => {
    const [organisations, setOrganisation] = useState<OrganisationProps[]>([])
    const [showLoading, setShowLoading] = useState(false)
    const [refresh, setRefresh] = useState("")
    const [query, setQuery] = useState("")
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')

    const navigate = useNavigate()

    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)


    const activateAccountHandler = (username: string) => {
        activateOrganisation(username, setShowLoading,setToastMessage, setShowToast, accessToken,navigate);
        setRefresh(v4())
    }

    const deactivateAccountHandler = (username: string) => {
        deactivateOrganisation(username, setShowLoading,setToastMessage, setShowToast, accessToken,navigate);
        setRefresh(v4())
    }




    useEffect(() => {
        getAllOrganisations(setOrganisation, accessToken, navigate)
    }, [refresh, accessToken, navigate])

    return (
        <ApproveDonationContainer>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />
            <TableWrapper>
            <span>{organisations.length} Organisations</span>
                <Table responsive className='table' striped hover bordered >
                    <thead className='table-heading'>
                        <tr>
                            <th>Organisation Name</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th style={{width: "100px"}}>
                                Certificate
                            </th>
                            {/* <th>Approve</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {organisations.filter(item => item.mission.toLowerCase().includes(query.toLowerCase()) || 
                         item.location.toLowerCase().includes(query.toLowerCase()) || item.organisationName.toLowerCase().includes(query.toLowerCase())).map((org: OrganisationProps) => {
                            return (
                                <tr key={org._id}>
                                    <td>{org.organisationName}</td>
                                    <td>{org.isActive ? "Active" : "Inactive"}</td>
                                    <td>{org.createdAt.slice(0, 10)}</td>
                                    <td>{org.location}</td>
                                    <td>
                                        {org.businessCertificate !== "no cert" ?
                                            <a 
                                                href={org.businessCertificate} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                style={{textDecoration: 'none'}}>
                                                View
                                            </a> :
                                            "none"}
                                    </td>

                                    <td>
                                        {org.isActive ?
                                            <ApproveButton onClick={() => deactivateAccountHandler(org.username)} >
                                                Deactivate
                                            </ApproveButton> :
                                            <ApproveButton onClick={() => activateAccountHandler(org.username)}>
                                                Activate
                                            </ApproveButton>
                                        }
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                {
                    organisations
                            .filter(item => item.mission.toLowerCase().includes(query.toLowerCase()) || 
                                            item.location.toLowerCase().includes(query.toLowerCase()) || 
                                            item.organisationName.toLowerCase().includes(query.toLowerCase()))
                    .length === 0 ? <NoOrganisationContainer>No Organisation Found</NoOrganisationContainer> : ""
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



export default ApproveRegistration;
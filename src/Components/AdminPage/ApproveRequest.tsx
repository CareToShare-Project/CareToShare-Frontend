import React, { useEffect, useState } from 'react';
import { ApproveDonationContainer} from './Admin.Styles';
import { Modal, Table } from 'react-bootstrap';
import { NoOrganisationContainer, TableWrapper } from '../DonorPage/DonorStyles';
import { calculateDaysLeft, fetchRequests} from '../Shared_util/Constants/Functions';
import SearchBar from "../Shared_util/SearchBar/SearchBar"
import { requestProps } from '../Shared_util/Constants/Types';
import { useNavigate } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';


const ApproveRequest = () => {
    const [requests, setRequests] = useState<requestProps[]>([])
    const [refresh, setRefresh] = useState("")
    const [query, setQuery] = useState("")
    const [show, setShow] = useState(false)
    const [campaignData, setCampaignData] = useState<requestProps>()
    

    const navigate = useNavigate()

    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)
    

    const displayCampaign = (data : requestProps) => {
        setCampaignData(data)
        setShow(true)
    }

    useEffect(() => {
        fetchRequests(setRequests, accessToken, navigate)
    }, [refresh, accessToken, navigate])

    return (
        <ApproveDonationContainer>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />
            <TableWrapper>
                <span>{requests.length} Requests</span>
                <Table responsive className='table' striped hover bordered >
                    <thead className='table-heading'>
                        <tr>
                            <th>Campaign ID</th>
                            <th>Organisation</th>
                            <th>Campaign</th>
                            <th>Date</th>
                            <th>Days Left</th>
                            <th>Target</th>
                            <th>Status</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {requests.filter(item => item.campaignTitle?.toLowerCase().includes(query.toLowerCase()) || 
                                                 item.description?.toLowerCase().includes(query.toLowerCase()) ||
                                                 item.organisationName?.toLowerCase().includes(query.toLowerCase())).map((req: requestProps) => {
                                return (
                                    <tr key={req.campaignId}>
                                        <th>{req.campaignId.slice(-8)}</th>
                                        <td>{req.organisationName}</td>
                                        <td>{req.campaignTitle}</td>
                                        <td>{req.createdAt.slice(0, 10)}</td>
                                        <td>{calculateDaysLeft(req.startDate, req.endDate)}</td>
                                        <td>{req.target}</td>
                                        <td>
                                            {calculateDaysLeft(req.startDate,req.endDate) === "Not Started"? "Pending" : req.requestStatus}
                                        </td>
                                        <th onClick={()=> displayCampaign(req)}>
                                            <AiFillEye size={15} color="green"/>
                                        </th>
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    className='modal-container'
                    style={{ width: '100%', height: 'max-content' }}>
                    <Modal.Body style={{
                        display: 'flex', width: '100%',
                        flexDirection: 'column', padding: '20px', gap: '30px', height: "500px", overflowY : "scroll"
                    }}>
                        <div style={{display: "flex", flexDirection: 'column', gap: '10px'}}>
                            <div>
                                <header style={{fontFamily: "Poppins", fontSize: "17px", textAlign: "center", fontWeight: "700"}}>
                                    {campaignData?.campaignTitle}
                                </header>
                            </div>
                            <div>
                                {campaignData?.description}
                            </div>
                            <div>
                                <img src={campaignData?.campaignImage} 
                                    alt='campaign' 
                                    style={{width: "100%", objectFit: "cover", borderRadius: "10px"}}/>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                {
                requests
                        .filter(item => item.description?.toLowerCase().includes(query.toLowerCase()) ||
                                        item.organisationName?.toLowerCase().includes(query.toLowerCase()) || 
                                        item.campaignTitle?.toLowerCase().includes(query.toLowerCase()))
                        .length === 0 ? <NoOrganisationContainer>No Request Found</NoOrganisationContainer> : ""
                }
            </TableWrapper>
            
        </ApproveDonationContainer>
    );
}



export default ApproveRequest;
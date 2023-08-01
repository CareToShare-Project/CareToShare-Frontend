import React, { useEffect, useState } from "react";
import { ApproveDonationContainer} from "./Admin.Styles";
import { Modal,Table } from "react-bootstrap";
import { NoOrganisationContainer, TableWrapper } from "../DonorPage/DonorStyles";
import {
    getAllDonations,
} from "../Shared_util/Constants/Functions";
import SearchBar from "../Shared_util/SearchBar/SearchBar";
import { donationProps } from "../Shared_util/Constants/Types";
// import { status } from "../Shared_util/Constants/Status";
import {AiFillEye} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

const ApproveDonation = () => {
    const [donations, setDonation] = useState<donationProps[]>([]);
    const [refresh, setRefresh] = useState("");
    const [show, setShow] = useState(false)
    const [data, setData] = useState<donationProps>()
    const [query, setQuery] = useState("");



    const navigate = useNavigate();

    const tokenData = sessionStorage.getItem("accesstoken");
    const accessToken = tokenData && JSON.parse(tokenData);

    const displayItems = (donation : donationProps) => {
        setData(donation)
        setShow(true)
    }

    useEffect(() => {
        getAllDonations(setDonation, accessToken, navigate);
    }, [refresh, accessToken, navigate]);

    return (
        <ApproveDonationContainer>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />
            <TableWrapper>
                <span>{donations.length} Donations</span>
                <Table responsive className="table" striped hover bordered>
                    <thead className="table-heading">
                        <tr>
                            <th>Donated By</th>
                            <th>Donated To</th>
                            <th>Date</th>
                            <th>Transaction method</th>
                            <th>Description</th>
                            <th>Location</th>
                            <th>View Items</th>
                            {/* <th>Approve</th> */}
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {donations.filter(item=> item.donatedBy.toLowerCase().includes(query.toLowerCase()) || 
                            item.location?.toLowerCase().includes(query.toLowerCase()) || item.donatedTo?.toLowerCase().includes(query.toLowerCase())).map((donation: donationProps) => {
                            return (
                                <tr key={donation.donationId}>
                                    <td>{donation.donatedBy}</td>
                                    <td>{donation.donatedTo}</td>
                                    <td>{donation.createdAt.slice(0, 10)}</td>
                                    <td>{donation.deliveryMethod}</td>
                                    <td>{donation.description}</td>
                                    <td>{donation.location}</td>
                                    <td onClick={()=>displayItems(donation)}>
                                        <AiFillEye size={15} color="green"/>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                {donations
                        .filter(item=> item.donatedBy.toLowerCase().includes(query.toLowerCase()) || 
                                         item.location?.toLowerCase().includes(query.toLowerCase()) || 
                                         item.donatedTo?.toLowerCase().includes(query.toLowerCase()))
                        .length === 0 ? <NoOrganisationContainer>No Donation Found</NoOrganisationContainer> : ""
                }
                
            </TableWrapper>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Body>
                    <div style={{width: '500px', height: '300px', display: 'flex' , gap: '20px'}}>
                        <img src={data?.itemPhoto} alt="item" style={{width: '50%', objectFit: "cover"}}/>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                           <div>
                                <span style={{fontFamily: "Poppins", fontWeight: "700", color: '#56C0C8'}}>
                                    Donated By
                                </span>
                                <div style={{lineHeight: '16px', fontWeight: "450"}}>
                                    {data?.donatedBy}
                                </div>
                            </div>
                            <div>
                                <span style={{fontFamily: "Poppins", fontWeight: "700", color: '#56C0C8'}}>
                                    Donated To
                                </span>
                                <div style={{lineHeight: '13px', fontWeight: "450"}}>
                                    {data?.donatedTo}
                                </div>
                            </div>
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
                                    Location
                                </span>
                                <div style={{lineHeight: '13px', fontWeight: "450"}}>
                                    {data?.location}
                                </div>
                            </div>
                            <div>
                                <span style={{fontFamily: "Poppins", fontWeight: "700", color: '#56C0C8'}}>
                                    Status
                                </span>
                                <div style={{lineHeight: '13px', fontWeight: "450"}}>
                                    {!data?.delivered && !data?.received && data?.donationStatus}
                                    {data?.delivered && !data?.received && "Delivered"}
                                    {data?.delivered && data?.received && "Received"}
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </ApproveDonationContainer>
    );
};

export default ApproveDonation;

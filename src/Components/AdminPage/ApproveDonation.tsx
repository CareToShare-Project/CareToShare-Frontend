import React, { useEffect, useState } from "react";
import { ApproveDonationContainer, ApproveButton} from "./Admin.Styles";
import { Spinner, Table } from "react-bootstrap";
import { TableWrapper } from "../DonorPage/DonorStyles";
import {
    getAllDonations,
    approveDonation,
} from "../Shared_util/Constants/Functions";
import SearchBar from "../Shared_util/SearchBar/SearchBar";
import LoginToast from "../Shared_util/Toast/LoginToast";
import { donationProps } from "../Shared_util/Constants/Types";
import { status } from "../Shared_util/Constants/Status";
import { useNavigate } from "react-router-dom";

const ApproveDonation = () => {
    const [donations, setDonation] = useState<donationProps[]>([]);
    const [showLoading, setShowLoading] = useState(false);
    const [refresh, setRefresh] = useState("");
    const [query, setQuery] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const navigate = useNavigate();

    const tokenData = sessionStorage.getItem("accesstoken");
    const accessToken = tokenData && JSON.parse(tokenData);

    useEffect(() => {
        getAllDonations(setDonation, accessToken, navigate);
    }, [refresh, accessToken, navigate]);

    return (
        <ApproveDonationContainer>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />
            <TableWrapper>
                <Table responsive className="table" striped hover bordered>
                    <thead className="table-heading">
                        <tr>
                            <th>Donated By</th>
                            <th>Donated To</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>View Items</th>
                            <th>Approve</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {donations.map((donation: donationProps) => {
                            return (
                                <tr key={donation.donationId}>
                                    <td>{donation.donatedBy}</td>
                                    <td>{donation.donatedTo}</td>
                                    <td>{donation.createdAt.slice(0, 10)}</td>
                                    <td>{donation.location}</td>
                                    <td>
                                        <a
                                            href={donation.itemPhoto}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View
                                        </a>
                                    </td>
                                    <td>
                                        {donation.donationStatus === status.pending ? (
                                            <ApproveButton
                                                onClick={() =>
                                                    approveDonation(
                                                        donation.donationId,
                                                        setShowLoading,
                                                        setToastMessage,
                                                        setShowToast,
                                                        accessToken,
                                                        navigate
                                                    )
                                                }
                                            >
                                                Approve
                                            </ApproveButton>
                                        ) : (
                                            <span>Approved</span>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <LoginToast
                    showToast={showToast}
                    setShowToast={setShowToast}
                    toastMessage={toastMessage}
                />
            </TableWrapper>
            {showLoading && <Spinner animation="border" className="spinner" style={{color: 'black'}}/>}
        </ApproveDonationContainer>
    );
};

export default ApproveDonation;

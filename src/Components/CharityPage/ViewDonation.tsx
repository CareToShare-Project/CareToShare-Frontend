import React, { useEffect, useState } from 'react';
import { RightSideContentWrapper, ViewFoundationContainer } from '../DonorPage/DonorStyles';
import DonationCard from './DonationCard';
import SearchBar from '../Shared_util/SearchBar/SearchBar';
import { donationProps } from '../Shared_util/Constants/Types';
import { getAllDonations } from '../Shared_util/Constants/Functions';
import { useNavigate } from 'react-router-dom';
import { NoOrganisationContainer as NoDonationContainer } from '../DonorPage/DonorStyles';
import LoginToast from '../Shared_util/Toast/LoginToast';
import { Spinner } from 'react-bootstrap';


const ViewDonation = () => {
    const [refresh, setRefresh] = useState("")
    const [query, setQuery] = useState("")
    const [donations, setDonations] = useState<donationProps[]>([])
    const [showLoading, setShowLoading] = useState(false)
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");


    const tokenData = sessionStorage.getItem("accesstoken");
    const accessToken = tokenData && JSON.parse(tokenData);


    const navigate = useNavigate()

    useEffect(() => {
        getAllDonations(setDonations, accessToken, navigate)
    }, [accessToken, refresh, navigate])

    return (
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />
        </RightSideContentWrapper>
    )
}



export default ViewDonation;
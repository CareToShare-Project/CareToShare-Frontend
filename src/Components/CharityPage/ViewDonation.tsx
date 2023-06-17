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
import { BASE_URL } from '../Shared_util/Constants/Base_URL';

const ViewDonation = () => {
    const [refresh, setRefresh] = useState("")
    const [query, setQuery] = useState("")
    const [donations, setDonations ] = useState<donationProps[]>([])

    const [showLoading, setShowLoading] = useState(false);
    // state to show or hide toast
    const [showToast, setShowToast] = useState(false);

    // state to set toast message
    const [toastMessage, setToastMessage] = useState("");


    const tokenData = sessionStorage.getItem("accesstoken");
    const accessToken = tokenData && JSON.parse(tokenData);

    const generalDonations = donations?.filter(item=> item.donationType === "Generic" && item.donationStatus ==="In Progress");

    const navigate = useNavigate()

    useEffect(()=>{
        getAllDonations(setDonations, accessToken, navigate)
    }, [accessToken, refresh, navigate])

    return (
        <RightSideContentWrapper>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />
            
            {generalDonations && 
                <div className='general'>
                <ViewFoundationContainer>
                     {generalDonations.map(item=>{
                        return(
                            <DonationCard 
                                details={item} 
                                key={item.donationId}
                                setShowLoading={setShowLoading}
                                setShowToast={setShowToast}
                                setToastMessage={setToastMessage}
                               />
                        )
                        })}
                </ViewFoundationContainer>
            </div>
            }
            {
                !generalDonations.length && <NoDonationContainer>
                                                No available donation
                                            </NoDonationContainer>
            }
            <LoginToast
                    showToast={showToast}
                    setShowToast={setShowToast}
                    toastMessage={toastMessage}
                />
            {showLoading && <Spinner animation="border" className="spinner" style={{color: 'black'}}/>}
            
        </RightSideContentWrapper>
    )
}



export default ViewDonation;
import React, { useEffect, useState } from 'react';
import { Box, BoxWrapper, DonationChartWrapper, Left, OverViewWrapper, Right, SummaryWrapper } from './Admin.Styles';
import { FaUsers, FaHandsHelping } from 'react-icons/fa'
import { BiDonateHeart } from "react-icons/bi"
import DonationChart from './DonationChart';
import DonationRequestChart from './DonationRequestChart';
import RequestChart from './RequestChart';
import { getAllDonations, fetchRequests, getAllOrganisations, getAllDonors } from '../Shared_util/Constants/Functions';
import { DonorProps, OrganisationProps, donationProps, requestProps } from '../Shared_util/Constants/Types';
import { useNavigate } from 'react-router-dom';



const Overview = () => {
    const [donations, setDonations] = useState<donationProps[]>([])
    const [requests, setRequests] = useState<requestProps[]>([])
    const [organisations, setOrganisations] = useState<OrganisationProps[]>([])
    const [donors, setDonors] = useState<DonorProps[]>([])
    
    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)

    const navigate = useNavigate()

    useEffect(() => {
        getAllDonations(setDonations, accessToken, navigate)
        fetchRequests(setRequests, accessToken, navigate)
        getAllOrganisations(setOrganisations, accessToken, navigate)
        getAllDonors(setDonors, accessToken, navigate)
    }, [accessToken, navigate])

    return (
        <OverViewWrapper>
            <SummaryWrapper>
                <h4>Summarized Statistics</h4>
                <BoxWrapper>
                    <Box>
                        <Left>
                            <h4>{donors.length ? donors.length : 0}</h4>
                            <span>Donors</span>
                        </Left>
                        <Right>
                            <FaUsers className='icon' />
                        </Right>
                    </Box>
                    <Box>
                        <Left>
                            <h4>{organisations.length ? organisations.length : 0}</h4>
                            <span>Organisations</span>
                        </Left>
                        <Right>
                            <FaUsers className='icon' />
                        </Right>
                    </Box>
                    <Box>
                        <Left>
                            <h4>{donations.length ? donations.length : 0}</h4>
                            <span>Donations</span>
                        </Left>
                        <Right>
                            <BiDonateHeart className='icon' />
                        </Right>
                    </Box>
                    <Box>
                        <Left>
                            <h4>{requests.length ? requests.length : 0}</h4>
                            <span>Request</span>
                        </Left>
                        <Right>
                            <FaHandsHelping className='icon' />
                        </Right>
                    </Box>
                </BoxWrapper>
            </SummaryWrapper>
            <DonationChartWrapper>
                <h4>Donation Progress Tracker</h4>
                <DonationChart donations={donations} />
            </DonationChartWrapper>
            <DonationChartWrapper>
                <h4>Request Progress Tracker</h4>
                <RequestChart requests={requests} />
            </DonationChartWrapper>
            <DonationChartWrapper>
                <h4>Donations vs Request Distributions</h4>
                <DonationRequestChart donations={donations} requests={requests} />
            </DonationChartWrapper>

        </OverViewWrapper>
    )


}



export default Overview;
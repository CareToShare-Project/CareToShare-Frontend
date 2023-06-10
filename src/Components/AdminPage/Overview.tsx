import React, { useEffect, useState } from 'react';
import { Box, BoxWrapper, DonationChartWrapper, Left, OverViewWrapper, Right, SummaryWrapper } from './Admin.Styles';
import {FaUsers, FaHandsHelping} from 'react-icons/fa'
import {BiDonateHeart} from "react-icons/bi"
import DonationChart from './DonationChart';
import DonationRequestChart from './DonationRequestChart';
import RequestChart from './RequestChart';
import { getAllDonations, fetchRequests, getAllOrganisations, getAllDonors} from '../Shared_util/Constants/Functions';



const Overview = () => {
    const [donations, setDonations] = useState<any>([])
    const [requests, setRequests] = useState<any>([])
    const [organisations, setOrganisations] = useState<any>([])
    const [donors, setDonors] = useState<any>([])

    useEffect(()=>{
        getAllDonations(setDonations)
        fetchRequests(setRequests)
        getAllOrganisations(setOrganisations)
        getAllDonors(setDonors)
    }, [])
    
    return(
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
                            <FaUsers className='icon'/>
                        </Right>
                    </Box>
                    <Box>
                        <Left>
                            <h4>{organisations.length ? organisations.length : 0}</h4>
                            <span>Organisations</span>
                        </Left>
                        <Right>
                            <FaUsers className='icon'/>
                        </Right>
                    </Box>
                    <Box>
                        <Left>
                            <h4>{donations.length ? donations.length : 0}</h4>
                            <span>Donations</span>
                        </Left>
                        <Right>
                            <BiDonateHeart className='icon'/>
                        </Right>
                    </Box>
                    <Box>
                        <Left>
                            <h4>{requests.length ? requests.length : 0}</h4>
                            <span>Request</span>
                        </Left>
                        <Right>
                            <FaHandsHelping className='icon'/>
                        </Right>
                    </Box>
                </BoxWrapper>
            </SummaryWrapper>
            <DonationChartWrapper>
                <h4>Donation Progress Tracker</h4>
                <DonationChart />
            </DonationChartWrapper>
            <DonationChartWrapper>
                <h4>Request Progress Tracker</h4>
                <RequestChart />
            </DonationChartWrapper>
            <DonationChartWrapper>
                <h4>Donations vs Request Distributions</h4>
                <DonationRequestChart />
            </DonationChartWrapper>
            
        </OverViewWrapper>
    )

    
}



export default Overview;
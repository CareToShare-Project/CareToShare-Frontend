import React from 'react';
import { Box, BoxWrapper, DonationChartWrapper, Left, OverViewWrapper, Right, SummaryWrapper } from './Admin.Styles';
import {FaUsers, FaHandsHelping} from 'react-icons/fa'
import {BiDonateHeart} from "react-icons/bi"
import DonationChart from './DonationChart';
import DonationRequestChart from './DonationRequestChart';
import RequestChart from './RequestChart';



const Overview = () => {

    return(
        <OverViewWrapper>
            <SummaryWrapper>
                <h4>Summarized Statistics</h4>
                <BoxWrapper>
                    <Box>
                        <Left>
                            <h4>25</h4>
                            <span>Donors</span>
                        </Left>
                        <Right>
                            <FaUsers className='icon'/>
                        </Right>
                    </Box>
                    <Box>
                        <Left>
                            <h4>200</h4>
                            <span>Organisations</span>
                        </Left>
                        <Right>
                            <FaUsers className='icon'/>
                        </Right>
                    </Box>
                    <Box>
                        <Left>
                            <h4>15</h4>
                            <span>Donations</span>
                        </Left>
                        <Right>
                            <BiDonateHeart className='icon'/>
                        </Right>
                    </Box>
                    <Box>
                        <Left>
                            <h4>10</h4>
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
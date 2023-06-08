import React from 'react';
import { Box, BoxWrapper, Left, OverViewWrapper, Right } from './Admin.Styles';
import {FaUsers, FaHandsHelping} from 'react-icons/fa'
import {BiDonateHeart} from "react-icons/bi"



const Overview = () => {
    return(
        <OverViewWrapper>
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
        </OverViewWrapper>
    )

    
}



export default Overview;
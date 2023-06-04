import React from 'react';
import { AppTitleWrapper, CircularContainer, FooterWrapper, GetStartedButton, ItemWrapper, ReadMoreWrapper, RightSectionContainer} from './HomePageStyles';
import {useNavigate} from 'react-router-dom';
import {MdStart , MdMoreHoriz, MdVerifiedUser, MdOutlineDeliveryDining} from "react-icons/md"
import {BiDonateHeart} from "react-icons/bi"




function RightSection() {

    const navigate = useNavigate();
    
    
    

    return (
        <RightSectionContainer>
            <AppTitleWrapper>
                <span>CareToShare</span>
                <span className='about'>
                    A crowdsourcing donation solution for charity foundations
                </span>
            </AppTitleWrapper>
            <CircularContainer>
                <ItemWrapper className='item-1'>
                    <MdOutlineDeliveryDining size={25}/>
                    Secure delivery
                </ItemWrapper>
                <ItemWrapper className='item-2'>
                    <BiDonateHeart  size={25}/>
                    Easy and Fast Donation
                </ItemWrapper>
                <ItemWrapper className='item-3'>
                    <MdVerifiedUser size={25}/>
                    Verified organisations
                </ItemWrapper>
                <ItemWrapper className='item-4'>
                    <MdMoreHoriz />
                    And many more
                </ItemWrapper>
            </CircularContainer>
            <FooterWrapper>
                <GetStartedButton onClick={()=>navigate('login')}> 
                    Get Started {<MdStart size={22} />} 
                </GetStartedButton>
                <ReadMoreWrapper>
                    <span>Want to know more about us?</span>
                    <span className='link'>Click here</span>
                </ReadMoreWrapper>
            </FooterWrapper>
            
        </RightSectionContainer>
    )
}

export default RightSection;
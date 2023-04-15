import React from 'react'
import { RightSectionContainer, UserContainer, UserOptionsWrapper} from '../../StyledComponents/HomePageStyles'
import {FaUserTie, FaHandHoldingHeart, FaHandshake} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'


function RightSection() {

    const navigate = useNavigate();
    
    const navigateTo = (path: string) => {
        navigate(`/${path}`)
    }

    return (
        <RightSectionContainer>
            <h3>Welcome to CareToShare Donation Platform</h3>
            <UserOptionsWrapper>
                <UserContainer onClick={()=>navigateTo('admin')} >
                    <FaUserTie size={40} className='user-icon'/>
                    <span>Administrator</span>
                </UserContainer>
                <UserContainer onClick={()=>navigateTo('donor')}>
                    <FaHandHoldingHeart size={40} className='user-icon' />
                    <span>Donor</span>
                </UserContainer>
                <UserContainer onClick={()=>navigateTo('charity')}>
                    <FaHandshake size={40} className='user-icon'/>
                    <span>Charity Foundation</span>
                </UserContainer>
            </UserOptionsWrapper>
        </RightSectionContainer>
    )
}

export default RightSection;
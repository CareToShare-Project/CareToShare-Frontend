import React from 'react';
import { RightSectionContainer, UserContainer, UserOptionsWrapper} from '../../StyledComponents/HomePageStyles';
import {FaUserTie, FaHandHoldingHeart, FaHandshake} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import Loading from '../Shared_util/Loading/Loading';



function RightSection() {

    const navigate = useNavigate();
    const [showLoading, setLoading] = React.useState(false);
    
    const navigateTo = (path: string) => {
        
        setTimeout(()=>{
            navigate(`/${path}`);
        }, 2500)
        
        setLoading(true)

        
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
            {showLoading && <Loading />}
        </RightSectionContainer>
    )
}

export default RightSection;
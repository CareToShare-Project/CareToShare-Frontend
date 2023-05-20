import React from 'react';
import { CardContainer, DetailsWrapper, ImageWrapper} from './DonorStyles';
import image1 from '../HomePage/images/image1.jpg'
import {MdLocationOn, MdEmail, MdCall, MdVerified } from 'react-icons/md'
import {GiOnTarget } from "react-icons/gi"
import { organisationCardProp } from '../Shared_util/Constants/Types';



const CharityCard: React.FC<organisationCardProp> = ({details}) => {

    const {organisationName, location , email, contact, mission, isVerified} = details

    return (
        <CardContainer>
            <ImageWrapper src={image1} alt='profile'/>
            <DetailsWrapper>
                <span className='organizationName'>
                    <span>{organisationName}</span> 
                    <span className='verified'>{isVerified ? <MdVerified /> : ''}</span>
                </span>
                <span className='sub-details'>
                    <MdLocationOn color='#3A1078' className='icon' /> 
                     {location}
                </span>
                <span className='sub-details'>
                    <MdEmail color='#3A1078' className='icon'/> 
                    {email}
                </span>
                <span className='sub-details'>
                    <MdCall color='#3A1078' className='icon'/> 
                    {contact}
                </span>
                <span className='sub-details'>
                    <GiOnTarget color='#3A1078' className='icon'/>
                    {mission}
                </span>
            </DetailsWrapper>
        </CardContainer>
            
    );
}




export default CharityCard;
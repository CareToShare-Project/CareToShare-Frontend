import React from 'react';
import { CardContainer, DetailsWrapper, ImageWrapper} from './DonorStyles';
import image1 from '../HomePage/images/image1.jpg'
import {MdLocationOn, MdEmail, MdCall} from 'react-icons/md'
import {GiOnTarget} from "react-icons/gi"



const CharityCard = () => {
    return (
        <CardContainer>
            <ImageWrapper src={image1} alt='profile'/>
            <DetailsWrapper>
                <span className='organizationName'>
                    Ghana Aid Foundation
                </span>
                <span className='sub-details'>
                    <MdLocationOn color='#3A1078' className='icon' /> 
                     Accra, Ghana
                </span>
                <span className='sub-details'>
                    <MdEmail color='#3A1078' className='icon'/> 
                    yeboahandy408@gmail.com
                </span>
                <span className='sub-details'>
                    <MdCall color='#3A1078' className='icon'/> 
                    +233247668944
                </span>
                <span className='sub-details'>
                    <GiOnTarget color='#3A1078' className='icon'/>
                    Promoting girl child education
                </span>
            </DetailsWrapper>
        </CardContainer>
            
    );
}




export default CharityCard;
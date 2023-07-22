import React, { useState } from 'react';
import { CardContainer, ConfirmButton, DetailsWrapper, ImageWrapper } from './DonorStyles';
import image1 from '../HomePage/images/image1.jpg'
import { MdLocationOn, MdEmail, MdCall, MdVerified } from 'react-icons/md'
import { organisationCardProp } from '../Shared_util/Constants/Types';



const CharityCard: React.FC<organisationCardProp> = ({ details, setShow, setDetails }) => {
    const [showFullName, setShowFullName] = useState(false)
    const { organisationName, location, email, contact, isVerified, photo} = details

    const handleModal = () => {
        setShow(true)
        setDetails(details)
    }

    return (
        <CardContainer>
            {photo ? <ImageWrapper src={photo} alt='profile' /> : <ImageWrapper src={image1} alt='profile' />}
            <DetailsWrapper>
                <span className='organizationName' onClick={()=>setShowFullName(prev=> !prev)}>
                    <span>{organisationName.length <= 24 || showFullName? organisationName : `${organisationName.slice(0,19)}...`} 
                            {isVerified ? <MdVerified color='green' size={21}/> : ''}
                    </span>
                </span>
                <span className='sub-details'>
                    <MdLocationOn color='#56C0C8' className='icon' />
                    {location}
                </span>
                <span className='sub-details'>
                    <MdEmail color='#56C0C8' className='icon' />
                    {email.slice(0,20)}
                </span>
                <span className='sub-details'>
                    <MdCall color='#56C0C8' className='icon' />
                    {contact}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ConfirmButton onClick={handleModal} style={{
                        width: '50%', padding: '0px', marginTop: "10px",
                        fontSize: '14px', borderRadius: "8px"
                    }}>
                        View Profile
                    </ConfirmButton>
                </span>
            </DetailsWrapper>
        </CardContainer>

    );
}




export default CharityCard;
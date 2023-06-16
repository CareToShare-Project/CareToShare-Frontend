import React from 'react';
import { CardContainer, ConfirmButton, DetailsWrapper, ImageWrapper } from './DonorStyles';
import image1 from '../HomePage/images/image1.jpg'
import { MdLocationOn, MdEmail, MdCall, MdVerified } from 'react-icons/md'
import { organisationCardProp } from '../Shared_util/Constants/Types';



const CharityCard: React.FC<organisationCardProp> = ({ details, setShow, setDetails }) => {

    const { organisationName, location, email, contact, isVerified } = details

    const handleModal = () => {
        setShow(true)
        setDetails(details)
    }

    return (
        <CardContainer>
            <ImageWrapper src={image1} alt='profile' />
            <DetailsWrapper>
                <span className='organizationName'>
                    <span>{organisationName}</span>
                    <span className='verified'>{isVerified ? <MdVerified /> : ''}</span>
                </span>
                <span className='sub-details'>
                    <MdLocationOn color='#56C0C8' className='icon' />
                    {location}
                </span>
                <span className='sub-details'>
                    <MdEmail color='#56C0C8' className='icon' />
                    {email}
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
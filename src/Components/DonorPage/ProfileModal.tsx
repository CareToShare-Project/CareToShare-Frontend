import React from 'react';
import { ProfileModalProps } from '../Shared_util/Constants/Types';
import { Modal } from 'react-bootstrap';
import '../Shared_Styles/General/Styles.css'
import { DetailsWrapper, ReviewWrapper } from './DonorStyles';
import { MdCall, MdLocationOn, MdVerified } from 'react-icons/md';
import img from "../HomePage/images/image2.jpg"


const ProfileModal: React.FC<ProfileModalProps> = ({ show, setShow, details }) => {


    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            className='modal-container'
            style={{ width: '100%', height: 'max-content' }}>
            <Modal.Body style={{
                display: 'flex', width: '100%',
                flexDirection: 'column', padding: '20px', gap: '30px'
            }}>
                <div style={{ display: 'flex', flexDirection: 'row', width: "100%", alignItems: 'center', gap: '30px', justifyContent: 'flex-start' }}>
                    <img src={img} alt='round' style={{ width: '120px', height: '120px', borderRadius: '50%' }} />
                    <DetailsWrapper style={{ padding: '0px', width: '60%' }}>
                        <span className='organizationName' style={{ fontSize: "18px" }}>
                            <span>{details?.organisationName}</span>
                            <span className='verified'>{details?.isVerified ? <MdVerified /> : ''}</span>
                        </span>
                        <span className='sub-details' style={{ fontSize: "16px" }}>
                            <MdLocationOn color='#56C0C8' className='icon' />
                            {details?.location}
                        </span>
                        <span className='sub-details' style={{ fontSize: "16px" }}>
                            <MdCall color='#56C0C8' className='icon' />
                            {details?.contact}
                        </span>
                    </DetailsWrapper>
                </div>
                <div>
                    <h5 style={{ color: "#56C0C8", fontSize: '16px', fontFamily: 'Poppins' }}>Mission</h5>
                    <span style={{ color: "#4f646f", fontSize: '15px', paddingLeft: "5px" }}>{details?.mission}</span>
                </div>
                <ReviewWrapper>
                    <h5>Reviews</h5>
                    <hr></hr>
                    <div>
                        {details?.reviews && details.reviews.map((item, index)=> {
                            return(
                                <li key={index}>{item}</li>
                            )
                        })}
                    </div>
                </ReviewWrapper>


            </Modal.Body>
        </Modal>
    );
}



export default ProfileModal;
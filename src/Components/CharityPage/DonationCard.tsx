import React from 'react';
import { CardContainer, DetailsWrapper, DonateButton, ImageContainer, ImageWrapper } from '../DonorPage/DonorStyles';
import img from "../HomePage/images/image3.jpg"
import { donationCardProps, donationProps } from '../Shared_util/Constants/Types';
import { BASE_URL } from '../Shared_util/Constants/Base_URL';



const DonationCard: React.FC<donationCardProps> = ({details, setShowLoading, setToastMessage, setShowToast}) => {

    const userData = sessionStorage.getItem("userDetails");
    const userDetails = userData && JSON.parse(userData);

    const tokenData = sessionStorage.getItem("accesstoken");
    const accessToken = tokenData && JSON.parse(tokenData);

    const handleRequest = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, details : donationProps) => {
        try{
            setShowLoading(true)
            const request = {
                requestId : details.donationId,
                requestedBy: userDetails.organisationName,
                requestType: 'Specific',
                requestStatus: 'In Progress',
                requestTo: details?.donatedBy,
                description : details.description,
                requestImage : details?.itemPhoto || 'no image',
            }
            const response = await fetch(`${BASE_URL}/requests`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                     authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(request),
            });

            if(response.status === 400){
                setToastMessage("Donation is currently not available")
                setShowToast(true)
                setShowLoading(false)
                return
            }else if(response.ok){
                setToastMessage("Success")
                setShowToast(true)
                setShowLoading(false)
            }


    }catch (error) {
        console.log(error);   
    }
    };

   
    return(
        <CardContainer>
            <ImageContainer>
                {details.itemPhoto ? <ImageWrapper src={details.itemPhoto} alt='request-photo' /> : <ImageWrapper src={img} alt='request-photo' /> }
                <span>{details.donationType}</span>
            </ImageContainer>
            <DetailsWrapper>
                <span className='donation-details'>
                    <span className='heading'>Donated By:</span>
                    <p className='content'>{details.donatedBy}</p>
                </span>
                <span className='donation-details'>
                    <span className='heading'>Location:</span>
                    <p className='content'>{details.location}</p>
                </span>
                <span className='donation-details'>
                    <span className='heading'>Description:</span>
                    <p className='content'>{details.description}</p>
                </span>    
                <DonateButton onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> handleRequest(e ,details)}>
                    Make Request
                </DonateButton>  

            </DetailsWrapper>
        </CardContainer>
    )
}



export default DonationCard;
import React from 'react';
import { CardContainer} from '../DonorPage/DonorStyles';
import { donationCardProps} from '../Shared_util/Constants/Types';




const DonationCard: React.FC<donationCardProps> = ({details, setShowLoading, setToastMessage, setShowToast}) => {

    const userData = sessionStorage.getItem("userDetails");
    const userDetails = userData && JSON.parse(userData);
    console.log(userDetails)

    const tokenData = sessionStorage.getItem("accesstoken");
    const accessToken = tokenData && JSON.parse(tokenData);
    console.log(accessToken)
   
   
    return(
        <CardContainer>
            
        </CardContainer>
    )
}



export default DonationCard;
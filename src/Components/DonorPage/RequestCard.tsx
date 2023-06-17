import React from 'react'
import { CardContainer, ImageWrapper, ImageContainer, DetailsWrapper, Column, DonateButton} from './DonorStyles'
import image1 from '../HomePage/images/image2.jpg'
import { RequestCardProp } from '../Shared_util/Constants/Types'
import {useNavigate} from "react-router-dom"


const RequestCard: React.FC<RequestCardProp> = ({ details }) => {

    const { requestType, requestedBy, description} = details
    
    const navigate = useNavigate()

    return (
        <CardContainer>
            <ImageContainer>
                <ImageWrapper src={image1} alt='request-photo' />
                <span>{requestType}</span>
            </ImageContainer>
            <DetailsWrapper>
                    <>
                        <Column>
                            <header>From</header>
                            <span>{requestedBy}</span>
                        </Column>
                        <Column>
                            <header>{requestType}</header>
                            <span>{description}</span>
                        </Column>
                        <DonateButton onClick={()=>{
                                    navigate("/login/donor/makeDonations")
                                    sessionStorage.setItem('page', JSON.stringify('makeDonations'))
                                    }}>
                            Support
                        </DonateButton>
                    </> 
            </DetailsWrapper>
        </CardContainer>

    )
}

export default RequestCard
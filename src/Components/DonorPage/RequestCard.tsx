import React from 'react'
import { CardContainer, ImageWrapper, ImageContainer, DetailsWrapper, Column, DonateButton} from './DonorStyles'
import image1 from '../HomePage/images/image2.jpg'


const RequestCard = () => {
    return (
        <CardContainer>
            <ImageContainer>
                <ImageWrapper src={image1} alt='request-photo'/>
                <span>Campaign</span>
            </ImageContainer> 
            <DetailsWrapper>
                <Column>
                    <header>From</header>
                    <span>Ghana Aid Foundation</span>
                </Column>
                <Column>
                    <header>Campaign</header>
                    <span>Supporting girl child education</span>
                </Column>
                <DonateButton>Donate</DonateButton>
            </DetailsWrapper>  
        </CardContainer>

    )
}

export default RequestCard
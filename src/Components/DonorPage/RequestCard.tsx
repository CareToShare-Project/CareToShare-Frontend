import React from 'react'
import { CardContainer, ImageWrapper, ImageContainer, DetailsWrapper, Column, DonateButton} from './DonorStyles'
import image1 from '../HomePage/images/image2.jpg'
import { RequestCardProp } from '../Shared_util/Constants/Types'


const RequestCard: React.FC<RequestCardProp> = ({ details }) => {

    const { requestType, requestedBy, description} = details

    return (
        <CardContainer>
            <ImageContainer>
                <ImageWrapper src={image1} alt='request-photo' />
                <span>{requestType}</span>
            </ImageContainer>
            <DetailsWrapper>

                {requestType === "Campaign" ?
                    <>
                        <Column>
                            <header>From</header>
                            <span>{requestedBy}</span>
                        </Column>
                        <Column>
                            <header>{requestType}</header>
                            <span>{description}</span>
                        </Column>
                        <DonateButton>Donate</DonateButton>
                    </> :
                    <div
                        style={{
                            display: 'flex', width: '80%', margin: '30px auto'
                            , flexDirection: 'column', gap: '10px'
                        }}>
                        <Column>
                            <header>From</header>
                            <span>{requestedBy}</span>
                        </Column>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <DonateButton>Accept</DonateButton>
                            <DonateButton>Decline</DonateButton>
                        </div>

                    </div>}
            </DetailsWrapper>
        </CardContainer>

    )
}

export default RequestCard
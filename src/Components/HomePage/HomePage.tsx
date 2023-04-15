import React from 'react'
import { MainContainer, LeftSideContainer, RightSideContainer } from '../../StyledComponents/HomePageStyles'
import RightSection from './RightSection'
import LeftSection from './LeftSection'
import 'bootstrap/dist/css/bootstrap.min.css'


function HomePage () {
    return (
        <MainContainer>
            <LeftSideContainer>
                <LeftSection />
            </LeftSideContainer>

            <RightSideContainer>
                <RightSection />
            </RightSideContainer>

        </MainContainer>
    )
}

export default HomePage
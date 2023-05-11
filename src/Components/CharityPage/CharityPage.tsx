import React from 'react'
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { charityFeatures } from '../Shared_util/Constants/SideBarFeatures';
import SideBar from '../Shared_util/SideBar/SideBar';
import { MainPageContainer, RightSideContent } from '../DonorPage/DonorStyles';

function CharityPage(){
    const {username} = useParams();
    return (
        <MainPageContainer>
            <SideBar 
                username={username} 
                features={charityFeatures} 
            />
            <RightSideContent>
                <Outlet />
            </RightSideContent>
        </MainPageContainer>
    )
}

export default CharityPage;
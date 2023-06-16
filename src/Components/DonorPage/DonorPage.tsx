import React from 'react'
import { Outlet } from 'react-router-dom';
import SideBar from '../Shared_util/SideBar/SideBar';
import { DonorPageContainer, MainPageContainer, RightSideContent } from './DonorStyles';
import { donorFeatures } from '../Shared_util/Constants/SideBarFeatures';
import NavBar from '../Shared_util/NavBar';



function DonorPage() {
    const userData = sessionStorage.getItem('userDetails')
    const userDetails = userData && JSON.parse(userData)





    return (
        <DonorPageContainer>
            <SideBar features={donorFeatures} />
            <MainPageContainer>
                <NavBar userType='Donor' username={userDetails?.username} />
                <RightSideContent>
                    <Outlet />
                </RightSideContent>
            </MainPageContainer>
        </DonorPageContainer>
    )
}

export default DonorPage;
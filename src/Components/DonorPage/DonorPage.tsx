import React from 'react'
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import SideBar from '../Shared_util/SideBar/SideBar';
import { MainPageContainer, RightSideContent } from './DonorStyles';
import { donorFeatures, donorLogoutRoute } from '../Shared_util/Constants/SideBarFeatures';

function DonorPage(){
    const {username} = useParams();

    return (
        <MainPageContainer>
            <SideBar 
                username={username} 
                features={donorFeatures} 
                logoutRoute={donorLogoutRoute}/>
            <RightSideContent>
                <Outlet />
            </RightSideContent>        
        </MainPageContainer>
    )
}

export default DonorPage;
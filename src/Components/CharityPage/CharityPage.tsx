import React from 'react'
import { Outlet } from 'react-router-dom';
import { charityFeatures } from '../Shared_util/Constants/SideBarFeatures';
import SideBar from '../Shared_util/SideBar/SideBar';
import { MainPageContainer, RightSideContent , DonorPageContainer as CharityPageContainer} from '../DonorPage/DonorStyles';
import NavBar from '../Shared_util/NavBar';

function CharityPage(){
    const userData = sessionStorage.getItem('userDetails')
    const userDetails = userData && JSON.parse(userData)
  
    return (
            <CharityPageContainer>
                <SideBar  features={charityFeatures} />
                <MainPageContainer>
                    <NavBar userType='Charity' username={userDetails.username}/>
                    <RightSideContent>
                        <Outlet />
                    </RightSideContent>
                </MainPageContainer>
            </CharityPageContainer>
        )
}

export default CharityPage;
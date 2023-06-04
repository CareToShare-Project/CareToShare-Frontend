import React from 'react'
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { charityFeatures } from '../Shared_util/Constants/SideBarFeatures';
import SideBar from '../Shared_util/SideBar/SideBar';
import { MainPageContainer, RightSideContent , DonorPageContainer as CharityPageContainer} from '../DonorPage/DonorStyles';
import NavBar from '../Shared_util/NavBar';

function CharityPage(){
    const {username} = useParams();
    return (
            <CharityPageContainer>
                <SideBar  features={charityFeatures} />
                <MainPageContainer>
                    <NavBar userType='Charity' username={username}/>
                    <RightSideContent>
                        <Outlet />
                    </RightSideContent>
                </MainPageContainer>
            </CharityPageContainer>
        )
}

export default CharityPage;
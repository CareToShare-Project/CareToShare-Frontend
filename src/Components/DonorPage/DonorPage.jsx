import React from 'react'
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import SideBar from '../Shared_util/SideBar/SideBar';
import { MainPageContainer } from './DonorStyles';
import { donorFeatures } from '../Shared_util/Constants/SideBarFeatures';

function DonorPage(){
    const {username} = useParams();

    return (
        <MainPageContainer>
            <SideBar username={username} features={donorFeatures}/>
            <Outlet />     
        </MainPageContainer>
    )
}

export default DonorPage;
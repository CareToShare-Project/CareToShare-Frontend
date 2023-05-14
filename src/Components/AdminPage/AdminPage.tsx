import React from 'react'
import {useParams} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import SideBar from '../Shared_util/SideBar/SideBar'
import { adminFeatures} from '../Shared_util/Constants/SideBarFeatures'
import { MainPageContainer, RightSideContent } from '../DonorPage/DonorStyles'

function AdminPage(){
    const {username} = useParams()
    return (
        <MainPageContainer>
            <SideBar 
                username={username} 
                features={adminFeatures} 
            />
            <RightSideContent>
                <Outlet />
            </RightSideContent>
            
        </MainPageContainer>
    )
}

export default AdminPage;
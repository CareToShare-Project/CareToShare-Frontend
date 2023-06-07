import React from 'react'
import {useParams} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import SideBar from '../Shared_util/SideBar/SideBar'
import { adminFeatures} from '../Shared_util/Constants/SideBarFeatures'
import { MainPageContainer, RightSideContent, DonorPageContainer as AdminPageContainer} from '../DonorPage/DonorStyles'
import NavBar from '../Shared_util/NavBar'

function AdminPage(){
    const {username} = useParams()
    return (
        <AdminPageContainer>
            <SideBar  features={adminFeatures}/>
            <MainPageContainer>
                <NavBar userType='Admin' username={username}/>
                <RightSideContent>
                    <Outlet />
                </RightSideContent>
            </MainPageContainer>
        </AdminPageContainer>
        
    )
}

export default AdminPage;
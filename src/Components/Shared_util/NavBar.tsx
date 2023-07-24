import React, {useEffect } from "react"
import { ProfileContainer } from "./SideBar/SideBarStyles"
import { FaUserCircle } from "react-icons/fa"
import { NavBarProp } from "./Constants/Types"
import { MdNotificationsNone } from "react-icons/md"
import { NavBarWrapper } from "../DonorPage/DonorStyles"


const NavBar: React.FC<NavBarProp> = ({ username, userType }) => {

    const userData = sessionStorage.getItem("userDetails");
    const userDetails = userData && JSON.parse(userData);
    
    useEffect(() => {
        
    }, [])

    return (
        <NavBarWrapper>
            <span>{userType}</span>
            <ProfileContainer>
                <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
                    {userDetails.photo? <img src={userDetails.photo} alt="profile" className="profile"/>
                     :<FaUserCircle size={25} className='profile' />}
                    <span>{username}</span>
                </div>
                <MdNotificationsNone size={20} className='notification' />
            </ProfileContainer>
        </NavBarWrapper>
    )
}

export default NavBar
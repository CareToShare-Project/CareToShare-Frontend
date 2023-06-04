import React, {useState, useEffect} from "react"
import { ProfileContainer } from "./SideBar/SideBarStyles"
import { FaUserCircle } from "react-icons/fa"
import { NavBarProp } from "./Constants/Types"
import { MdNotificationsNone } from "react-icons/md"
import { NavBarWrapper } from "../DonorPage/DonorStyles"


const NavBar: React.FC<NavBarProp> = ({username, userType}) =>{
    const [profilePhoto, setProfilePhoto] = useState('')

    useEffect(()=>{
        const pageData = sessionStorage.getItem('page')
        const photoData = sessionStorage.getItem('profilePhoto')
        const page = pageData && JSON.parse(pageData);
        const photo = photoData && JSON.parse(photoData);
        console.log(photo)
            if(!photo){
                setProfilePhoto('')
            }
            else{
                setProfilePhoto(photo)
            }  
    
    }, [])

    return (
        <NavBarWrapper>
            <span>{userType}</span>
            <ProfileContainer>
                <div style={{'display' : 'flex' , 'alignItems' : 'center'}}>
                    <FaUserCircle size={25} className='profile'/>
                    <span>{username}</span>
                </div>
                <MdNotificationsNone size={20} className='notification'/>
            </ProfileContainer>
        </NavBarWrapper>
    )
}

export default NavBar
import React, {useEffect, useState} from "react";
import { ProfileContainer, ProfileImage, SideBarWrapper, 
        FeaturesWrapper, EditProfileButton, LogoutWrapper ,
        MenuBar, SideBarContainer, Pic} from "./SideBarStyles";
import { SideBarProps } from "../Constants/Types";
import { FaUserCircle, FaTimes} from "react-icons/fa";
import {GiExitDoor} from "react-icons/gi"
import {MdOutlineMenu} from "react-icons/md"
import { useNavigate } from "react-router-dom";



const SideBar: React.FC<SideBarProps> = ({username, features}) => {
    
    const [currentPage, setCurrentPage] = useState<string>()
    const [hideSideBar, setHideSideBar] = useState<boolean>(true)
    const [profilePhoto, setProfilePhoto] = useState('')
    const navigate = useNavigate();
    

    const handlePageNavigation = (path: string) => {
        setCurrentPage(path)
        setHideSideBar(true)
        sessionStorage.setItem('page', JSON.stringify(path))
        navigate(`${path}`)
        
    }

    const handleLogout = () => {
        setCurrentPage('')
        sessionStorage.setItem('page', JSON.stringify(''))
        navigate('/login')
    }

    const handleShowSideBar = () => {
        setHideSideBar(prev=> !prev)
    }

    useEffect(()=>{
        const pageData = sessionStorage.getItem('page')
        const photoData = sessionStorage.getItem('profilePhoto')
        const page = pageData && JSON.parse(pageData);
        const photo = photoData && JSON.parse(photoData);
        console.log(photo)
            if(!page){
                setCurrentPage('')
            }else{
                setCurrentPage(page)
            }
            if(!photo){
                setProfilePhoto('')
            }
            else{
                setProfilePhoto(photo)
            }  
    
    }, [])

 

    return (
        <SideBarContainer>
            <MenuBar className={hideSideBar?'menu-bar': ''} onClick={()=>handleShowSideBar()}>
                    {hideSideBar ? <MdOutlineMenu /> : <FaTimes />}
            </MenuBar>
            <SideBarWrapper className={hideSideBar?'hide': 'show'}>
                <ProfileContainer>
                    <ProfileImage> 
                        {profilePhoto ? <Pic src={profilePhoto} /> : <FaUserCircle size={90} />}
                    </ProfileImage>
                    <div>Welcome <span>{username}</span></div>
                    <EditProfileButton onClick={()=> handlePageNavigation('editProfile')}>
                        Edit Profile
                    </EditProfileButton>
                </ProfileContainer>

                <hr style={{color: 'white', height: '3px', background: 'white'}}></hr>

                <FeaturesWrapper>
                        {features.map((feature, key)=>{
                            return (
                                <li key={key} 
                                    className="feature" 
                                    id={currentPage === feature.link ? 'active' : ''}
                                    onClick={()=>handlePageNavigation(`${feature.link}`)}
                                >
                                        <feature.icon 
                                            className="icon" 
                                            id={feature.title.includes('Progress')? 'rotate' : ''} size={22}/>
                                        <span className="title">{feature.title}</span>
                                </li>
                            )
                        })}
                </FeaturesWrapper>
                
                <LogoutWrapper onClick={handleLogout}>
                    <GiExitDoor />
                    Logout
                </LogoutWrapper>
                
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;
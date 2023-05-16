import React, {useEffect, useState} from "react";
import { ProfileContainer, ProfileImage, SideBarWrapper, 
        FeaturesWrapper, EditProfileButton, LogoutWrapper ,
        MenuBar, SideBarContainer} from "./SideBarStyles";
import { SideBarProps } from "../Constants/Types";
import { FaUserCircle, FaTimes} from "react-icons/fa";
import {GiExitDoor} from "react-icons/gi"
import {MdOutlineMenu} from "react-icons/md"
import { Link, useNavigate } from "react-router-dom";



const SideBar: React.FC<SideBarProps> = ({username, features}) => {
    const [currentPage, setCurrentPage] = useState<string>('')
    const [hideSideBar, setHideSideBar] = useState<boolean>(true)
    const navigate = useNavigate();
    

    const handlePageNavigation = (path: string) => {
        setCurrentPage(path)
        setHideSideBar(true)
        sessionStorage.setItem('page', JSON.stringify(path))
        navigate(`${path}`)
        
    }

    const handleShowSideBar = () => {
        setHideSideBar(prev=> !prev)
    }

    useEffect(()=>{
        const jsonData = sessionStorage.getItem('page')
        if(jsonData !== null) {
            const page = JSON.parse(jsonData);
            setCurrentPage(page)
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
                        <FaUserCircle size={90} />
                    </ProfileImage>
                    <div>Welcome, <span>{username}</span></div>
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
                <Link to={'/login'} style={{'textDecoration': 'none'}}>
                    <LogoutWrapper>
                        <GiExitDoor />
                        Logout
                    </LogoutWrapper>
                </Link>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;
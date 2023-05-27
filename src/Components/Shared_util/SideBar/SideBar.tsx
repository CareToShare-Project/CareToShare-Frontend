import React, {useEffect, useState} from "react";
import { ProfileContainer, ProfileImage, SideBarWrapper, 
        FeaturesWrapper, EditProfileButton, LogoutWrapper ,
        MenuBar, SideBarContainer} from "./SideBarStyles";
import { SideBarProps } from "../Constants/Types";
import { FaUserCircle, FaTimes} from "react-icons/fa";
import {GiExitDoor} from "react-icons/gi"
import {MdOutlineMenu} from "react-icons/md"
import { useNavigate } from "react-router-dom";



const SideBar: React.FC<SideBarProps> = ({username, features}) => {
    const [currentPage, setCurrentPage] = useState<string>('')
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
        const jsonData = sessionStorage.getItem('page')
        if(jsonData !== null) {
            const page = JSON.parse(jsonData);
            setCurrentPage(page)
        }
    
    }, [])

    useEffect(()=>{
        // async function fetchData() {
        //     setShowLoadingToast(true);
        //     let groups_session;
        //     try {
        //       const response = await fetch(`${URL}/fetchlecturergroups`, {
        //         method: 'POST',
        //         headers: { 'content-type': 'application/json' },
        //         body: JSON.stringify({ courseCode: sessionStorage.getItem('courseCode') })
        //       });
      
        //       const data = await response.json();
        //       setShowLoadingToast(false);
      
        //       groups_session = data?.info;
        //       // save the fetched data in session
        //       sessionStorage.setItem('groups', JSON.stringify(data?.info));
        //     }
        //     catch (error) {
        //       console.log(error.message)
        //     }
        //     // make sure the active page on  the floating nav is the Attendance page
        //     localStorage.setItem('currentPage', 'G');
      
        //     // display no groups page if there are no groups created for this course
        //     if (groups_session?.groups?.length === 0) {
        //       setNoCreatedGroups(true);
        //     }
        //     else {
        //       setNoCreatedGroups(false);
        //     }
      
        //     setCourseName(groups_session?.courseName)
        //     setCourseCode(groups_session?.courseCode)
      
        //   }
      
        //   fetchData();
    })

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
                
                <LogoutWrapper onClick={handleLogout}>
                    <GiExitDoor />
                    Logout
                </LogoutWrapper>
                
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;
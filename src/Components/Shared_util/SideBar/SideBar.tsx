import React, {useState} from "react";
import { ProfileContainer, ProfileImage, SideBarWrapper, FeaturesWrapper, EditProfileButton } from "./SideBarStyles";
import { SideBarProps } from "../Constants/Types";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const SideBar: React.FC<SideBarProps> = ({username, features}) => {
    const [currentPage, setCurrentPage] = useState<string>('')
    const navigate = useNavigate();

    const handlePageNavigation = (path: string) => {
        setCurrentPage(path)
        navigate(`${path}`)
        
    }

    return (
        <SideBarWrapper>
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
                                    <feature.icon className="icon" size={22}/>
                                    <span className="title">{feature.title}</span>
                            </li>
                        )
                    })}
            </FeaturesWrapper>
        </SideBarWrapper>
    )
}

export default SideBar;
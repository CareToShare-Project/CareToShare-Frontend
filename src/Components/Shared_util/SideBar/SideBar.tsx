import React, { useEffect, useState } from "react";
import {
    SideBarWrapper,
    FeaturesWrapper, LogoutWrapper,
    MenuBar, SideBarContainer
} from "./SideBarStyles";
import { SideBarProps } from "../Constants/Types";
import { GiExitDoor } from "react-icons/gi"
import { MdOutlineMenu } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import logo from "../../HomePage/images/logo2.png"



const SideBar: React.FC<SideBarProps> = ({ features }) => {

    const [currentPage, setCurrentPage] = useState<string>()
    const [hideSideBar, setHideSideBar] = useState<boolean>(true)
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
        sessionStorage.setItem('userDetails', '')
        sessionStorage.setItem('accesstoken', '')
        sessionStorage.setItem('userDonations', "")
        navigate('/login')
    }

    const handleShowSideBar = () => {
        setHideSideBar(prev => !prev)
    }

    useEffect(() => {
        const pageData = sessionStorage.getItem('page')
        const page = pageData && JSON.parse(pageData);
        if (!page) {
            setCurrentPage('')
        } else {
            setCurrentPage(page)
        }
    }, [])



    return (
        <SideBarContainer>
            <MenuBar className={hideSideBar ? 'menu-bar' : ''} onClick={() => handleShowSideBar()}>
                {hideSideBar ? <MdOutlineMenu /> : ''}
            </MenuBar>
            <SideBarWrapper className={hideSideBar ? 'hide' : 'show'}>
                <img src={logo} alt="logo"/>
                <FeaturesWrapper>
                    {features.map((feature, key) => {
                        return (
                            <li key={key}
                                className="feature"
                                id={currentPage === feature.link ? 'active' : ''}
                                onClick={() => handlePageNavigation(`${feature.link}`)}
                            >
                                <feature.icon
                                    className="icon"
                                    size={16} />
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
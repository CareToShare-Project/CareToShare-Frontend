import React, { useState } from 'react';
import { BodyContainer, FooterContainer, NavigationContainer, PageWrapper, ShadeContainer } from './HomePageStyles';
import '../Shared_Styles/General/Styles.css'
import { MdOutlineDeliveryDining, MdVerifiedUser } from 'react-icons/md';
import { BiDonateHeart } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from "./images/logo.png"

const LandingPage = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)

    return (
        <PageWrapper className='home'>
            <ShadeContainer></ShadeContainer>
            <NavigationContainer>
                <img src={logo} alt='logo' />
                <div className={showMenu ? 'showMenu' : ''}>
                    <span>About</span>
                    <span onClick={() => navigate('login')}>Sign In</span>
                    <span onClick={() => navigate('login/createAccount')}>Sign Up</span>
                </div>
                <span className='menu' onClick={() => setShowMenu(prev => !prev)}><AiOutlineMenu size={25} /></span>
            </NavigationContainer>
            <BodyContainer>
                <h1>Empowering Change Through Giving</h1>
                <p>Welcome to Care to Share, a platform dedicated to bringing positive change
                    through the power of giving. Care to Share is your gateway to making a meaningful
                    impact in the lives of those in need and contributing to causes you care about
                </p>
                <button onClick={() => navigate("login")}>Get Started</button>
            </BodyContainer>
            <FooterContainer>
                <div>
                    <MdOutlineDeliveryDining size={25} className='icon' />
                    <span>Secure delivery</span>
                    <p>Our donation platform ensures the secure delivery
                        of donations to the intended recipients. We prioritize
                        the safety and privacy of your contributions
                    </p>
                </div>
                <div>
                    <BiDonateHeart size={25} className='icon' />
                    <span>Easy Donations</span>
                    <p>
                        We strive to make the donation process as effortless as possible.
                        With our user-friendly interface, you can easily contribute to causes
                        you care about.
                    </p>
                </div>
                <div>
                    <MdVerifiedUser size={25} className='icon' />
                    <span>Verified Organisations</span>
                    <p>
                        We partner with verified organizations and charities to ensure the
                        legitimacy and credibility of the causes you support.

                    </p>
                </div>
                <div>
                    <MdOutlineDeliveryDining size={25} className='icon' />
                    <span>Transparent Impact Reporting</span>
                    <p> Our donation platform
                        provides detailed impact reporting, allowing you to track how your
                        contributions are making a difference.
                    </p>
                </div>
            </FooterContainer>
        </PageWrapper>
    )
}



export default LandingPage;
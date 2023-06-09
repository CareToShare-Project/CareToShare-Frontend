import React from 'react';
import {BodyContainer,FooterContainer, NavigationContainer, PageWrapper } from './HomePageStyles';
import '../Shared_Styles/General/Styles.css'
import { MdOutlineDeliveryDining, MdVerifiedUser } from 'react-icons/md';
import { BiDonateHeart } from 'react-icons/bi';

const LandingPage = () => {
    return(
            <PageWrapper className='body-container'>
                <NavigationContainer>
                    <h3>Logo</h3>
                    <div>
                        <span>About</span>
                        <span>Sign In</span>
                        <span>Sign Up</span>
                    </div>
                </NavigationContainer>
                <BodyContainer>
                    <h1>CareToShare</h1>
                    <p>A crowdsourcing donation platform for Charity foundation</p>
                    <button>Get Started</button>
                </BodyContainer>
                <FooterContainer>
                    <div>
                        <MdOutlineDeliveryDining size={25} className='icon'/>
                        <span>Secure delivery</span>
                        <p>Our donation platform ensures the secure delivery 
                            of donations to the intended recipients. We prioritize 
                            the safety and privacy of your contributions
                        </p>
                    </div>
                    <div>
                        <BiDonateHeart size={25} className='icon'/>
                        <span>Easy Donations</span>
                        <p>
                            We strive to make the donation process as effortless as possible. 
                            With our user-friendly interface, you can easily contribute to causes 
                            you care about. 
                        </p>
                    </div>
                    <div>
                        <MdVerifiedUser size={25} className='icon'/>
                        <span>Verified Organisations</span>
                        <p>
                            We partner with verified organizations and charities to ensure the 
                            legitimacy and credibility of the causes you support.
                        
                        </p>
                    </div>
                    <div>
                        <MdOutlineDeliveryDining size={25} className='icon'/>
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
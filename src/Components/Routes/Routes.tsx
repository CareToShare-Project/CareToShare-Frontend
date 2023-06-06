import React from 'react';
import HomePage from '../HomePage/HomePage';
import { Routes, Route, useLocation } from 'react-router-dom';
import CharityRegistrationPage from '../CharityPage/CharityRegistrationPage';
import DonorRegistrationPage from '../DonorPage/DonorRegistrationPage';
import CharityPage from '../CharityPage/CharityPage';
import DonorPage from '../DonorPage/DonorPage';
import AdminPage from '../AdminPage/AdminPage';
import ResetPassword from '../PasswordReset/ResetPassword';
import Login from '../Login/Login';
import CreateAccount from '../CreateAccount/CreateAccount';
import ForgotPassword from '../PasswordReset/ForgotPassword';
import EmailNotification from '../PasswordReset/EmailNotification';
import ViewFoundations from '../DonorPage/ViewFoundations';
import ViewRequests from '../DonorPage/ViewRequests';
import MakeDonation from '../DonorPage/MakeDonation';
import DonationProgress from '../DonorPage/DonationProgress';
import PageNotFound from '../PageNotFound/PageNotFound';
import {AnimatePresence} from 'framer-motion'
import ReviewCharities from '../DonorPage/ReviewCharities';
import DonorProfile from '../DonorPage/DonorProfile';

const PagesRoute = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route index element={<HomePage />}/>
                <Route path='login' element= {<Login />} />
                <Route path='login/forgotPassword' element = {<ForgotPassword /> } />
                <Route path='login/forgotPassword/notification/:email' element = {<EmailNotification /> } />
                <Route path='login/forgotPassword/resetPassword/:token' element = {<ResetPassword />} />
                <Route path='login/createAccount' element= {<CreateAccount />} />
                <Route path='login/createAccount/Organisation/:username' element = {<CharityRegistrationPage />} />
                <Route path='login/createAccount/Donor/:username' element = {<DonorRegistrationPage />} />

                {/* admin routes */}
                <Route path='login/Admin/:username' element = {<AdminPage/>} >
                    <Route path='' element={<h2>Home Page</h2>}/>
                    <Route path='editProfile' element={<h2>Edit userProfile</h2>}/>
                    <Route path='approveDonations' element = {<h2>Donation Approval</h2>}/>
                    <Route path='approveRequests' element = {<h2>Request Approval</h2>} />
                    <Route path='manageAccounts' element = {<h2>Manage Accounts</h2>} />
                    <Route path='verifyRegistration' element = {<h2>Verify Registration</h2>}/>
                </Route>
                
                
                {/* organization routes */}
                <Route path='login/Organisation/:username' element = {<CharityPage />}>
                    <Route path='' element={<h2>Home page</h2>}/>
                    <Route path='editProfile' element={<h2>Edit userProfile</h2>}/>      
                    <Route path='requestProgress' element = {<h2>Check progress</h2>}/>
                    <Route path='viewDonations' element = {<h2>View Available donations</h2>} />
                    <Route path='appreciativeMessage' element = {<h2>Send Appreciative Message</h2>} />
                    <Route path='makeRequest' element = {<h2>Make Requests</h2>}/>
                </Route>
                
                {/* donor routes */}
                <Route path='login/Donor/:username' element = {<DonorPage/>}>
                    <Route path='' element={<h2>No Post Available</h2>}/>
                    <Route path='viewCharities' element={<ViewFoundations />}/>
                    <Route path='viewRequests' element = {<ViewRequests />}/>
                    <Route path='makeDonations' element = {<MakeDonation />} />
                    <Route path='donationProgress' element = {<DonationProgress />}/>
                    <Route path='reviewCharities' element = {<ReviewCharities />} />
                    <Route path='editProfile' element = {<DonorProfile />} />
                </Route>
                
                <Route path='*' element={<PageNotFound />} />  
        </Routes>
    </AnimatePresence>
    )
}



export default PagesRoute;
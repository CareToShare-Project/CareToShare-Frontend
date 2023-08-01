import React from 'react';
//import HomePage from '../HomePage/HomePage';
import LandingPage from '../HomePage/LandingPage';
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
import { AnimatePresence } from 'framer-motion'
import ReviewCharities from '../DonorPage/ReviewCharities';
import DonorProfile from '../DonorPage/DonorProfile';
import Feed from '../Shared_util/Feed/Feed';
import ApproveDonation from '../AdminPage/ApproveDonation';
import ApproveRegistration from '../AdminPage/ApproveRegistration';
import ApproveRequest from '../AdminPage/ApproveRequest';
import Overview from '../AdminPage/Overview';
import DonorAccount from '../AdminPage/DonorAccount';
import Post from '../CharityPage/Post';
import RequestProgress from '../CharityPage/RequestProgress'
import MakeRequest from '../CharityPage/MakeRequest';
import Donations from '../CharityPage/Donations';
import Verification from '../AdminPage/Verification';
import CharityProfile from '../CharityPage/CharityProfile';

const PagesRoute = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route index element={<LandingPage />} />
                <Route path='login' element={<Login />} />
                <Route path='login/forgotPassword' element={<ForgotPassword />} />
                <Route path='login/forgotPassword/notification/:email' element={<EmailNotification />} />
                <Route path='login/forgotPassword/resetPassword/:token' element={<ResetPassword />} />
                <Route path='login/createAccount' element={<CreateAccount />} />
                <Route path='login/createAccount/Organisation/:username' element={<CharityRegistrationPage />} />
                <Route path='login/createAccount/Donor/:username' element={<DonorRegistrationPage />} />

                {/* admin routes */}
                <Route path='login/Admin/' element={<AdminPage />} >
                    <Route path='' element={<Overview />} />
                    <Route path='viewCharities' element={<ViewFoundations />} />
                    <Route path='approveDonations' element={<ApproveDonation />} />
                    <Route path='approveRequests' element={<ApproveRequest />} />
                    <Route path='manageDonorsAccount' element={<DonorAccount />} />
                    <Route path='verify' element={<Verification />} />
                    <Route path='verifyRegistration' element={<ApproveRegistration />} />
                </Route>


                {/* organization routes */}
                <Route path='login/Organisation' element={<CharityPage />}>
                    <Route path='' element={<Feed />} />
                    <Route path='editProfile' element={<CharityProfile />} />
                    <Route path='requestProgress' element={<RequestProgress />} />
                    <Route path='donationProgress' element={<Donations />} />
                    {/* <Route path='viewDonations' element={<ViewDonation />} /> */}
                    <Route path='post' element={<Post />} />
                    <Route path='makeRequest' element={<MakeRequest />} />
                </Route>

                {/* donor routes */}
                <Route path='login/Donor' element={<DonorPage />}>
                    <Route path='' element={<Feed />} />
                    <Route path='viewCharities' element={<ViewFoundations />} />
                    <Route path='viewRequests' element={<ViewRequests />} />
                    {/* <Route path='request' element={<Requests />} /> */}
                    <Route path='viewRequests/makeDonations' element={<MakeDonation />} />
                    <Route path='donationProgress' element={<DonationProgress />} />
                    <Route path='reviewCharities' element={<ReviewCharities />} />
                    <Route path='editProfile' element={<DonorProfile />} />
                </Route>

                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </AnimatePresence>
    )
}



export default PagesRoute;
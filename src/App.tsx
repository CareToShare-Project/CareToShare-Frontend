import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import CharityRegistrationPage from './Components/CharityPage/CharityRegistrationPage';
import DonorRegistrationPage from './Components/DonorPage/DonorRegistrationPage';
import CharityPage from './Components/CharityPage/CharityPage';
import DonorPage from './Components/DonorPage/DonorPage';
import AdminPage from './Components/AdminPage/AdminPage';
import {theme} from './Components/Shared_util/Constants/Theme'
import ResetPassword from './Components/PasswordReset/ResetPassword';
import Login from './Components/Login/Login';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import ForgotPassword from './Components/PasswordReset/ForgotPassword';
import ViewFoundations from './Components/DonorPage/ViewFoundations';
import ViewRequests from './Components/DonorPage/ViewRequests';




function App() {
  return (
  <ThemeProvider theme={theme}>
      <BrowserRouter>
        
        <Routes>
            <Route index element={<HomePage />}/>
            <Route path='login' element= {<Login />} />
            <Route path='login/forgotPassword' element = {<ForgotPassword /> } />
            <Route path='login/forgotPassword/resetPassword' element = {<ResetPassword />} />
            <Route path='login/createAccount' element= {<CreateAccount />} />
            <Route path='login/createAccount/Organisation/:username' element = {<CharityRegistrationPage />} />
            <Route path='login/createAccount/Donor/:username' element = {<DonorRegistrationPage />} />

            {/* admin routes */}
            <Route path='login/admin/:username' element = {<AdminPage/>} >
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
              <Route path='' element={<h2>Home page</h2>}/>
              <Route path='viewCharities' element={<ViewFoundations />}/>
              <Route path='viewRequests' element = {<ViewRequests />}/>
              <Route path='makeDonations' element = {<h2>Make donation</h2>} />
              <Route path='donationProgress' element = {<h2>Check progress</h2>}/>
              <Route path='reviewCharities' element = {<h2>Review Charities</h2>} />
              <Route path='editProfile' element = {<h2>Edit UserProfile</h2>} />
            </Route>
            
            <Route path='*' element={<h1>Page not found</h1>} />  
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;

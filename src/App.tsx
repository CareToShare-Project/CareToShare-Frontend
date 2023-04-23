import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLoginPage from './Components/AdminPage/AdminLoginPage';
import DonorLoginPage from './Components/DonorPage/DonorLoginPage';
import CharityLoginPage from './Components/CharityPage/CharityLoginPage';
import { ThemeProvider } from 'styled-components';
import CharityRegistrationPage from './Components/CharityPage/CharityRegistrationPage';
import DonorRegistrationPage from './Components/DonorPage/DonorRegistrationPage';
import CharityPage from './Components/CharityPage/CharityPage';
import DonorPage from './Components/DonorPage/DonorPage';
import AdminPage from './Components/AdminPage/AdminPage';
import {theme} from './Components/Shared_util/Theme'




function App() {
  return (
  <ThemeProvider theme={theme}>
      <BrowserRouter>
        
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path='admin' element= {<AdminLoginPage />} />
          <Route path='admin/adminDashboard/:username' element = {<AdminPage />}>
            <Route path='editProfile' element={<h2>Edit userProfile</h2>}/>      
            <Route path='approveDonations' element = {<h2>Donation Approval</h2>}/>
            <Route path='approveRequests' element = {<h2>Request Approval</h2>} />
            <Route path='manageAccounts' element = {<h2>Send Appreciative Message</h2>} />
            <Route path='verifyRegistration' element = {<h2>Verify Registration</h2>}/>
          </Route>

          <Route path= 'charity' element = {<CharityLoginPage />} />
          <Route path= 'charity/charityRegister' element = {<CharityRegistrationPage />} />
          <Route path='charity/charityDashboard/:username' element = {<CharityPage />}>
            <Route path='editProfile' element={<h2>Edit userProfile</h2>}/>      
            <Route path='donationProgress' element = {<h2>Check progress</h2>}/>
            <Route path='viewDonations' element = {<h2>View Available donations</h2>} />
            <Route path='appreciativeMessage' element = {<h2>Send Appreciative Message</h2>} />
            <Route path='makeRequest' element = {<h2>Make Requests</h2>}/>
          </Route>
          
          <Route path= 'donor' element = {<DonorLoginPage />} />
          <Route path= 'donor/donorRegister' element = {<DonorRegistrationPage />} />
          <Route path='donor/donorDashboard/:username' element = {<DonorPage/>}>
            <Route path='viewCharities' element={<h2>View Charities</h2>}/>
            <Route path='viewRequests' element = {<h2>View Requests</h2>}/>
            <Route path='donate' element = {<h2>Make donation</h2>} />
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

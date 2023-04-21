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


const theme = {
  background: {
    primary: '#282c34',
    secondary: '#3a4e77',
    primaryTransparent: 'rgb(40, 44, 52, 0.7)'
  },
  color: {
    primary: 'white',
    secondary: '#131d20',
    hover: '#01DEFC',
    hoverprimary: 'rgba(0,0,0,0.8)',
    hoversecondary: 'white'
  },
  border: {
    primary: '#F7FBFF',
    secondary: '#01DEFC'
  }
}


function App() {
  return (
  <ThemeProvider theme={theme}>
      <BrowserRouter>
        
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path='admin' element= {<AdminLoginPage />} />
          <Route path='admin/adminDashboard' element = {<AdminPage />} />

          <Route path= 'charity' element = {<CharityLoginPage />} />
          <Route path= 'charity/charityRegister' element = {<CharityRegistrationPage />} />
          <Route path='charity/charityDashboard' element = {<CharityPage />} />
          
          <Route path= 'donor' element = {<DonorLoginPage />} />
          <Route path= 'donor/donorRegister' element = {<DonorRegistrationPage />} />
          <Route path='donor/donorDashboard' element = {<DonorPage/>} />
          
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;

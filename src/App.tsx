import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLoginPage from './Components/AdminPage/AdminLoginPage';
import DonorMainPage from './Components/DonorPage/DonorMainPage';
import CharityMainPage from './Components/CharityPage/CharityMainPage';
import { ThemeProvider } from 'styled-components';


const theme = {
  background: {
    primary: '#5BB4F0',
    secondary: '#01DEFC'
  },
  color: {
    primary: 'white',
    secondary: '#035578',
    hoverprimary: 'rgba(0,0,0,0.4)',
    hoversecondary: 'white'
  },
  border: {
    primary: '#F7FBFF'
  }
}


function App() {
  return (
  <ThemeProvider theme={theme}>
      <BrowserRouter>
        
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path='admin' element= {<AdminLoginPage />} />
          <Route path= 'donor' element = {<DonorMainPage />} />
          <Route path= 'charity' element = {<CharityMainPage />} />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;

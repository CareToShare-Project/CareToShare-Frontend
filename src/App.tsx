import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLoginPage from './Components/AdminPage/AdminLoginPage';
import DonorLoginPage from './Components/DonorPage/DonorLoginPage';
import CharityLoginPage from './Components/CharityPage/CharityLoginPage';
import { ThemeProvider } from 'styled-components';


const theme = {
  background: {
    primary: '#282c34',
    secondary: '#8c9fc4'
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
          <Route path= 'donor' element = {<DonorLoginPage />} />
          <Route path= 'charity' element = {<CharityLoginPage />} />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;

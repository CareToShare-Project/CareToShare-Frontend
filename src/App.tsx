import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminMainPage from './Components/AdminPage/AdminMainPage';
import DonorMainPage from './Components/DonorPage/DonorMainPage';
import CharityMainPage from './Components/CharityPage/CharityMainPage';
//import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path='admin' element= {<AdminMainPage />} />
        <Route path= 'donor' element = {<DonorMainPage />} />
        <Route path= 'charity' element = {<CharityMainPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

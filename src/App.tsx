import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {theme} from './Components/Shared_util/Constants/Theme'
import PagesRoute from './Components/Routes/Routes';





function App() {
  return (
  <ThemeProvider theme={theme}>
      <BrowserRouter>
          <PagesRoute />
      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;

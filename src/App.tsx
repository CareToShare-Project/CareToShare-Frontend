import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {theme} from './Components/Shared_util/Constants/Theme'
import PagesRoute from './Components/Routes/Routes';
import { store } from './Components/Store/Store';
import {Provider} from "react-redux"





function App() {
  return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <PagesRoute />
            </BrowserRouter>
          </ThemeProvider>
      </Provider>

  )
}


export default App;

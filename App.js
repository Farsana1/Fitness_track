import React, { useState } from 'react';
import {ThemeProvider,styled} from "styled-components";
import {lightTheme} from "./utils/Themes";
import {BrowserRouter} from "react-router-dom";
import Authentication from "./pages/Authentication";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Tutorial from "./pages/Tutorial";
import Services from "./pages/Services";
import About from "./pages/About";
import {Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container=styled.div`
width:100%;
height:100%;
display:flex;
background:${({theme})=>theme.bg};
transition:all 0.2s ease;`;


function App() {
  const {currentUser}=useSelector((state)=>state.user)
  return (
    <ThemeProvider theme={lightTheme} >
      <BrowserRouter>
      {currentUser ? (<Container>
        <Navbar currentUser={currentUser}/>
        <Routes>
          <Route path="/"exact element={<Dashboard />}/>
          <Route path="/Workouts"exact element={<Workouts/>}/>
          <Route path="/Services"exact element={<Services/>}/>
          <Route path="/Tutorial"exact element={<Tutorial/>}/>
          <Route path="/About"exact element={<About/>}/>

        </Routes>
      </Container>):(
      <Container>
        <Authentication></Authentication>
      </Container>)}
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App;

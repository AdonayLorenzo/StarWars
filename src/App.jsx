import "./App.css";
import Home from "./pages/home/Home";
import Privacity from "./pages/privacity/Privacity";
import Gallery from './pages/gallery/Gallery';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./pages/data/Data";
import Chat from "./pages/chat/Chat";
import SignIn from "./pages/sign/Sign-In";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/h" element={<Home />}></Route>
          <Route path="/Chat" element={<Chat/>}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/Privacity" element={<Privacity />}></Route>
          <Route path="/Data" element={<Data></Data>}></Route>
          <Route path="/Sign-In" element={<SignIn></SignIn>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}


export default App

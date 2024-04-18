import "./App.css";
import Home from "./pages/home/Home";
import Privacity from "./pages/privacity/Privacity";
import Gallery from './pages/gallery/Gallery';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/h" element={<Home />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/Privacity" element={<Privacity />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App

import "./App.css";
import Home from "./pages/home/Home";
import Privacity from "./pages/privacity/Privacity";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/h" element={<Home />}></Route>
          <Route path="/Privacity" element={<Privacity />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App

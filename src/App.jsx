import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer"
import { Home, Shop, Help, Contact} from './components';

import './App.css';



function App() {
  return (
    <div className="App">
      <div className="bg-indigo-600 w-full h-screen"></div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={< Home />} />
            <Route path='/shop' exact element={< Shop />} />
            <Route path='/help' exact element={< Help />} />
            <Route path='/contact' exact element={< Contact />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

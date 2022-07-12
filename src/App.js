import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from "./pages/ContactPage";
import SignupPage from './pages/SignupPage';


function App() {
  return (
    <BrowserRouter>
      <div className="w-full flex flex-col ">
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<SignupPage/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
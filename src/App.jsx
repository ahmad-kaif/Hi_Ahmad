import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';          
import SideProjectsPage from './pages/SideProjectsPage'; 

export default function App() {
  return (
    <div className="min-h-screen  bg-[#0f0f0f] text-white font-sans">
      <main className="md:max-w-4xl md:mx-auto md:px-6  px-7 max-w-8xl mx-4">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/side-projects" element={<SideProjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

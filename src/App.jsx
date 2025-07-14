import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';          
import SideProjectsPage from './pages/SideProjectsPage'; 

export default function App() {
  return (
    <div className="min-h-screen  bg-[#0f0f0f] text-white font-sans">
      <main className="max-w-4xl mx-auto px-6">
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

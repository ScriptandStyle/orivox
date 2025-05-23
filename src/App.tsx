import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ScriptStylePage from './pages/ScriptStylePage';
import IdeationLabPage from './pages/IdeationLabPage';
import TransparentDisplayPage from './pages/TransparentDisplayPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import CrystalViewPitchDeck from './pages/CrystalViewPitchDeck';
import ImmersiLearnPage from './pages/ImmersiLearnPage';
import ExploreExoPage from './pages/ExploreExoPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/scriptstyle" element={<ScriptStylePage />} />
            <Route path="/ideation-lab" element={<IdeationLabPage />} />
            <Route path="/transparent-display" element={<TransparentDisplayPage />} />
            <Route path="/crystalview-pitch" element={<CrystalViewPitchDeck />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/immersilearn" element={<ImmersiLearnPage />} />
            <Route path="/exploreexo" element={<ExploreExoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 
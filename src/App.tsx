<<<<<<< HEAD
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/scriptstyle" element={<ScriptStylePage />} />
            <Route path="/ideation-lab" element={<IdeationLabPage />} />
            <Route path="/transparent-display" element={<TransparentDisplayPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

=======
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/scriptstyle" element={<ScriptStylePage />} />
            <Route path="/ideation-lab" element={<IdeationLabPage />} />
            <Route path="/transparent-display" element={<TransparentDisplayPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

>>>>>>> afd6d90ae3231788e4d9eaa669e5ce0cedbe91a2
export default App; 
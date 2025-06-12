import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Options from './components/Options';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/options" element={<Options />} />
        <Route path="/about" element={<Analytics />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;

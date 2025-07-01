import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Options from './components/Options';
import Footer from './components/Footer';
import FlashcardGame from './components/Flashcards';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Footer /> {/* ✅ Footer added to main page */}
            </>
          }
        />
        <Route path="/options" element={<Options />} />
        <Route path="/about" element={<Analytics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/englishfun" element={<FlashcardGame />} />
      </Routes>
    </Router>
  );
}

export default App;

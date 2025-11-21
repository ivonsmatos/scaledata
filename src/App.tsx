import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Home from './pages/Home';
import SolutionsPage from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-brand-bg font-sans text-brand-dark selection:bg-brand-primary selection:text-white flex flex-col">
          <SEO />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solucoes" element={<SolutionsPage />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    // Show chatbot automatically after 3 seconds
    const timer = setTimeout(() => {
      setShowChatbot(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServiceSection />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Chatbot isOpen={showChatbot} setIsOpen={setShowChatbot} />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ShopProvider } from './context/ShopContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ServiceQuoteModal } from './components/ServiceQuoteModal';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Shop } from './pages/Shop';
import { Admin } from './pages/Admin';
import { Contact } from './pages/Contact';

export const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    return ['home', 'about', 'services', 'shop', 'admin', 'contact'].includes(hash) ? hash : 'home';
  });

  useEffect(() => {
    window.location.hash = currentPage;
  }, [currentPage]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'services', 'shop', 'admin', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'shop':
        return <Shop />;
      case 'admin':
        return <Admin />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-brand-blue selection:text-white font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <CartDrawer />
      <ServiceQuoteModal />

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <ShopProvider>
        <AppContent />
      </ShopProvider>
    </LanguageProvider>
  );
}

export default App;

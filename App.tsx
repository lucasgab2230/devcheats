import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CheatsheetPage from './pages/CheatsheetPage';

function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleSelectCategory = (category: string) => {
    setActiveCategory(category);
    window.scrollTo(0, 0);
  };

  const handleGoHome = (hash?: string) => {
    setActiveCategory(null);
    // Usa setTimeout para permitir que o DOM seja atualizado antes de tentar rolar
    setTimeout(() => {
      if (hash) {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }, 0);
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Header onGoHome={handleGoHome} activeCategory={activeCategory} />
      <main>
        {!activeCategory ? (
          <LandingPage onSelectCategory={handleSelectCategory} />
        ) : (
          <CheatsheetPage category={activeCategory} onBack={() => handleGoHome()} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
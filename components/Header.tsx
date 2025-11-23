import React from 'react';

interface HeaderProps {
  onGoHome: (hash?: string) => void;
  activeCategory: string | null;
}

const Header: React.FC<HeaderProps> = ({ onGoHome, activeCategory }) => {
  const isHomePage = !activeCategory;

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isHomePage) {
      document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      onGoHome('#categories');
    }
  };
  
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div onClick={() => onGoHome()} className="flex items-center space-x-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-2xl font-bold text-white">DevCheats</span>
        </div>
        <div>
          <a href="#categories" onClick={handleExploreClick} className="px-4 py-2 text-white bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors duration-300">
            Explorar
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
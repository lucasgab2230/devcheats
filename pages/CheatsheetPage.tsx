import React, { useState } from 'react';
import { cheatsheetsData } from '../data/cheatsheets';

interface CheatsheetPageProps {
  category: string;
  onBack: () => void;
}

interface CheatsheetItemProps {
  title: string;
  content: string;
}

const CheatsheetItem: React.FC<CheatsheetItemProps> = ({ title, content }) => {
  const [copyText, setCopyText] = useState('Copiar');

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopyText('Copiado!');
    setTimeout(() => setCopyText('Copiar'), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg flex flex-col overflow-hidden">
      <div className="p-4 border-b border-slate-700">
        <h3 className="text-lg font-bold text-cyan-400">{title}</h3>
      </div>
      <div className="relative p-4 h-full">
        <pre className="text-sm text-slate-300 font-mono whitespace-pre-wrap overflow-x-auto h-full">
          <code>{content}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 bg-slate-700 hover:bg-slate-600 text-slate-300 px-3 py-1 rounded-md text-xs transition-colors"
        >
          {copyText}
        </button>
      </div>
    </div>
  );
};

const CheatsheetPage: React.FC<CheatsheetPageProps> = ({ category, onBack }) => {
  const data = cheatsheetsData[category] || [];

  return (
    <div className="container mx-auto px-6 py-12 animate-fade-in">
      <button onClick={onBack} className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8 group">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Voltar para Categorias</span>
      </button>

      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
          Cheatsheets de <span className="text-cyan-400">{category}</span>
        </h1>
        <p className="text-lg text-slate-400">
          Sua referência rápida para os comandos e sintaxes mais importantes.
        </p>
      </div>

      {data.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {data.map((item) => (
            <CheatsheetItem key={item.title} {...item} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-12">
            <p className="text-slate-400 text-xl">Oops! Nenhum cheatsheet encontrado para esta categoria ainda.</p>
        </div>
      )}
    </div>
  );
};

export default CheatsheetPage;

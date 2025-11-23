import React from 'react';
import SearchIcon from './icons/SearchIcon';
import CodeIcon from './icons/CodeIcon';
import PrinterIcon from './icons/PrinterIcon';

const featuresData = [
  {
    icon: <SearchIcon />,
    title: 'Pesquisa Rápida',
    description: 'Encontre a sintaxe ou comando que você precisa em segundos com nossa busca poderosa e otimizada.',
  },
  {
    icon: <CodeIcon />,
    title: 'Ampla Variedade de Tópicos',
    description: 'De JavaScript e Python a Docker e Kubernetes, temos uma vasta coleção para todas as suas necessidades.',
  },
  {
    icon: <PrinterIcon />,
    title: 'Pronto para Impressão',
    description: 'Layouts limpos e minimalistas perfeitos para imprimir e manter em sua mesa para referência rápida.',
  },
];

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-slate-800 p-6 rounded-lg text-center flex flex-col items-center border border-slate-700 hover:border-cyan-500 transition-colors duration-300">
    <div className="bg-slate-900 rounded-full p-4 mb-4 inline-flex text-cyan-400">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);


const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Por que DevCheats?</h2>
          <p className="text-lg text-slate-400 mt-2">Tudo que você precisa para acelerar seu desenvolvimento.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Acesso Rápido à <span className="text-cyan-400">Sabedoria</span> da Programação.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8">
          Pare de procurar. Comece a programar. As melhores cheatsheets para desenvolvedores, tudo em um só lugar.
        </p>
        <a href="#features" className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105 duration-300 inline-block">
          Descubra Mais
        </a>
      </div>
    </section>
  );
};

export default Hero;

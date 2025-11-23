import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-slate-950">
        <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto para Acelerar seu Workflow?</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                Junte-se a milhares de desenvolvedores que usam DevCheats para encontrar informações rapidamente e se concentrar no que realmente importa: construir coisas incríveis.
            </p>
            <a href="#categories" className="bg-cyan-500 text-white font-bold py-4 px-10 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105 duration-300 inline-block">
                Comece a Explorar Agora
            </a>
        </div>
    </section>
  );
};

export default CTA;

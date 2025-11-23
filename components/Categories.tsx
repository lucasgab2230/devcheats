import React from 'react';

const categoriesData = [
  { name: 'Programação', description: 'Python, JS, Go, Rust...', color: 'from-sky-500 to-cyan-400' },
  { name: 'Frontend', description: 'React, Vue, CSS, HTML...', color: 'from-emerald-500 to-green-400' },
  { name: 'Backend', description: 'Node.js, Django, SQL...', color: 'from-purple-500 to-indigo-400' },
  { name: 'DevOps', description: 'Docker, K8s, Terraform...', color: 'from-amber-500 to-yellow-400' },
  { name: 'Banco de Dados', description: 'PostgreSQL, Mongo, Redis...', color: 'from-rose-500 to-red-400' },
  { name: 'Ciência de Dados', description: 'Pandas, NumPy, Scikit...', color: 'from-blue-500 to-teal-400' },
];

interface CategoryCardProps {
  name: string;
  description: string;
  color: string;
  onSelectCategory: (name: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, description, color, onSelectCategory }) => (
  <div 
    className={`relative p-8 rounded-lg bg-slate-800 overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
    onClick={() => onSelectCategory(name)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectCategory(name)}
  >
    <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
    <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

interface CategoriesProps {
  onSelectCategory: (name: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Explore as Categorias</h2>
          <p className="text-lg text-slate-400 mt-2">Encontre cheatsheets para suas ferramentas e linguagens favoritas.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.map((category) => (
            <CategoryCard key={category.name} {...category} onSelectCategory={onSelectCategory} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

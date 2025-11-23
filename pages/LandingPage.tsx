import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Categories from '../components/Categories';
import CTA from '../components/CTA';

interface LandingPageProps {
  onSelectCategory: (category: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSelectCategory }) => {
  return (
    <>
      <Hero />
      <Features />
      <Categories onSelectCategory={onSelectCategory} />
      <CTA />
    </>
  );
};

export default LandingPage;

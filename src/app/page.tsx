 'use client';
import { useState } from 'react';
import { Toaster } from '../components/ui/sonner';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Courses } from '../components/Courses';
import { Mission } from '../components/Mission';
import { News } from '../components/News';
import { KnowledgeHub } from '../components/KnowledgeHub';
import { CIMICHandbook } from '../components/CIMICHandbook';
import { Footer } from '../components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'handbook'>('home');

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <About />
            <Courses />
            <Mission />
            <News />
            <KnowledgeHub onHandbookClick={() => setCurrentPage('handbook')} />
          </>
        ) : (
          <CIMICHandbook />
        )}
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}


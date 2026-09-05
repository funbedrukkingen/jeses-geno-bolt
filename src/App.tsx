import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Introduction } from '@/components/Introduction';
import { GenealogyTree } from '@/components/GenealogyTree';
import { CursedKings } from '@/components/CursedKings';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

function useEmbedMode() {
  const [isEmbed, setIsEmbed] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsEmbed(params.get('embed') === '1');
  }, []);

  return isEmbed;
}

function App() {
  const isEmbed = useEmbedMode();

  return (
    <div className="min-h-screen parchment-bg">
      {!isEmbed && <Header />}
      <main>
        <Hero isEmbed={isEmbed} />
        <Introduction />
        <GenealogyTree />
        <CursedKings />
      </main>
      {!isEmbed && <Footer />}
      {!isEmbed && <ScrollToTop />}
    </div>
  );
}

export default App;

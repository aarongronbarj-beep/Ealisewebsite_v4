import Nav from './components/Nav';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import Services from './components/Services';
import Flywheel from './components/Flywheel';
import DarkSignal from './components/DarkSignal';
import Work from './components/Work';
import Founders from './components/Founders';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <Flywheel />
        <DarkSignal />
        <Work />
        <Founders />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

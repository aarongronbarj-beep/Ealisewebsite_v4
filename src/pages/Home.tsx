import Hero from '../components/Hero';
import LogoStrip from '../components/LogoStrip';
import Services from '../components/Services';
import Flywheel from '../components/Flywheel';
import DarkSignal from '../components/DarkSignal';
import Work from '../components/Work';
import Founders from '../components/Founders';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Services />
      <Flywheel />
      <DarkSignal />
      <Work />
      <Founders />
      <Pricing />
      <Contact />
    </>
  );
}

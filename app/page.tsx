
import Hero from './ui-components/Hero';
import Navbar from './ui-components/NavbarPage';
import Features from './ui-components/Feature';
import HowItWorks from './ui-components/HowWork';
import CTAAndFooter from './ui-components/CTAFotter';

export default function Home() {
  return (
    <>
    <Navbar/>
     <Hero/>
     <Features/>
     <HowItWorks/>
     <CTAAndFooter/>

    </>
  );
}
import { setRequestLocale } from 'next-intl/server';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Capabilities from '@/components/Capabilities';
import FeaturedProject from '@/components/FeaturedProject';
import Work from '@/components/Work';
import Demos from '@/components/Demos';
import Stack from '@/components/Stack';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProofBar from '@/components/ProofBar';
import PortfolioGuide from '@/components/PortfolioGuide';
import HireCta from '@/components/HireCta';
import { routing, type Locale } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <Nav />
      <Hero />
      <ProofBar />
      <PortfolioGuide />
      <Capabilities />
      <FeaturedProject />
      <Work />
      <Demos />
      <Stack />
      <About />
      <HireCta />
      <Contact />
      <Footer />
    </div>
  );
}

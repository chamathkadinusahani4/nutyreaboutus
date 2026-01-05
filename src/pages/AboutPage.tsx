import { Helmet } from 'react-helmet-async';

import { Hero } from '../components/about/Hero';
import { WhoWeAre } from '../components/about/WhoWeAre';
import { VisionMission } from '../components/about/VisionMission';
import { ServicesGrid } from '../components/about/ServicesGrid';
import { WhyChoose } from '../components/about/WhyChoose';

export function AboutPage() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>About Us | NutYre Tyre & Vehicle Service Centre</title>

        <meta
          name="description"
          content="Learn more about NutYre, a trusted tyre and vehicle service centre committed to safety, quality workmanship, and customer satisfaction."
        />

        <meta
          name="keywords"
          content="NutYre, about NutYre, tyre service, vehicle servicing, wheel alignment, auto service centre"
        />

        {/* Open Graph */}
        <meta property="og:title" content="About Us | NutYre Tyre & Vehicle Service Centre" />
        <meta
          property="og:description"
          content="Discover NutYre’s story, expert team, and commitment to safe and reliable vehicle services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nutyre.com/about-us" />
        <meta property="og:image" content="https://www.nutyre.com/og-about.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | NutYre" />
        <meta
          name="twitter:description"
          content="NutYre is your trusted partner for tyre and vehicle care."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.nutyre.com/about-us" />
      </Helmet>

      {/* PAGE CONTENT */}
      <main className="min-h-screen bg-white text-black font-sans selection:bg-[#FDB913] selection:text-black">
        <Hero />
        <WhoWeAre />
        <VisionMission />
        <ServicesGrid />
        <WhyChoose />
      </main>
    </>
  );
}

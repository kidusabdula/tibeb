import AboutHero from '@/components/AboutHero';
import OurStory from '@/components/OurStory';
import OurValues from '@/components/OurValues';
import MeetTheArtisans from '@/components/MeetTheArtisans';
import OurImpact from '@/components/OurImpact';
import CTABanner from '@/components/CTABanner';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primaryBg text-textDark">
      <AboutHero />
      <OurStory />
      <OurValues />
      <MeetTheArtisans />
      <OurImpact />
      <CTABanner />
    </div>
  );
}

export const metadata = {
  title: 'Tibeb - About Us',
  description: 'Learn about Tibeb, our mission to preserve Ethiopian culture, and the artisans behind our traditional Habesha clothing.',
};

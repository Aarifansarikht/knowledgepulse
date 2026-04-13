import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/sections/Hero';
import Trust from '@/components/sections/Trust';
import Categories from '@/components/sections/Categories';
import CoursesGrid from '@/components/sections/CoursesGrid';
import HowItWorks from '@/components/sections/HowItWorks';
import Mentors from '@/components/sections/Mentors';
import Testimonials from '@/components/sections/Testimonials';
import Newsletter from '@/components/sections/Newsletter';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F1F8F6]">
      <Navbar />
      <Hero />
      <Trust />
      <CoursesGrid />
      <HowItWorks />
      <Mentors />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}

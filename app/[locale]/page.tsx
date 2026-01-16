import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Amenities from '@/components/Amenities';
import Rooms from '@/components/Rooms';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Amenities />
        <Rooms />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}

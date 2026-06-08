import { Navigation, Hero, FeaturedWork, About, Skills, Projects, Contact, Footer } from '@/components';
import Courses from '@/components/home/Courses';
import ScrollAnimations from '@/components/common/ScrollAnimations';
import ParticlesBackground from '@/components/common/ParticlesBackground';

export default function HomePage() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <ParticlesBackground />
      <Navigation />
      <Hero />
      <FeaturedWork />
      <About />
      <Skills />
      <Projects />
      <Courses />
      <Contact />
      <Footer />
      <ScrollAnimations />
    </div>
  );
}

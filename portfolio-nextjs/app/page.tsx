import { Navigation, Hero, About, Skills, Projects, Contact, Footer } from '@/components';
import ScrollAnimations from '@/components/common/ScrollAnimations';
import ParticlesBackground from '@/components/common/ParticlesBackground';

export default function HomePage() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <ParticlesBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollAnimations />
    </div>
  );
}

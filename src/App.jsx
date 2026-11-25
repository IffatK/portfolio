import { useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Achievements from './sections/Achievements.jsx';
import Process from './sections/Process.jsx';
import CurrentlyExploring from './sections/CurrentlyExploring.jsx';
import Contact from './sections/Contact.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    try {
      const context = gsap.context(() => {
        gsap.utils.toArray('.section-label,.about-heading,.about-content,.skills-header,.skill-row,.work-heading,.filter-bar,.project,.experience-left,.timeline-item,.awards-band,.process-heading,.process-step,.exploring-left,.explore-notes > div,.contact-headline,.contact-side').forEach((element) => {
          gsap.from(element, { y: 28, opacity: 0, duration: 0.75, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
        });
        gsap.from('.step-top i', { scaleX: 0, transformOrigin: 'left', duration: 0.8, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: '.process-steps', start: 'top 75%', once: true } });
      });
      return () => context.revert();
    } catch (error) {
      console.warn('Scroll animations are unavailable; showing the page without motion.', error);
      gsap.set('.section-label,.about-heading,.about-content,.skills-header,.skill-row,.work-heading,.filter-bar,.project,.experience-left,.timeline-item,.awards-band,.process-heading,.process-step,.exploring-left,.explore-notes > div,.contact-headline,.contact-side', { clearProps: 'all' });
    }
  }, []);

  return <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Process />
      <CurrentlyExploring />
    </main>
    <Contact />
    <a className="backtop-float" href="#top" aria-label="Back to top"><ArrowUp size={17}/></a>
  </>;
}

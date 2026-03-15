import { useRef, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import CustomCursor from './components/CustomCursor';
import Lenis from '@studio-freight/lenis';

function App() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <CustomCursor />
      
      {/* Premium Navigation Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1.5rem 6vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(238, 237, 228, 0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            HARSHITA GOUR
          </div>
          <div className="mono desktop-only" style={{ fontSize: '10px', opacity: 0.3, padding: '4px 10px', border: '1px solid rgba(238,237,228,0.1)', borderRadius: '20px' }}>
            PORTFOLIO v1.0
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
          <nav style={{ display: 'flex', gap: '30px' }} className="desktop-only">
            <a href="#about" className="nav-link interactive">ABOUT</a>
            <a href="#skills" className="nav-link interactive">SKILLS</a>
            <a href="#certificates" className="nav-link interactive">CERTIFICATES</a>
            <a href="#projects" className="nav-link interactive">PROJECTS</a>
            <a href="#contact" className="nav-link interactive">CONTACT</a>
          </nav>
          
          <div className="interactive" style={{ 
            height: '40px', width: '40px', borderRadius: '50%', 
            background: 'var(--brand-orange)', display: 'flex', 
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px var(--orange-glow)'
          }}>
            <div style={{ height: '2px', width: '18px', background: 'white' }} />
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Terminal />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>

      <footer style={{
        padding: '8rem 6vw 4rem 6vw',
        borderTop: '1px solid rgba(238, 237, 228, 0.05)',
        background: '#0a0a0a'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '4rem'
        }}>
          <div>
            <span className="section-label">GET IN TOUCH</span>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '400px' }}>
              Open for collaborations in Software Development, Web Design, and Data Analysis.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#" className="nav-link interactive">LINKEDIN</a>
              <a href="#" className="nav-link interactive">GITHUB</a>
            </div>
          </div>

          <div>
            <span className="section-label">SITE STATUS</span>
            <div className="mono" style={{ fontSize: '11px', opacity: 0.4, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span>[ST] SERVER: OPTIMAL</span>
              <span>[ST] WORKLOAD: NOMINAL</span>
              <span>[ST] INTEGRATION: COMPLETE</span>
              <span>[ST] LOAD TIME: 847MS</span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }} className="desktop-only text-right-align">
             <h2 style={{ fontSize: '4rem', opacity: 0.05, fontWeight: 900 }}>2025©</h2>
             <span className="mono" style={{ fontSize: '9px', opacity: 0.2 }}>DESIGNED_BY_HAPPY</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

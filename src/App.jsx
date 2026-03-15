import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, duration: 1.2, smoothWheel: true });
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <div className="grain-overlay" />
      <CustomCursor />
      <Loader onComplete={() => setLoading(false)} />

      <div style={{
        opacity: loading ? 0 : 1,
        transition: 'opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
        background: 'var(--bg-color)',
        minHeight: '100vh',
        position: 'relative'
      }}>

        {/* Professional Header Navigation */}
        <header className="header-nav" style={{
          height: '100px',
          borderBottom: '1px solid rgba(238,237,228,0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 6vw'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              HARSHITA GOUR
            </div>
            <div className="mono desktop-only" style={{ fontSize: '10px', opacity: 0.3, padding: '4px 10px', border: '1px solid rgba(238,237,228,0.1)', borderRadius: '20px' }}>
              PORTFOLIO v1.0
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '30px' }} className="desktop-only">
            <a href="#about" className="nav-link interactive">ABOUT</a>
            <a href="#skills" className="nav-link interactive">SKILLS</a>
            <a href="#certificates" className="nav-link interactive">CERTIFICATES</a>
            <a href="#projects" className="nav-link interactive">PROJECTS</a>
            <a href="#contact" className="nav-link interactive">CONTACT</a>
          </nav>
        </header>

        <main style={{ paddingBottom: '10vh' }}>
          <div id="about"><Hero /></div>
          <AboutSection />

          <div style={{ height: '20vh' }} />
          <div id="skills"><Skills /></div>

          <div style={{ height: '20vh' }} />
          <div id="certificates"><Certificates /></div>

          <div style={{ height: '20vh' }} />
          <div id="projects"><Projects /></div>

          <div style={{ height: '10vh' }} />
          <div id="contact"><Contact /></div>
        </main>

        <footer style={{ padding: '8vw 6vw', borderTop: '1px solid rgba(238,237,228,0.05)', background: 'rgba(0,0,0,0.2)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem'
          }}>
            <div>
              <span className="section-label">GET IN TOUCH</span>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '400px' }}>
                Open for collaborations in Predictive Modeling and Data Engineering.
              </p>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <a href="mailto:gourharshita850@gmail.com" className="nav-link interactive" style={{ opacity: 1, color: 'var(--brand-orange)' }}>EMAIL_INQUIRY</a>
                <a href="https://www.linkedin.com/in/harshitaagourr/" target="_blank" rel="noopener noreferrer" className="nav-link interactive">LINKEDIN_SYS</a>
              </div>
            </div>

            <div>
              <span className="section-label">CURRENT STATUS</span>
              <div className="mono" style={{ fontSize: '11px', opacity: 0.4, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span>[ST] SERVER: ONLINE</span>
                <span>[ST] FOCUS: OPEN FOR WORK</span>
                <span>[ST] UPDATED: MARCH 2025</span>
                <span>[ST] HEALTH: EXCELLENT</span>
              </div>
            </div>

            <div className="desktop-only" style={{ textAlign: 'right' }}>
              <span className="section-label">IDENTITY</span>
              <div style={{ fontSize: '3rem', fontWeight: 900, opacity: 0.05, letterSpacing: '-0.05em' }}>
                HARSHITA
              </div>
              <div className="mono" style={{ fontSize: '10px', opacity: 0.3 }}>© 2026_ALL_RIGHTS_RESERVED</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

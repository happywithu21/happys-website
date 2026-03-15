import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section className="container" id="contact" style={{ padding: 'clamp(5vh, 10vh, 15vh) 0' }}>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '4vw' 
            }}>
                {/* Left Side: Messaging */}
                <div>
                    <span className="section-label">CONTACT ME</span>
                    <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
                        READY TO <span style={{ color: 'var(--brand-orange)' }}>CONNECT?</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.7, lineHeight: 1.6, maxWidth: '500px', marginBottom: '4rem' }}>
                        Open for collaborations in Software Development, Web Design, and Data Analysis. Let's build something great together.
                    </p>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ 
                                width: '50px', height: '50px', borderRadius: '50%', 
                                background: 'rgba(238,237,228,0.05)', display: 'flex', 
                                alignItems: 'center', justifyContent: 'center' 
                            }}>
                                <Mail size={20} style={{ color: 'var(--brand-orange)' }} />
                            </div>
                            <div>
                                <span className="mono" style={{ fontSize: '10px', opacity: 0.4, display: 'block' }}>EMAIL</span>
                                <a href="mailto:gourharshita850@gmail.com" className="mono interactive" style={{ fontSize: '14px', textDecoration: 'none', color: 'var(--text-main)' }}>gourharshita850@gmail.com</a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ 
                                width: '50px', height: '50px', borderRadius: '50%', 
                                background: 'rgba(238,237,228,0.05)', display: 'flex', 
                                alignItems: 'center', justifyContent: 'center' 
                            }}>
                                <Linkedin size={20} style={{ color: 'var(--brand-orange)' }} />
                            </div>
                            <div>
                                <span className="mono" style={{ fontSize: '10px', opacity: 0.4, display: 'block' }}>LINKEDIN</span>
                                <a href="https://www.linkedin.com/in/harshitaagourr/" target="_blank" rel="noopener noreferrer" className="mono interactive" style={{ fontSize: '14px', textDecoration: 'none', color: 'var(--text-main)' }}>IN/HARSHITAAGOURR</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Quick Action */}
                <div className="contact-form-side" style={{ 
                    borderLeft: '1px solid rgba(238,237,228,0.05)', 
                    paddingLeft: 'clamp(2rem, 4vw, 4rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <div style={{ marginBottom: '3rem' }}>
                        <span className="mono" style={{ fontSize: '11px', color: 'var(--brand-orange)' }}>[ QUICK CONTACT ]</span>
                    </div>

                    <form layout="vertical" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ borderBottom: '1px solid rgba(238,237,228,0.1)', paddingBottom: '0.5rem' }}>
                                <span className="mono" style={{ fontSize: '9px', opacity: 0.5 }}>YOUR NAME</span>
                                <p className="mono" style={{ fontSize: '13px', margin: '5px 0' }}>// Say hello...</p>
                            </div>
                            <div style={{ borderBottom: '1px solid rgba(238,237,228,0.1)', paddingBottom: '0.5rem' }}>
                                <span className="mono" style={{ fontSize: '9px', opacity: 0.5 }}>MESSAGE</span>
                                <p className="mono" style={{ fontSize: '13px', margin: '5px 0' }}>// Tell me about your project...</p>
                            </div>
                        </div>

                        <button 
                            className="interactive"
                            style={{
                                background: 'var(--brand-orange)',
                                color: 'white',
                                border: 'none',
                                padding: '1rem 2rem',
                                borderRadius: '4px',
                                fontWeight: 700,
                                fontSize: '12px',
                                letterSpacing: '0.1em',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                width: 'fit-content',
                                marginTop: '1rem',
                                boxShadow: '0 10px 20px rgba(255, 85, 0, 0.2)'
                            }}
                        >
                            SEND MESSAGE
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section className="container" style={{ padding: '15vh 0 10vh 0' }}>
            <div className="dot-grid data-card" style={{ padding: '6rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6vw', background: 'rgba(255, 85, 0, 0.02)', borderColor: 'rgba(255, 85, 0, 0.2)' }}>

                {/* Left Side: Messaging */}
                <div>
                    <span className="section-label">COMMUNICATION_PROTOCOL / 004</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
                        READY TO <span style={{ color: 'var(--brand-orange)' }}>OPTIMIZE?</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.7, lineHeight: 1.6, maxWidth: '500px', marginBottom: '4rem' }}>
                        Open for advanced projects in Machine Learning, Statistical Analysis, and Architectural Optimization. Let's build something intelligent.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div className="interactive" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ color: 'var(--brand-orange)' }}><Mail size={20} /></div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span className="mono" style={{ fontSize: '9px', opacity: 0.4 }}>DIRECT_MAIL</span>
                                <a href="mailto:gourharshita850@gmail.com" style={{ fontSize: '14px', color: 'var(--text-main)', textDecoration: 'none' }}>gourharshita850@gmail.com</a>
                            </div>
                        </div>
                        <div className="interactive" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ color: 'var(--brand-orange)' }}><Linkedin size={20} /></div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span className="mono" style={{ fontSize: '9px', opacity: 0.4 }}>NETWORK_SYS</span>
                                <a href="https://www.linkedin.com/in/harshitaagourr/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'var(--text-main)', textDecoration: 'none' }}>harshitaagourr</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Quick Action / Form Style */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid rgba(238,237,228,0.05)', paddingLeft: '6vw' }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '2rem', border: '1px solid rgba(238,237,228,0.1)' }}>
                        <span className="mono" style={{ fontSize: '10px', opacity: 0.3, display: 'block', marginBottom: '2rem' }}>[ SYSTEM_QUICK_CONNECT ]</span>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ borderBottom: '1px solid rgba(238,237,228,0.1)', paddingBottom: '0.5rem' }}>
                                <span className="mono" style={{ fontSize: '9px', opacity: 0.5 }}>NAME_INPUT</span>
                                <p className="mono" style={{ fontSize: '13px', margin: '5px 0' }}>// TYPE_HERE</p>
                            </div>
                            <div style={{ borderBottom: '1px solid rgba(238,237,228,0.1)', paddingBottom: '0.5rem' }}>
                                <span className="mono" style={{ fontSize: '9px', opacity: 0.5 }}>MESSAGE_BUFFER</span>
                                <p className="mono" style={{ fontSize: '13px', margin: '5px 0' }}>// TRANSMIT_DATA</p>
                            </div>
                        </div>

                        <button
                            className="interactive mono"
                            style={{
                                marginTop: '3rem',
                                width: '100%',
                                background: 'var(--brand-orange)',
                                border: 'none',
                                color: 'white',
                                padding: '1.2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                fontSize: '12px',
                                fontWeight: 900,
                                cursor: 'pointer',
                                boxShadow: '0 0 20px var(--orange-glow)'
                            }}
                        >
                            INITIALIZE_TRANSMISSION <Send size={16} />
                        </button>
                    </div>

                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', opacity: 0.4 }}>
                        <a href="https://github.com/happywithu21" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                            <Github size={18} className="interactive" />
                        </a>
                        <MessageSquare size={18} className="interactive" />
                    </div>
                </div>

            </div>
        </section>
    );
}

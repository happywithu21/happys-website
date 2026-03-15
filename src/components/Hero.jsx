import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section ref={containerRef} className="dot-grid" style={{ minHeight: '85vh', display: 'flex', alignItems: 'flex-start' }}>

            <div className="container" style={{
                zIndex: 10,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4vw',
                alignItems: 'center',
                paddingTop: '8vh', /* Reduced from 15vh */
                paddingBottom: '5vh'
            }}>

                {/* Left: Professional Bio & Identity */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="section-label">INTRODUCTION</span>
                    <h1 style={{ marginBottom: '2rem' }}>
                        HARSHITA<br />
                        <span style={{ color: 'var(--brand-orange)' }}>GOUR.</span>
                    </h1>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '500px', opacity: 0.8 }}>
                        Data Science student & Full Stack Developer at LPU, passionate about building intelligent data solutions and solving complex engineering problems.
                    </p>

                    <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        <div>
                            <span className="mono" style={{ fontSize: '10px', opacity: 0.4, display: 'block', marginBottom: '0.5rem' }}>LOCATION</span>
                            <span className="mono" style={{ fontSize: '12px' }}>PUNJAB, INDIA</span>
                        </div>
                        <div>
                            <span className="mono" style={{ fontSize: '10px', opacity: 0.4, display: 'block', marginBottom: '0.5rem' }}>FOCUS</span>
                            <span className="mono" style={{ fontSize: '12px' }}>DATA SCIENCE & ML</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Technical Metadata Panel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="data-card"
                    style={{ marginTop: '2rem' }}
                >
                    <span className="section-label">TECHNICAL OVERVIEW</span>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        {[
                            { label: 'STATUS', value: 'OPEN FOR WORK', color: '#00ff00' },
                            { label: 'STACK', value: 'PYTHON / SQL / REACT', color: 'var(--text-main)' },
                            { label: 'DOMAIN', value: 'DATA SCIENCE', color: 'var(--brand-orange)' },
                            { label: 'AVAILABILITY', value: 'REMOTE / HYBRID', color: 'var(--text-main)' }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(238,237,228,0.1)', paddingBottom: '0.5rem', gap: '1rem' }}>
                                <span className="mono" style={{ fontSize: '10px', opacity: 0.5 }}>{item.label}</span>
                                <span className="mono" style={{ fontSize: '10px', color: item.color, textAlign: 'right' }}>{item.value}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '2.5rem', height: '60px', width: '100%', position: 'relative' }}>
                        {/* Decorative Analytical Sparkle */}
                        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'linear-gradient(90deg, var(--brand-orange) 1px, transparent 1px)', backgroundSize: '15px 100%' }} />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '1px', background: 'var(--brand-orange)', opacity: 0.3 }} />
                    </div>
                </motion.div>

            </div>

            {/* Reactive Glow Follower */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none',
                background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255, 85, 0, 0.03), transparent 70%)`
            }} />
        </section>
    );
}

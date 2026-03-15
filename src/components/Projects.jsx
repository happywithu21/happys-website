import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Shield, Activity, BarChart2, Laptop } from 'lucide-react';

import animeViz from '../assets/anime_viz.png';

const projects = [
    {
        id: '01',
        title: 'ANIME RECOMMENDER',
        category: 'DATA_VIZ',
        icon: <BarChart2 size={40} />,
        image: animeViz,
        description: 'A recommendation system built with Python and Power BI to analyze and suggest anime content based on user preferences.',
        insight: 'Personalized results using collaborative filtering.',
        tech: ['Python', 'Power BI', 'Scikit-learn', 'SciPy']
    },
    {
        id: '02',
        title: 'CPU SCHEDULER',
        category: 'SYSTEMS',
        icon: <Activity size={40} />,
        description: 'A C++ simulation of CPU scheduling algorithms to optimize performance and resource allocation.',
        insight: 'Optimized response time across processes.',
        tech: ['C++', 'Multithreading', 'Kernel']
    },
    {
        id: '03',
        title: 'NEXUS SHOOTER',
        category: 'SIMULATION',
        icon: <BarChart2 size={40} />,
        description: 'An interactive physics-based simulation created using JavaScript and HTML5 Canvas.',
        insight: 'Smooth rendering of 10,000+ particles.',
        tech: ['JS', 'Canvas', 'Physics']
    },
    {
        id: '04',
        title: 'BLENDER MOTION',
        category: '3D_MODELING',
        icon: <Laptop size={40} />,
        description: 'Cinematic 3D character modeling and high-fidelity rendering systems.',
        insight: 'Real-time ray-traced data viz.',
        tech: ['Blender', 'Python', 'Render']
    }
];

export default function Projects() {
    const targetRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const { scrollYProgress } = useScroll({ target: isMobile ? null : targetRef });

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Transform vertical scroll to horizontal movement for desktop
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    if (isMobile) {
        return (
            <div className="container" id="projects" style={{ padding: '5vh 0' }}>
                <span className="section-label">FEATURED PROJECTS</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {projects.map((project, idx) => (
                        <div
                            key={project.id}
                            className="data-card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                border: '1px solid rgba(238, 237, 228, 0.05)'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="mono" style={{ fontSize: '10px', opacity: 0.3 }}>PROJECT_00{idx + 1}</span>
                                <span className="mono" style={{ fontSize: '10px', color: 'var(--brand-orange)' }}>{project.category}</span>
                            </div>

                            {project.image && (
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px', border: '1px solid rgba(255, 85, 0, 0.1)' }} />
                            )}

                            <h3 style={{ fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase' }}>{project.title}</h3>

                            <p style={{ fontSize: '1rem', opacity: 0.6, lineHeight: 1.4 }}>{project.description}</p>

                            <div style={{ borderTop: '1px solid rgba(238, 237, 228, 0.05)', paddingTop: '1rem' }}>
                                <span className="section-label" style={{ fontSize: '8px', marginBottom: '0.5rem' }}>KEY ACHIEVEMENT</span>
                                <p className="mono" style={{ fontSize: '11px', color: 'var(--brand-orange)' }}>» {project.insight}</p>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                {project.tech.map(t => (
                                    <span key={t} className="mono" style={{ fontSize: '9px', background: 'rgba(255, 85, 0, 0.1)', color: 'var(--brand-orange)', padding: '2px 8px' }}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div style={{ height: '300vh' }} id="projects" ref={targetRef} className="dot-grid desktop-only">
            <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

                {/* Section Title - Stays static on the left */}
                <div style={{ position: 'absolute', top: '10vh', left: '6vw', zIndex: 100 }}>
                    <span className="section-label">FEATURED PROJECTS</span>
                    <h2 style={{ fontSize: '12.8px', opacity: 0.5, marginTop: '1rem' }}>[ SCROLL TO EXPLORE ]</h2>
                </div>

                {/* Horizontal Moving Content */}
                <motion.div style={{ x, display: 'flex', gap: '4vw', padding: '0 6vw' }}>
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            className="data-card"
                            style={{
                                width: '70vw',
                                height: '60vh',
                                flexShrink: 0,
                                display: 'grid',
                                gridTemplateColumns: 'minmax(250px, 1fr) 2fr',
                                gap: '4vw',
                                padding: '4rem',
                                position: 'relative',
                                background: 'rgba(238, 237, 228, 0.02)',
                                border: '1px solid rgba(238, 237, 228, 0.05)'
                            }}
                        >
                            {/* Vertical Side ID */}
                            <div
                                className="mono"
                                style={{
                                    position: 'absolute', right: '2rem', top: '4rem',
                                    writingMode: 'vertical-rl', fontSize: '10px', opacity: 0.2,
                                    letterSpacing: '0.5em'
                                }}
                            >
                                PROJECT_00{idx + 1}
                            </div>

                            {/* Icon & Category Box / Project Image */}
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                                {project.image ? (
                                    <div style={{
                                        width: '100%',
                                        height: '200px',
                                        backgroundImage: `url(${project.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        border: '1px solid rgba(255, 85, 0, 0.2)',
                                        borderRadius: '4px',
                                        marginBottom: '2rem',
                                        filter: 'grayscale(0.5) contrast(1.2)',
                                        boxShadow: '0 0 20px rgba(255, 85, 0, 0.1)'
                                    }} />
                                ) : (
                                    <div style={{ color: 'var(--brand-orange)', opacity: 0.6 }}><div style={{ marginBottom: '2rem' }}>{project.icon}</div></div>
                                )}
                                <div>
                                    <span className="section-label" style={{ fontSize: '9px', marginBottom: '0.5rem' }}>TECH STACK</span>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                        {project.tech.map(t => (
                                            <span key={t} className="mono" style={{ fontSize: '10px', background: 'rgba(255, 85, 0, 0.1)', color: 'var(--brand-orange)', padding: '2px 8px' }}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 5rem)', fontWeight: 700, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                                        {project.title}
                                    </h3>
                                </div>

                                <p style={{ fontSize: '1.2rem', lineHeight: 1.5, opacity: 0.7, marginBottom: '3rem', maxWidth: '600px' }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                                    <div>
                                        <span className="section-label" style={{ fontSize: '9px', marginBottom: '0.5rem' }}>KEY ACHIEVEMENT</span>
                                        <p className="mono" style={{ fontSize: '12px', color: 'var(--brand-orange)' }}>» {project.insight}</p>
                                    </div>

                                    <div
                                        className="interactive"
                                        style={{
                                            width: '60px', height: '60px', borderRadius: '50%',
                                            border: '1px solid rgba(238,237,228,0.2)', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center',
                                            marginLeft: 'auto'
                                        }}
                                    >
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>
                            </div>

                            {/* Background Large Index Number */}
                            <div style={{
                                position: 'absolute', bottom: '-5%', right: '10%',
                                fontSize: '15rem', fontWeight: 900, opacity: 0.02,
                                zIndex: -1, pointerEvents: 'none'
                            }}>
                                {project.id}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Progress Bar at the bottom */}
                <div style={{ position: 'absolute', bottom: '8vh', left: '6vw', width: '88vw', height: '1px', background: 'rgba(238, 237, 228, 0.1)' }}>
                    <motion.div
                        style={{ scaleX: scrollYProgress, transformOrigin: 'left', width: '100%', height: '100%', background: 'var(--brand-orange)' }}
                    />
                </div>

            </div>
        </div>
    );
}

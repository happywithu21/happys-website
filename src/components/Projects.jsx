import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Shield, Activity, BarChart2, Laptop } from 'lucide-react';

import animeViz from '../assets/anime_viz.png';

const projects = [
    {
        id: '01',
        title: 'ANIME RECOMMENDER',
        category: 'RECSYS_&_VIZ',
        icon: <BarChart2 size={40} />,
        image: animeViz,
        description: 'Advanced hybrid recommendation engine utilizing content-based and collaborative filtering with deep Power BI analytical synthesis.',
        insight: 'Achieved high-precision personalization using TruncatedSVD dimensionality reduction.',
        tech: ['Python', 'Power BI', 'Scikit-learn', 'SciPy']
    },
    {
        id: '02',
        title: 'CPU SCHEDULER',
        category: 'ALGORITHMIC',
        icon: <Activity size={40} />,
        description: 'Energy-efficient CPU scheduling designed for massive data-center workload distribution.',
        insight: '12% Energy efficiency gain.',
        tech: ['C++', 'Multithreading', 'Kernel']
    },
    {
        id: '03',
        title: 'NEXUS SHOOTER',
        category: 'ENGINE_VIZ',
        icon: <BarChart2 size={40} />,
        description: 'High-performance physics engine designed for high-velocity data interaction visualization.',
        insight: '10k+ concurrent active particles.',
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
    const { scrollYProgress } = useScroll({ target: targetRef });

    // Transform vertical scroll to horizontal movement
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <div style={{ height: '300vh' }} ref={targetRef} className="dot-grid">
            <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

                {/* Section Title - Stays static on the left */}
                <div style={{ position: 'absolute', top: '10vh', left: '6vw', zIndex: 100 }}>
                    <span className="section-label">SELECTED_R&D_SHOWCASE</span>
                    <h2 style={{ fontSize: '12.8px', opacity: 0.5, marginTop: '1rem' }}>[ SCROLL_TO_NAVIGATE ]</h2>
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
                                RECORD_INDEX_00{idx + 1}
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
                                    <span className="section-label" style={{ fontSize: '9px', marginBottom: '0.5rem' }}>TECH_STACK</span>
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
                                    <h3 style={{ fontSize: 'clamp(2rem, 5vw, 6rem)', fontWeight: 700, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                                        {project.title}
                                    </h3>
                                </div>

                                <p style={{ fontSize: '1.2rem', lineHeight: 1.5, opacity: 0.7, marginBottom: '3rem', maxWidth: '600px' }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                                    <div>
                                        <span className="section-label" style={{ fontSize: '9px', marginBottom: '0.5rem' }}>CRITICAL_INSIGHT</span>
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

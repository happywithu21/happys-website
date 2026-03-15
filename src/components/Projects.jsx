import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import animeViz from '../assets/anime_viz.png';

const projects = [
    {
        id: '01',
        title: 'ANIME RECOMMENDER',
        subtitle: 'DATA INTELLIGENCE',
        image: animeViz,
        tech: ['Python', 'Power BI'],
        glow: 'rgba(255, 85, 0, 0.4)'
    },
    {
        id: '02',
        title: 'CPU SCHEDULER',
        subtitle: 'SYSTEMS OPTIMIZATION',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
        tech: ['C++', 'Multithreading'],
        glow: 'rgba(0, 242, 255, 0.3)'
    },
    {
        id: '03',
        title: 'NEXUS SHOOTER',
        subtitle: 'INTERACTIVE SIMULATION',
        image: 'https://images.unsplash.com/photo-1614728263952-84ea206f9c45?auto=format&fit=crop&q=80&w=1000',
        tech: ['JS', 'Canvas'],
        glow: 'rgba(192, 132, 252, 0.3)'
    },
    {
        id: '04',
        title: 'BLENDER MOTION',
        subtitle: '3D VISUALIZATION',
        image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=1000',
        tech: ['Blender', 'Python'],
        glow: 'rgba(255, 255, 255, 0.2)'
    }
];

export default function Projects() {
    const [index, setIndex] = useState(0);
    const [isMovingForward, setIsMovingForward] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (isMovingForward) {
                    if (prev === projects.length - 1) {
                        setIsMovingForward(false);
                        return prev - 1;
                    }
                    return prev + 1;
                } else {
                    if (prev === 0) {
                        setIsMovingForward(true);
                        return prev + 1;
                    }
                    return prev - 1;
                }
            });
        }, 5000); 

        return () => clearInterval(interval);
    }, [isMovingForward]);

    return (
        <section id="work" style={{ 
            padding: '20vh 0', 
            background: '#0a0a0a', 
            overflow: 'hidden',
            position: 'relative',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <div style={{ position: 'absolute', top: '5vh', left: '6vw', opacity: 0.05, zIndex: 0 }}>
                <h2 style={{ fontSize: '20vw', fontWeight: 900, margin: 0, color: '#fff' }}>WORK</h2>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ padding: '0 6vw', marginBottom: '6vh' }}>
                    <span className="section-label">SELECTED PROJECTS</span>
                </div>

                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    position: 'relative',
                    width: '100%',
                    height: '60vh'
                }}>
                    <motion.div 
                        animate={{ x: `-${index * 540}px` }} 
                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                        style={{ 
                            display: 'flex', 
                            gap: '40px',
                            padding: '0 calc(50% - 250px)', 
                        }}
                    >
                        {projects.map((project, idx) => (
                            <ProjectCard 
                                key={idx} 
                                project={project} 
                                isActive={idx === index} 
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            <div style={{ position: 'absolute', bottom: '10vh', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '15px' }}>
                {projects.map((_, i) => (
                    <div key={i} style={{ 
                        width: '8px', height: '8px', borderRadius: '50%',
                        background: i === index ? 'var(--brand-orange)' : 'rgba(255,255,255,0.1)',
                        transition: 'all 0.5s ease',
                        transform: i === index ? 'scale(1.5)' : 'scale(1)'
                    }} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project, isActive }) {
    return (
        <motion.div
            animate={{ 
                scale: isActive ? 1.1 : 0.85,
                opacity: isActive ? 1 : 0.2,
                boxShadow: isActive ? `0 0 80px ${project.glow}` : '0 0 0px transparent'
            }}
            transition={{ duration: 0.8 }}
            style={{
                width: '500px',
                flexShrink: 0,
                background: 'rgba(238, 237, 228, 0.02)',
                border: isActive ? '1.5px solid var(--brand-orange)' : '1px solid rgba(255,255,255,0.05)',
                borderRadius: '24px',
                padding: '2.5rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                backdropFilter: isActive ? 'blur(0px)' : 'blur(8px)',
            }}
        >
            <div style={{ 
                width: '100%', 
                height: '280px', 
                borderRadius: '16px', 
                overflow: 'hidden',
                background: '#000'
            }}>
                <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    animate={{ filter: isActive ? 'grayscale(0)' : 'grayscale(1)' }}
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                    }} 
                />
            </div>
            
            <div style={{ marginTop: '1rem' }}>
                <span className="mono" style={{ fontSize: '11px', color: 'var(--brand-orange)' }}>
                    {project.subtitle}
                </span>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
                        {project.title}
                    </h3>
                    <ArrowUpRight size={24} style={{ opacity: isActive ? 1 : 0 }} />
                </div>

                <div style={{ display: 'flex', gap: '8px', marginTop: '1.5rem' }}>
                    {project.tech.map((t, i) => (
                        <span key={i} className="mono" style={{ fontSize: '10px', padding: '5px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

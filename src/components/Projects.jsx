import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import animeViz from '../assets/anime_viz.png';

const projects = [
    {
        id: '01',
        title: 'ANIME RECOMMENDER',
        subtitle: 'DATA INTELLIGENCE',
        image: animeViz,
        description: 'A recommendation system built with Python and Power BI to analyze and suggest anime content based on user preferences.',
        tech: ['Python', 'Power BI', 'Scikit-learn']
    },
    {
        id: '02',
        title: 'CPU SCHEDULER',
        subtitle: 'SYSTEMS OPTIMIZATION',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
        description: 'A C++ simulation of CPU scheduling algorithms to optimize performance and resource allocation.',
        tech: ['C++', 'Multithreading', 'Kernel']
    },
    {
        id: '03',
        title: 'NEXUS SHOOTER',
        subtitle: 'INTERACTIVE SIMULATION',
        image: 'https://images.unsplash.com/photo-1614728263952-84ea206f9c45?auto=format&fit=crop&q=80&w=1000',
        description: 'An interactive physics-based simulation created using JavaScript and HTML5 Canvas.',
        tech: ['JS', 'Canvas', 'Physics']
    },
    {
        id: '04',
        title: 'BLENDER MOTION',
        subtitle: '3D VISUALIZATION',
        image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=1000',
        description: 'Cinematic 3D character modeling and high-fidelity rendering systems.',
        tech: ['Blender', 'Python', 'Render']
    }
];

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [activeIndex]);

    const nextSlide = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const goToSlide = (index) => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    return (
        <section id="projects" style={{ height: '100vh', position: 'relative', overflow: 'hidden', background: '#0a0a0a' }}>
            <div style={{ 
                position: 'absolute', inset: 0, 
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                backgroundSize: '10vw 10vh',
                zIndex: 0
            }} />

            <div style={{ position: 'absolute', top: '10vh', left: '6vw', zIndex: 10 }}>
                <h2 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 900, opacity: 0.05, color: '#fff', margin: 0 }}>PROJECTS</h2>
            </div>

            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                <AnimatePresence initial={false} custom={direction}>
                    <ProjectCard 
                        key={activeIndex}
                        project={projects[activeIndex]}
                        index={activeIndex}
                        direction={direction}
                    />
                </AnimatePresence>
            </div>

            <div style={{ position: 'absolute', bottom: '8vh', left: '6vw', display: 'flex', gap: '1.2rem', zIndex: 100 }}>
                {projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        style={{ 
                            width: activeIndex === i ? '30px' : '8px', 
                            height: '8px', 
                            borderRadius: '10px', 
                            border: 'none',
                            background: activeIndex === i ? 'var(--brand-orange)' : 'rgba(255,255,255,0.2)',
                            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                            padding: 0,
                            cursor: 'pointer'
                        }} 
                    />
                ))}
            </div>

            <div 
                onClick={nextSlide}
                className="interactive"
                style={{ 
                    position: 'absolute', bottom: '8vh', right: '6vw', 
                    display: 'flex', alignItems: 'center', gap: '1rem', 
                    opacity: 0.6, zIndex: 100, cursor: 'pointer'
                }}
            >
                <span className="mono" style={{ fontSize: '11px', letterSpacing: '0.2em' }}>NEXT_CASE</span>
                <ArrowRight size={18} />
            </div>
        </section>
    );
}

function ProjectCard({ project, index, direction }) {
    const variants = {
        enter: (d) => ({
            x: d > 0 ? '100%' : '-100%',
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            zIndex: 2
        }),
        center: {
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            zIndex: 2
        },
        exit: (d) => ({
            x: 0,
            opacity: 0.4,
            filter: 'blur(20px)',
            scale: 0.95,
            zIndex: 1
        })
    };

    return (
        <motion.div
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: { type: "spring", stiffness: 40, damping: 20 },
                opacity: { duration: 1.2 },
                filter: { duration: 1.2 }
            }}
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 6vw'
            }}
        >
            <div style={{ width: '100%', maxWidth: '1200px', display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.2fr', gap: '4vw', alignItems: 'center' }}>
                <div style={{ pointerEvents: 'auto' }}>
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="section-label" 
                        style={{ color: 'var(--brand-orange)', marginBottom: '1.5rem' }}
                    >
                        {project.subtitle}
                    </motion.span>
                    
                    <motion.h3 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        style={{ 
                            fontSize: 'clamp(2.5rem, 6vw, 6rem)', 
                            fontWeight: 900, 
                            lineHeight: 0.9, 
                            margin: '1.5rem 0 2.5rem 0',
                            textTransform: 'uppercase',
                            color: '#fff',
                            letterSpacing: '-0.04em'
                        }}
                    >
                        {project.title.split(' ').map((word, i) => (
                            <span key={i} style={{ display: 'block' }}>{word}</span>
                        ))}
                    </motion.h3>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 0.7 }}
                        style={{ fontSize: '1.1rem', maxWidth: '450px', lineHeight: 1.7, marginBottom: '3.5rem' }}
                    >
                        {project.description}
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        style={{ display: 'flex', gap: '1rem' }}
                    >
                        {project.tech.map((t, i) => (
                            <span key={i} className="mono" style={{ fontSize: '10px', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '4px' }}>{t}</span>
                        ))}
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 1.1, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    style={{ position: 'relative', height: '65vh', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}
                >
                    <div style={{ 
                        width: '100%', height: '100%', 
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
                </motion.div>
            </div>
        </motion.div>
    );
}

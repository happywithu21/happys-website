import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const [activeIndex, setActiveIndex] = useState(0);

    // Sync active index with scroll progress
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const index = Math.min(
                Math.floor(latest * projects.length),
                projects.length - 1
            );
            setActiveIndex(index);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section ref={sectionRef} id="projects" style={{ height: `${projects.length * 100}vh`, position: 'relative' }}>
            <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden', background: '#0a0a0a' }}>
                
                {/* Background Grid */}
                <div style={{ 
                    position: 'absolute', inset: 0, 
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                    backgroundSize: '10vw 10vh',
                    zIndex: 0
                }} />

                {/* Floating "PROJECTS" Title */}
                <div style={{ position: 'absolute', top: '10vh', left: '6vw', zIndex: 5 }}>
                    <h2 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 900, opacity: 0.1, color: '#fff', margin: 0 }}>PROJECTS</h2>
                </div>

                {/* Project Stack */}
                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {projects.map((project, index) => {
                        return <ProjectCard key={project.id} project={project} index={index} total={projects.length} scrollYProgress={scrollYProgress} />;
                    })}
                </div>

                {/* Navigation Controls */}
                <div style={{ position: 'absolute', bottom: '10vh', left: '0', width: '100%', padding: '0 6vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
                    {/* Dots */}
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {projects.map((_, i) => (
                            <div key={i} style={{ 
                                width: '8px', height: '8px', borderRadius: '50%', 
                                background: activeIndex === i ? 'var(--brand-orange)' : 'rgba(255,255,255,0.2)',
                                transition: 'all 0.3s ease',
                                transform: activeIndex === i ? 'scale(1.5)' : 'scale(1)'
                            }} />
                        ))}
                    </div>

                    {/* Next Indicator */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: activeIndex === projects.length - 1 ? 0 : 0.6 }}>
                        <span className="mono" style={{ fontSize: '12px', letterSpacing: '0.2em' }}>NEXT</span>
                        <ArrowRight size={20} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index, total, scrollYProgress }) {
    const start = index / total;
    const end = (index + 1) / total;
    
    // Slide in effect: comes from right
    const x = useTransform(scrollYProgress, [start - 0.1, start], ["100%", "0%"]);
    const opacity = useTransform(scrollYProgress, [end, end + 0.1], [1, 0]);
    const scale = useTransform(scrollYProgress, [end, end + 0.1], [1, 0.9]);

    return (
        <motion.div
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                x,
                zIndex: index,
                padding: '0 6vw'
            }}
        >
            <motion.div 
                style={{ opacity, scale, width: '100%', maxWidth: '1200px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2vw', alignItems: 'center', position: 'relative' }}
            >
                {/* Content Side */}
                <div style={{ zIndex: 2 }}>
                    <span className="section-label" style={{ color: 'var(--brand-orange)', marginBottom: '1rem' }}>{project.subtitle}</span>
                    <h3 style={{ 
                        fontSize: 'clamp(2rem, 5vw, 5rem)', 
                        fontWeight: 900, 
                        lineHeight: 0.9, 
                        margin: '1rem 0 2rem 0',
                        textTransform: 'uppercase',
                        color: '#fff',
                        position: 'relative',
                        left: '-2vw'
                    }}>
                        {project.title.split(' ').map((word, i) => (
                            <span key={i} style={{ display: 'block' }}>{word}</span>
                        ))}
                    </h3>
                    
                    <p style={{ fontSize: '1.2rem', opacity: 0.6, maxWidth: '400px', lineHeight: 1.6, marginBottom: '3rem' }}>
                        {project.description}
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '1.2rem 2.5rem',
                            background: '#fff',
                            color: '#000',
                            border: 'none',
                            borderRadius: '4px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            fontSize: '12px',
                            letterSpacing: '0.1em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                    >
                        View Project <ArrowUpRight size={18} />
                    </motion.button>
                </div>

                {/* Image Side */}
                <div style={{ position: 'relative', height: '60vh', overflow: 'hidden', borderRadius: '12px' }}>
                    <div style={{ 
                        width: '100%', height: '100%', 
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'grayscale(0.2) contrast(1.1)'
                    }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(0,0,0,0.6), transparent)' }} />
                </div>

                {/* Big ID Background */}
                <div style={{ 
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    fontSize: '30rem', fontWeight: 900, opacity: 0.03, color: '#fff', zIndex: -1, pointerEvents: 'none'
                }}>
                    {project.id}
                </div>
            </motion.div>
        </motion.div>
    );
}

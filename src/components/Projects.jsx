import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import animeViz from '../assets/anime_viz.png';

const projects = [
    {
        id: '01',
        title: 'ANIME RECOMMENDER',
        subtitle: 'DATA INTELLIGENCE',
        image: animeViz,
        tech: ['Python', 'Power BI']
    },
    {
        id: '02',
        title: 'CPU SCHEDULER',
        subtitle: 'SYSTEMS OPTIMIZATION',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
        tech: ['C++', 'Multithreading']
    },
    {
        id: '03',
        title: 'NEXUS SHOOTER',
        subtitle: 'INTERACTIVE SIMULATION',
        image: 'https://images.unsplash.com/photo-1614728263952-84ea206f9c45?auto=format&fit=crop&q=80&w=1000',
        tech: ['JS', 'Canvas']
    },
    {
        id: '04',
        title: 'BLENDER MOTION',
        subtitle: '3D VISUALIZATION',
        image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=1000',
        tech: ['Blender', 'Python']
    }
];

export default function Projects() {
    return (
        <section id="work" style={{ 
            padding: '15vh 0', 
            background: '#0a0a0a', 
            overflow: 'hidden',
            position: 'relative' 
        }}>
            <div style={{ position: 'absolute', top: '5vh', left: '6vw', opacity: 0.1, zIndex: 0 }}>
                <h2 style={{ fontSize: '15vw', fontWeight: 900, margin: 0, color: '#fff', letterSpacing: '-0.05em' }}>WORK</h2>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ padding: '0 6vw', marginBottom: '4rem' }}>
                    <span className="section-label">SELECTED PROJECTS</span>
                </div>

                <div className="projects-marquee">
                    <motion.div 
                        className="marquee-track"
                        animate={{ 
                            x: ["0%", "-50%"] 
                        }}
                        transition={{ 
                            duration: 15, 
                            repeat: Infinity, 
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    >
                        {projects.map((project, idx) => (
                            <ProjectCard key={idx} project={project} />
                        ))}
                    </motion.div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .projects-marquee {
                    width: 100%;
                    display: flex;
                    overflow: hidden;
                    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                }
                .marquee-track {
                    display: flex;
                    gap: 30px;
                    padding: 20px 6vw;
                }
                .project-card-mini {
                    width: clamp(300px, 40vw, 500px);
                    flex-shrink: 0;
                    background: rgba(238, 237, 228, 0.03);
                    border: 1px solid rgba(238, 237, 228, 0.08);
                    border-radius: 16px;
                    padding: 2rem;
                    transition: all 0.4s ease;
                    position: relative;
                }
                .project-card-mini:hover {
                    background: rgba(238, 237, 228, 0.05);
                    border-color: var(--brand-orange);
                    transform: translateY(-10px);
                }
                .project-card-mini .image-box {
                    width: 100%;
                    height: 250px;
                    border-radius: 10px;
                    overflow: hidden;
                    margin-bottom: 2rem;
                }
                .project-card-mini .image-box img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(1) contrast(1.1);
                    transition: all 0.6s ease;
                }
                .project-card-mini:hover .image-box img {
                    filter: grayscale(0) contrast(1);
                    scale: 1.1;
                }
            `}} />
        </section>
    );
}

function ProjectCard({ project }) {
    return (
        <div className="project-card-mini">
            <div className="image-box">
                <img src={project.image} alt={project.title} />
            </div>
            
            <span className="mono" style={{ fontSize: '10px', color: 'var(--brand-orange)', letterSpacing: '0.1em' }}>
                {project.subtitle}
            </span>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '1rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, textTransform: 'uppercase', margin: 0 }}>
                    {project.title}
                </h3>
                <div className="interactive" style={{ opacity: 0.5 }}>
                    <ArrowUpRight size={20} />
                </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '2rem' }}>
                {project.tech.map((t, i) => (
                    <span key={i} className="mono" style={{ fontSize: '9px', padding: '4px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}

import { motion } from 'framer-motion';
import { User, Briefcase, GraduationCap } from 'lucide-react';

export default function AboutSection() {
    const textBlocks = [
        {
            content: (
                <>
                    Passionate <span style={{ color: '#c084fc', fontWeight: 700 }}>Data Science Student</span> from <span style={{ color: 'var(--brand-orange)', fontWeight: 700 }}>Lovely Professional University</span>, specializing in building intelligent data solutions and predictive models.
                </>
            )
        },
        {
            content: (
                <>
                    Expert in <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>Python, Machine Learning, and SQL</span> with a strong interest in <span style={{ color: '#c084fc', fontWeight: 700 }}>Data Engineering</span> and building modern Full Stack applications.
                </>
            )
        },
        {
            content: (
                <>
                    Currently developing <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>Scalable Data Projects</span> and exploring <span style={{ color: '#c084fc', fontWeight: 700 }}>AI Systems</span> — always seeking to extract actionable insights from complex datasets.
                </>
            )
        }
    ];

    return (
        <section className="container" id="about" style={{ padding: 'clamp(5vh, 10vh, 15vh) 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900, marginBottom: '1rem' }}>About Me</h2>
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '80px' }}
                    viewport={{ once: true }}
                    style={{ 
                        height: '4px', 
                        background: 'linear-gradient(90deg, var(--brand-orange), #c084fc)', 
                        margin: '0 auto',
                        borderRadius: '2px',
                        boxShadow: '0 0 10px rgba(192, 132, 252, 0.5)'
                    }} 
                />
            </div>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: '2vw',
                alignItems: 'start'
            }}>
                {/* Left: Profile Card */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="data-card"
                    style={{
                        padding: '3rem 2rem',
                        textAlign: 'center',
                        background: 'rgba(10, 10, 10, 0.8)',
                        border: '1px solid rgba(192, 132, 252, 0.2)',
                        boxShadow: '0 0 40px rgba(192, 132, 252, 0.1)',
                    }}
                >
                    <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--brand-orange), #c084fc)',
                        margin: '0 auto 2rem auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem',
                        fontWeight: 900,
                        color: 'white',
                        boxShadow: '0 0 30px rgba(192, 132, 252, 0.3)',
                        position: 'relative'
                    }}>
                        H
                        <div style={{
                            position: 'absolute',
                            inset: '-5px',
                            borderRadius: '50%',
                            border: '2px solid rgba(192, 132, 252, 0.3)',
                            animation: 'pulse 2s infinite'
                        }} />
                    </div>

                    <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1.5rem' }}>Harshita Gour</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.6, fontSize: '0.9rem' }}>
                            <User size={16} />
                            <span className="mono">DATA SCIENCE STUDENT</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.6, fontSize: '0.9rem' }}>
                            <Briefcase size={16} />
                            <span className="mono">FULL STACK DEVELOPER</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.6, fontSize: '0.9rem' }}>
                            <GraduationCap size={16} />
                            <span className="mono">LPU STUDENT</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Description Blocks */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {textBlocks.map((block, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="data-card"
                            style={{
                                background: 'rgba(10, 10, 10, 0.6)',
                                border: '1px solid rgba(238, 237, 228, 0.05)',
                                padding: '2rem',
                                fontSize: '1.1rem',
                                lineHeight: 1.6,
                                opacity: 0.9
                            }}
                        >
                            {block.content}
                        </motion.div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.05); opacity: 0.2; }
                    100% { transform: scale(1); opacity: 0.5; }
                }
            ` }} />
        </section>
    );
}

import { motion } from 'framer-motion';
import { Database, Cpu, Layers } from 'lucide-react';

export default function AboutSection() {
    const coreValues = [
        { 
            icon: <Database size={18} className="brand-orange-text" />, 
            title: "Data Intelligence", 
            desc: "Extracting signal from noise to drive intelligent decisions." 
        },
        { 
            icon: <Cpu size={18} style={{ color: '#c084fc' }} />, 
            title: "Model Engineering", 
            desc: "Architecting predictive systems that learn and adapt." 
        },
        { 
            icon: <Layers size={18} style={{ color: '#3b82f6' }} />, 
            title: "Full Stack Mastery", 
            desc: "Bridging complex backends with seamless human interfaces." 
        }
    ];

    return (
        <section className="container" id="about" style={{ padding: '8vh 0' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4vw', alignItems: 'center' }}>
                
                {/* Left: Phrasing & Narrative */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label">MISSION_STATEMENT</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem', lineHeight: 1.1 }}>
                        Bridging the gap between <br/>
                        <span style={{ color: 'var(--brand-orange)' }}>Raw Data</span> & <span style={{ color: '#c084fc' }}>Meaningful Insights.</span>
                    </h2>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <p className="mono" style={{ fontSize: '13px', lineHeight: 1.8, opacity: 0.7, borderLeft: '2px solid var(--brand-orange)', paddingLeft: '1.5rem' }}>
                            [01] Navigating the intersection of data science and software engineering to build systems that don't just process data, but understand it.
                        </p>
                        <p className="mono" style={{ fontSize: '13px', lineHeight: 1.8, opacity: 0.7, borderLeft: '2px solid #c084fc', paddingLeft: '1.5rem' }}>
                            [02] My focus lies in developing scalable machine learning models while maintaining a robust full-stack architecture for real-world impact.
                        </p>
                    </div>
                </motion.div>

                {/* Right: Technical Summary Cards */}
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {coreValues.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="data-card"
                            style={{ 
                                padding: '1.5rem', 
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(238,237,228,0.05)',
                                display: 'flex',
                                gap: '1.2rem',
                                alignItems: 'center'
                            }}
                        >
                            <div style={{ 
                                width: '45px', 
                                height: '45px', 
                                borderRadius: '8px', 
                                background: 'rgba(255,255,255,0.03)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                {item.icon}
                            </div>
                            <div>
                                <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>{item.title}</h4>
                                <p className="mono" style={{ fontSize: '11px', opacity: 0.5 }}>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

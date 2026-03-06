import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'COMPUTATIONAL THEORY',
        skills: ['Python / PyTorch', 'Machine Learning Algorithms', 'Big Data Engineering', 'Statistical Analysis']
    },
    {
        title: 'MODELING & ARCHITECTURE',
        skills: ['Neural Network Design', 'Predictive Modeling', 'SQL / NoSQL Databases', 'ETL Pipelines']
    },
    {
        title: 'ANALYTICAL VISUALIZATION',
        skills: ['Insight Discovery', 'Tableau / BI Tools', 'Interactive Data Storytelling', 'Technical Documentation']
    }
];

export default function Skills() {
    return (
        <section className="container" style={{ padding: '15vh 0' }}>
            <span className="section-label">TECHNICAL_ARSENAL</span>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '6rem', maxWidth: '800px' }}>
                Translating complex datasets into <span style={{ color: 'var(--brand-orange)' }}>strategic intelligence.</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2vw' }}>
                {skillCategories.map((cat, idx) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="data-card"
                    >
                        <div className="mono" style={{ fontSize: '11px', color: 'var(--brand-orange)', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span>SK_CAT_{idx + 1}</span>
                            <span style={{ opacity: 0.3 }}>00{idx + 1}</span>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', letterSpacing: '-0.02em' }}>{cat.title}</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {cat.skills.map((s) => (
                                <div key={s} className="mono" style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.8 }}>
                                    <div style={{ width: '4px', height: '4px', background: 'var(--brand-orange)' }} />
                                    {s}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

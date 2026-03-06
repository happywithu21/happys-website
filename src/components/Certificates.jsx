import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, CheckCircle, Plus } from 'lucide-react';
import CertificateModal from './CertificateModal';

const certs = [
    {
        id: '01',
        title: 'PYTHON PROGRAMMING',
        issuer: 'PROFESSIONAL CERTIFICATION',
        file: '/src/assets/certs/cert_python.pdf',
        status: 'VERIFIED_RECORD'
    },
    {
        id: '02',
        title: 'FROM DATA TO INSIGHTS',
        issuer: 'ANALYTICS SPECIALIZATION',
        file: '/src/assets/certs/cert_insights.pdf',
        status: 'SYSTEM_VALIDATED'
    },
    {
        id: '03',
        title: 'DATA STRUCTURES & ALGORITHMS',
        issuer: 'COMPUTATIONAL LOGIC',
        file: '/src/assets/certs/cert_dsa.pdf',
        status: 'OPTIMAL_PERFORMANCE'
    },
    {
        id: '04',
        title: 'COMPUTATIONAL THEORY',
        issuer: 'FINITE AUTOMATA & LANGUAGES',
        file: '/src/assets/certs/cert_theory.pdf',
        status: 'ACADEMIC_EXCELLENCE'
    }
];

export default function Certificates() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="container" style={{ padding: '15vh 0' }}>
            <div style={{ marginBottom: '6rem' }}>
                <span className="section-label">CREDENTIAL_VAULT / 003</span>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', margin: 0 }}>
                    Verified <span style={{ color: 'var(--brand-orange)' }}>Academic & Technical</span> Credentials.
                </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5vw', marginBottom: '4rem' }}>
                {certs.map((cert) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="data-card"
                        style={{ position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                            <div style={{ color: 'var(--brand-orange)' }}><Award size={32} strokeWidth={1.5} /></div>
                            <span className="mono" style={{ fontSize: '10px', opacity: 0.3 }}>REG_ID_{cert.id}</span>
                        </div>

                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{cert.title}</h3>
                        <p className="mono" style={{ fontSize: '11px', opacity: 0.5, marginBottom: '2rem' }}>{cert.issuer}</p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>
                            <CheckCircle size={12} color="#00ff00" />
                            <span className="mono" style={{ fontSize: '9px', color: '#00ff00' }}>{cert.status}</span>
                        </div>

                        <a
                            href={cert.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="interactive mono"
                            style={{
                                fontSize: '11px',
                                color: 'var(--text-main)',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '12px 16px',
                                border: '1px solid rgba(238,237,228,0.1)',
                                background: 'rgba(238,237,228,0.03)'
                            }}
                        >
                            <FileText size={14} />
                            VIEW_SOURCE_PDF
                        </a>
                    </motion.div>
                ))}
            </div>

            {/* Button moved UNDER the certificates */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="interactive mono"
                    style={{
                        background: 'transparent',
                        border: '1px solid var(--brand-orange)',
                        color: 'var(--brand-orange)',
                        padding: '1rem 3rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '13px',
                        cursor: 'pointer',
                        transition: 'all 0.4s ease',
                        textTransform: 'uppercase',
                        fontWeight: 900
                    }}
                >
                    EXPLORE_FULL_CREDENTIAL_LIST <Plus size={18} />
                </button>
            </div>

            <CertificateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}

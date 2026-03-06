import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, ExternalLink } from 'lucide-react';

const allCerts = [
    { title: 'Python Programming', file: 'python certificate.pdf', id: 'CR-001' },
    { title: 'Data to Insights', file: 'From data to Insights.pdf', id: 'CR-002' },
    { title: 'Data Structures & Algorithms', file: 'data structures and algorithum.pdf', id: 'CR-003' },
    { title: 'Computational Theory', file: 'Computational Theory Language Principle & Finite Automata Theory.pdf', id: 'CR-004' },
    { title: 'Excel for Beginners', file: 'Excel for Beginners.jpg.jpeg', id: 'CR-005' },
    { title: 'Privacy & Security', file: 'Privacy and Security in Online Social Media.pdf', id: 'CR-006' },
    { title: 'Object Oriented Programming', file: 'Object oriented programming.pdf', id: 'CR-007' },
    { title: 'Java Programming', file: 'neocolab java programming.pdf', id: 'CR-008' },
    { title: 'Computer Programming', file: 'neocolab computer programming.pdf', id: 'CR-009' },
    { title: 'IIID Hackathon', file: 'IIID hackathon.pdf', id: 'CR-010' },
    { title: 'Code-A-Haunt', file: 'Code-A-Haunt.png', id: 'CR-011' },
    { title: 'Bits and Bytes', file: 'Bits and bytes.jpeg', id: 'CR-012' },
    { title: 'Peer to Peer Networks', file: 'peer to peer and local network.jpeg', id: 'CR-013' },
    { title: 'NSUT Participation', file: 'nsut.jpg.jpeg', id: 'CR-014' },
    { title: 'Vertos Got Talent', file: 'vertos got talent.pdf', id: 'CR-015' }
];

export default function CertificateModal({ isOpen, onClose }) {

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.95)',
                    backdropFilter: 'blur(20px)',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2vw'
                }}
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    // data-lenis-prevent stops the smooth scroll from hijacking this div's scroll
                    data-lenis-prevent
                    style={{
                        width: '100%',
                        maxWidth: '1200px',
                        height: '85vh',
                        background: 'var(--bg-color)',
                        border: '1px solid rgba(238, 237, 228, 0.1)',
                        padding: '3rem',
                        overflowY: 'auto',
                        position: 'relative',
                        cursor: 'auto'
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', position: 'sticky', top: 0, background: 'var(--bg-color)', zIndex: 10, paddingBottom: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span className="section-label">GLOBAL_CREDENTIAL_LISTING</span>
                            <span className="mono" style={{ fontSize: '10px', opacity: 0.3 }}>TOTAL_RECORDS: {allCerts.length}</span>
                        </div>
                        <button
                            onClick={onClose}
                            className="interactive"
                            style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer', padding: '10px' }}
                        >
                            <X size={32} strokeWidth={1} />
                        </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                        {allCerts.map((cert) => (
                            <div
                                key={cert.id}
                                className="data-card"
                                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', minHeight: '180px' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <span className="mono" style={{ fontSize: '10px', opacity: 0.3 }}>ID / {cert.id}</span>
                                    <div style={{ opacity: 0.5 }}><FileText size={18} /></div>
                                </div>

                                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '-0.01em' }}>{cert.title}</h4>

                                <a
                                    href={`/src/assets/certs/${cert.file}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="interactive mono"
                                    style={{
                                        fontSize: '10px',
                                        color: 'var(--brand-orange)',
                                        textDecoration: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        marginTop: 'auto',
                                        border: '1px solid rgba(255, 85, 0, 0.2)',
                                        padding: '8px 12px',
                                        width: 'fit-content'
                                    }}
                                >
                                    ACCESS_DOCUMENT <ExternalLink size={12} />
                                </a>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

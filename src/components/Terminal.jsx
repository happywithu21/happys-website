import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const commands = [
    { query: 'cat harshita_identity.json', output: '{ "name": "Harshita Gour", "role": "Data Scientist", "focus": "Predictive Modeling / AI Architecture" }' },
    { query: 'run academic_check.sh', output: 'Fetching records... [LPU / BTech CSE] status: Optimal. CGPA: High Precision.' },
    { query: 'analyze --skills', output: 'Processing... Technical Stack identified: Python, ML, Neural Networks, Power BI, SQL, C++, Java.' },
    { query: 'status --system', output: 'System_v1.0.4 operating at peak efficiency. All nodes synchronized.' }
];

export default function Terminal() {
    const [history, setHistory] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedQuery, setDisplayedQuery] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (currentIndex < commands.length) {
            const currentCommand = commands[currentIndex];

            if (charIndex < currentCommand.query.length) {
                // Typing characters
                const timer = setTimeout(() => {
                    setDisplayedQuery(prev => prev + currentCommand.query[charIndex]);
                    setCharIndex(prev => prev + 1);
                }, 50); // Speed of typing
                return () => clearTimeout(timer);
            } else {
                // Finished typing query, wait a bit then show output and move to next
                const timer = setTimeout(() => {
                    setHistory(prev => [...prev, { query: currentCommand.query, output: currentCommand.output }]);
                    setDisplayedQuery('');
                    setCharIndex(0);
                    setCurrentIndex(prev => prev + 1);
                }, 1000); // Pause after typing
                return () => clearTimeout(timer);
            }
        }
    }, [currentIndex, charIndex]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history, displayedQuery]);

    return (
        <section className="container" style={{ padding: 'clamp(5vh, 10vh, 15vh) 0' }}>
            <span className="section-label">SYSTEM_TERMINAL / QUERY_BY_RESEARCHER</span>

            <div
                className="data-card"
                style={{
                    background: '#0a0a0a',
                    border: '1px solid rgba(238, 237, 228, 0.1)',
                    padding: 'clamp(1rem, 3vw, 2rem)',
                    height: 'clamp(300px, 60vh, 400px)',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 0 40px rgba(0,0,0,0.5)',
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-wrap'
                }}
            >
                <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', borderBottom: '1px solid rgba(238,237,228,0.05)', paddingBottom: '1rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                    <span className="mono" style={{ fontSize: '10px', opacity: 0.3, marginLeft: 'auto' }}>harshita@ds-node-01: ~</span>
                </div>

                <div
                    ref={scrollRef}
                    style={{
                        flex: 1,
                        overflowY: 'auto',
                        paddingBottom: '1rem',
                        scrollbarWidth: 'none'
                    }}
                >
                    {history.map((item, i) => (
                        <div key={i} style={{ marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <span style={{ color: 'var(--brand-orange)', fontWeight: 900 }}>$</span>
                                <span className="mono" style={{ fontSize: '13px' }}>{item.query}</span>
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="mono"
                                style={{ fontSize: '13px', opacity: 0.5, marginTop: '5px', paddingLeft: '20px' }}
                            >
                                » {item.output}
                            </motion.div>
                        </div>
                    ))}

                    {currentIndex < commands.length && (
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <span style={{ color: 'var(--brand-orange)', fontWeight: 900 }}>$</span>
                            <span className="mono" style={{ fontSize: '13px' }}>
                                {displayedQuery}
                                <motion.span
                                    animate={{ opacity: [0, 1] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    style={{
                                        display: 'inline-block',
                                        width: '8px',
                                        height: '15px',
                                        background: 'var(--brand-orange)',
                                        verticalAlign: 'middle',
                                        marginLeft: '4px'
                                    }}
                                />
                            </span>
                        </div>
                    )}
                </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end', opacity: 0.2 }}>
                <span className="mono" style={{ fontSize: '10px' }}>LOG_STATE: BROADCASTING_LIVE</span>
            </div>
        </section>
    );
}

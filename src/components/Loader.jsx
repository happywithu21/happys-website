import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Exactly like Heat Bureau: initial dark screen with logo, then fades out
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800); // trigger onComplete after fade out animation
        }, 2000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="loader-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ fontWeight: 900, fontSize: '3rem', letterSpacing: '-0.05em' }}
                    >
                        data™
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);

    // Motion values don't trigger React renders
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth spring configuration: high stiffness for responsiveness, balanced damping
    const springConfig = { stiffness: 800, damping: 45, mass: 0.1 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const updateMousePosition = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', updateMousePosition);

        const handleMouseOver = () => setIsHovering(true);
        const handleMouseOut = () => setIsHovering(false);

        const addListeners = () => {
            document.querySelectorAll('a, button, .interactive').forEach(el => {
                el.addEventListener('mouseenter', handleMouseOver);
                el.addEventListener('mouseleave', handleMouseOut);
            });
        };

        addListeners();

        // MutationObserver to catch dynamically added elements
        const observer = new MutationObserver(addListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            observer.disconnect();
            document.querySelectorAll('a, button, .interactive').forEach(el => {
                el.removeEventListener('mouseenter', handleMouseOver);
                el.removeEventListener('mouseleave', handleMouseOut);
            });
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="cursor-dot"
            style={{
                translateX: cursorX,
                translateY: cursorY,
                left: -6, // Center 12px dot
                top: -6,
                scale: isHovering ? 4 : 1,
            }}
            animate={{
                backgroundColor: isHovering ? 'var(--brand-orange)' : 'var(--brand-orange)',
            }}
            transition={{
                scale: { type: 'spring', stiffness: 300, damping: 20 },
                backgroundColor: { duration: 0.1 }
            }}
        />
    );
}

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', updateMousePosition);

        // Heat Bureau interaction logic
        const handleMouseOver = () => setIsHovering(true);
        const handleMouseOut = () => setIsHovering(false);

        document.querySelectorAll('a, button, .interactive').forEach(el => {
            el.addEventListener('mouseenter', handleMouseOver);
            el.addEventListener('mouseleave', handleMouseOut);
        });

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            document.querySelectorAll('a, button, .interactive').forEach(el => {
                el.removeEventListener('mouseenter', handleMouseOver);
                el.removeEventListener('mouseleave', handleMouseOut);
            });
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 5,
            y: mousePosition.y - 5,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }
        },
        hover: {
            x: mousePosition.x - 5,
            y: mousePosition.y - 5,
            scale: 4, // Expands dramatically on hover (difference blend mode)
            backgroundColor: 'var(--brand-orange)',
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }
        }
    };

    return (
        <motion.div
            className="cursor-dot"
            variants={variants}
            animate={isHovering ? "hover" : "default"}
        />
    );
}

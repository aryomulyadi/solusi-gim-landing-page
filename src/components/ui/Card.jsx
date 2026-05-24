import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, glow = false, ...props }) {
  return (
    <motion.div
      className={`glass-card p-6 ${glow ? 'hover:shadow-glow-blue' : ''} ${className}`}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
}

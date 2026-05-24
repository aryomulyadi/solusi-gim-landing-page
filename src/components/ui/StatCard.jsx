import { motion } from 'framer-motion';

export default function StatCard({ value, label, icon }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {icon && <span className="text-2xl mb-2">{icon}</span>}
      <span className="text-2xl md:text-3xl font-heading font-bold gradient-text">{value}</span>
      <span className="text-sm text-slate-400 mt-1">{label}</span>
    </motion.div>
  );
}

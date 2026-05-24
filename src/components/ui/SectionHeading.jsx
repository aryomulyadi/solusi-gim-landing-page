import { motion } from 'framer-motion';

export default function SectionHeading({ preTitle, title, subtitle, centered = true, className = '' }) {
  return (
    <motion.div
      className={`${centered ? 'text-center' : ''} mb-12 lg:mb-16 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {preTitle && (
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-3">
          {preTitle}
        </span>
      )}
      {title && (
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`text-slate-400 text-lg max-w-3xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

import { motion } from 'framer-motion';

export default function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <motion.button
        onClick={() => onSelect('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
          activeCategory === 'all'
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-glow-sm'
            : 'bg-dark-600/60 text-slate-400 hover:text-white hover:bg-dark-500/60 border border-slate-700/30'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Semua
      </motion.button>
      {categories.map((cat) => (
        <motion.button
          key={cat.id || cat}
          onClick={() => onSelect(typeof cat === 'string' ? cat : cat.name)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
            activeCategory === (typeof cat === 'string' ? cat : cat.name)
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-glow-sm'
              : 'bg-dark-600/60 text-slate-400 hover:text-white hover:bg-dark-500/60 border border-slate-700/30'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {typeof cat === 'string' ? cat : cat.name}
        </motion.button>
      ))}
    </div>
  );
}

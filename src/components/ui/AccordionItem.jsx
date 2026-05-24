import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-700/50">
      <button
        className="w-full flex items-center justify-between py-5 px-1 text-left group cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={`font-heading font-semibold text-lg pr-8 transition-colors duration-300 ${isOpen ? 'text-cyan-400' : 'text-slate-200 group-hover:text-white'}`}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-cyan-400' : 'text-slate-500'}`} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 px-1 text-slate-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

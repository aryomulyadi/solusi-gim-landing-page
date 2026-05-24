import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import testimonials, { credibilityStats } from '../../data/testimonials';

export default function TestimonialSection() {
  return (
    <section id="testimoni" className="relative py-20 lg:py-28">
      <div className="glow-orb w-72 h-72 bg-amber-500 bottom-0 right-1/4" style={{ opacity: 0.05 }} />

      <div className="section-container relative z-10">
        <SectionHeading
          preTitle="Testimoni"
          title={<>Apa Kata <span className="gradient-text">Developer Lain</span>?</>}
          subtitle="Dengarkan pengalaman developer yang sudah menggunakan aset dari SOLUSI GIM."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="glass-card p-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Quote className="w-8 h-8 text-blue-500/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < t.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`}
                  />
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed mb-6 text-sm italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-heading font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credibility stats */}
        <motion.div
          className="glass rounded-2xl p-8 grid grid-cols-3 divide-x divide-slate-700/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {credibilityStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center px-4">
              <span className="text-2xl mb-2">{stat.icon}</span>
              <span className="font-heading text-2xl md:text-3xl font-bold gradient-text">{stat.value}</span>
              <span className="text-slate-400 text-sm mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

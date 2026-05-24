import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import howItWorks from '../../data/howItWorks';

export default function HowItWorksSection() {
  return (
    <section id="cara-kerja" className="relative py-20 lg:py-28">
      <div className="glow-orb w-72 h-72 bg-blue-500 bottom-0 -right-36" style={{ opacity: 0.06 }} />

      <div className="section-container relative z-10">
        <SectionHeading
          preTitle="Cara Kerja"
          title={<>Mulai dalam <span className="gradient-text-cyan">5 Langkah</span> Mudah</>}
          subtitle="Proses sederhana dari memilih aset hingga mulai membangun game Anda."
        />

        {/* Desktop: horizontal steps */}
        <div className="hidden lg:flex items-start justify-between relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-8 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 opacity-30" />

          {howItWorks.map((step, i) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.id}
                className="flex flex-col items-center text-center relative z-10 w-1/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center mb-4 relative">
                  <IconComp className="w-7 h-7 text-cyan-400" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-white text-sm mb-2">{step.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical steps */}
        <div className="lg:hidden space-y-6">
          {howItWorks.map((step, i) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.id}
                className="flex gap-4 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0 relative">
                  <IconComp className="w-5 h-5 text-cyan-400" />
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

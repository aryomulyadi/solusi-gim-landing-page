import { motion } from 'framer-motion';
import { Users, GraduationCap } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const contributors = [
  {
    id: 'contrib-1',
    name: 'Rifqi Aryo Mulyadi',
    nim: '23.11.5646',
    avatar: '👨‍💻',
  },
  {
    id: 'contrib-2',
    name: 'Zakki Maulana',
    nim: '23.11.5686',
    avatar: '👨‍💻',
  },
  {
    id: 'contrib-3',
    name: 'Raditya M. W. H',
    nim: '23.11.5668',
    avatar: '👨‍💻',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContributorSection() {
  return (
    <section id="contributors" className="relative py-20 lg:py-28">
      <div className="glow-orb w-64 h-64 bg-blue-500 bottom-0 left-1/3" style={{ opacity: 0.05 }} />
      <div className="glow-orb w-56 h-56 bg-purple-500 top-1/4 -right-28" style={{ opacity: 0.05 }} />

      <div className="section-container relative z-10">
        <SectionHeading
          preTitle="Tim Pengembang"
          title={<>Dibuat oleh <span className="gradient-text">Tim Pengembang</span></>}
          subtitle="Landing page SOLUSI GIM dikembangkan sebagai proyek web modern untuk toko aset game digital."
        />

        <motion.div
          className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {contributors.map((person) => (
            <motion.div
              key={person.id}
              variants={cardVariants}
              className="glass-card p-6 text-center group"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/15 flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-blue group-hover:border-blue-500/30 transition-all duration-300">
                <span className="text-3xl">{person.avatar}</span>
              </div>

              {/* Name */}
              <h3 className="font-heading font-bold text-white text-base mb-1">
                {person.name}
              </h3>

              {/* NIM */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/15 mt-2">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-purple-400 text-xs font-medium">
                  NIM: {person.nim}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team attribution */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-600/40 border border-slate-700/20">
            <Users className="w-4 h-4 text-slate-500" />
            <span className="text-slate-500 text-xs">
              Proyek pengembangan web — Toko Aset Game Digital
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

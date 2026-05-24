import { motion } from 'framer-motion';
import { PackageCheck, Zap, Shield, HeartHandshake } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const solutions = [
  {
    icon: PackageCheck,
    title: 'Aset Siap Pakai',
    description: 'Pilih dari koleksi aset game yang sudah dikurasi. Langsung download dan gunakan tanpa perlu membuat dari awal.',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
  },
  {
    icon: Zap,
    title: 'Hemat Waktu Produksi',
    description: 'Potong waktu development hingga berminggu-minggu. Fokus energi Anda pada gameplay, mekanik, dan pengalaman bermain.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Shield,
    title: 'Lisensi Aman & Jelas',
    description: 'Setiap aset dilengkapi informasi lisensi yang transparan. Gunakan dengan tenang untuk proyek personal maupun komersial.',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: HeartHandshake,
    title: 'Mendukung Developer Indie',
    description: 'SOLUSI GIM hadir untuk membantu ekosistem game development Indonesia. Harga terjangkau, kualitas production-ready.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
];

export default function SolutionSection() {
  return (
    <section id="solusi" className="relative py-20 lg:py-28">
      <div className="glow-orb w-80 h-80 bg-cyan-500 top-1/3 -right-40" style={{ opacity: 0.06 }} />

      <div className="section-container relative z-10">
        <SectionHeading
          preTitle="Solusi Kami"
          title={<>SOLUSI GIM Membantu Anda <span className="gradient-text-cyan">Mulai Lebih Cepat</span></>}
          subtitle="Pilih aset, download, import ke game engine favorit Anda, dan mulai bangun game impian."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card p-6 text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

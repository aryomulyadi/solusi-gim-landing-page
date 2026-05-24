import { motion } from 'framer-motion';
import { Clock, DollarSign, AlertTriangle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const painPoints = [
  {
    icon: Clock,
    title: 'Waktu Produksi Terlalu Lama',
    description: 'Membuat sprite, UI, dan sound effect dari nol bisa memakan waktu berminggu-minggu. Waktu yang seharusnya bisa digunakan untuk mengembangkan gameplay dan mekanik game.',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
  },
  {
    icon: DollarSign,
    title: 'Biaya Desain Bisa Membengkak',
    description: 'Menyewa desainer, illustrator, atau sound designer profesional membutuhkan budget besar. Untuk developer indie dan mahasiswa, ini sering menjadi hambatan utama.',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
  },
  {
    icon: AlertTriangle,
    title: 'Prototipe Sulit Selesai Tepat Waktu',
    description: 'Deadline mendekat tapi aset belum siap. Game jam, tugas kuliah, atau pitch ke publisher sering terhambat karena proses pembuatan aset yang terlalu lama.',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProblemSection() {
  return (
    <section id="masalah" className="relative py-20 lg:py-28">
      <div className="glow-orb w-72 h-72 bg-red-500 top-1/2 -left-36" style={{ opacity: 0.06 }} />

      <div className="section-container relative z-10">
        <SectionHeading
          preTitle="Masalah Umum"
          title="Membuat Aset dari Nol Sering Menghambat Proyek Game"
          subtitle="Banyak developer game yang stuck di tahap produksi aset, padahal ide dan gameplay sudah siap."
        />

        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={cardVariants}
              className={`glass-card p-8 border ${point.borderColor} group`}
            >
              <div className={`w-14 h-14 rounded-2xl ${point.bgColor} flex items-center justify-center mb-5`}>
                <point.icon className={`w-7 h-7 ${point.color}`} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {point.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

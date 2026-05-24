import { motion } from 'framer-motion';
import { Shield, BadgeCheck, FolderOpen, MonitorPlay, RefreshCw, Lock } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const trustFeatures = [
  {
    icon: Shield,
    title: 'Lisensi Jelas',
    description: 'Setiap aset memiliki informasi lisensi yang transparan. Personal atau komersial, Anda tahu persis apa yang boleh dilakukan.',
  },
  {
    icon: BadgeCheck,
    title: 'Opsi Penggunaan Komersial',
    description: 'Banyak aset tersedia dengan lisensi komersial. Bangun game untuk dijual tanpa khawatir masalah legal.',
  },
  {
    icon: FolderOpen,
    title: 'File Terorganisir',
    description: 'Semua aset dikemas dalam folder yang rapi dengan naming convention konsisten. Langsung siap di-import.',
  },
  {
    icon: MonitorPlay,
    title: 'Format Engine-Friendly',
    description: 'Format file yang kompatibel dengan Unity, Unreal, Godot, dan engine populer lainnya.',
  },
  {
    icon: RefreshCw,
    title: 'Dukungan Update',
    description: 'Dapatkan update dan perbaikan gratis sesuai paket yang dipilih. Aset Anda selalu up-to-date.',
  },
  {
    icon: Lock,
    title: 'Proses Pembelian Aman',
    description: 'Transaksi aman melalui WhatsApp dan metode pembayaran lokal yang terpercaya.',
  },
];

export default function LicenseSection() {
  return (
    <section id="lisensi" className="relative py-20 lg:py-28">
      <div className="glow-orb w-72 h-72 bg-green-500 top-1/3 -left-36" style={{ opacity: 0.05 }} />

      <div className="section-container relative z-10">
        <SectionHeading
          preTitle="Lisensi & Kepercayaan"
          title={<>Aset yang <span className="gradient-text">Aman dan Terpercaya</span></>}
          subtitle="Kami memastikan setiap aset yang Anda dapatkan memiliki lisensi jelas dan siap digunakan secara profesional."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="glass-card p-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

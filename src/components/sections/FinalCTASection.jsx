import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Button from '../ui/Button';
import { createConsultationWhatsAppLink } from '../../utils/whatsapp';
import { trackCTA } from '../../utils/analytics';

export default function FinalCTASection() {
  return (
    <section id="cta-final" className="relative py-20 lg:py-28">
      <div className="section-container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative element */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <span className="relative text-6xl">🚀</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Siap Membuat Game{' '}
            <span className="gradient-text">Lebih Cepat</span>?
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Pilih aset yang sesuai, hemat waktu produksi, dan fokus pada gameplay yang ingin Anda bangun. SOLUSI GIM siap mendukung perjalanan game development Anda.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" href="#produk" icon={ArrowRight} onClick={() => trackCTA('view_catalog', 'final_cta_lihat_katalog')}>
              Lihat Katalog Sekarang
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={createConsultationWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTA('contact_whatsapp', 'final_cta_konsultasi')}
              icon={MessageSquare}
            >
              Konsultasi via WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

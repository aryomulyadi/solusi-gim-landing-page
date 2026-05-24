import { motion } from 'framer-motion';
import { MessageSquare, FileImage, Monitor, Calendar, Send } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { createCustomRequestWhatsAppLink } from '../../utils/whatsapp';

const requestInfo = [
  { icon: FileImage, label: 'Jenis aset yang dibutuhkan', example: 'Contoh: sprite karakter, UI kit, icon pack' },
  { icon: Monitor, label: 'Game engine yang digunakan', example: 'Contoh: Unity, Godot, Unreal' },
  { icon: FileImage, label: 'Format file yang diinginkan', example: 'Contoh: PNG, SVG, PSD, WAV' },
  { icon: Calendar, label: 'Deadline proyek', example: 'Contoh: 2 minggu, 1 bulan' },
];

export default function RequestAssetSection() {
  return (
    <section id="request-asset" className="relative py-20 lg:py-28">
      <div className="glow-orb w-80 h-80 bg-purple-500 bottom-1/4 -left-40" style={{ opacity: 0.05 }} />

      <div className="section-container relative z-10">
        <SectionHeading
          preTitle="Custom Request"
          title={<>Butuh Aset Custom untuk <span className="gradient-text">Game Anda</span>?</>}
          subtitle="Tidak menemukan aset yang sesuai di katalog? Sampaikan kebutuhan Anda dan kami akan membantu menyiapkan aset custom."
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Info */}
              <div>
                <h3 className="font-heading text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-purple-400" />
                  Informasi yang Perlu Disiapkan
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Untuk mempercepat proses, siapkan detail berikut sebelum menghubungi kami via WhatsApp:
                </p>

                <div className="space-y-4">
                  {requestInfo.map((info, i) => (
                    <motion.div
                      key={info.label}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{info.label}</p>
                        <p className="text-slate-500 text-xs">{info.example}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: CTA */}
              <div className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-5">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  Request via WhatsApp
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Klik tombol di bawah untuk langsung chat dengan tim SOLUSI GIM. Kami akan merespons dalam 1x24 jam.
                </p>
                <Button
                  variant="primary"
                  href={createCustomRequestWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={MessageSquare}
                >
                  Chat WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

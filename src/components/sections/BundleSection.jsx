import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import bundles from '../../data/bundles';
import { createBundleWhatsAppLink } from '../../utils/whatsapp';
import { trackCTA } from '../../utils/analytics';

export default function BundleSection() {
  return (
    <section id="bundle" className="relative py-20 lg:py-28">
      <div className="glow-orb w-96 h-96 bg-purple-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.05 }} />

      <div className="section-container relative z-10">
        <SectionHeading
          preTitle="Bundle Hemat"
          title={<>Pilih Paket yang <span className="gradient-text">Sesuai Kebutuhan</span></>}
          subtitle="Hemat lebih banyak dengan bundle pack. Dapatkan akses ke koleksi aset pilihan dengan harga spesial."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {bundles.map((bundle, i) => (
            <motion.div
              key={bundle.id}
              className={`relative rounded-2xl overflow-hidden ${
                bundle.highlighted
                  ? 'bg-gradient-to-b from-blue-500/20 to-purple-500/10 border-2 border-blue-500/30 scale-[1.02] lg:scale-105'
                  : 'glass-card'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {bundle.badge && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 text-sm font-semibold flex items-center justify-center gap-1">
                  <Star className="w-4 h-4" />
                  {bundle.badge}
                </div>
              )}

              <div className={`p-8 ${bundle.badge ? 'pt-14' : ''}`}>
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {bundle.name}
                </h3>
                <p className="text-slate-400 text-sm mb-6">{bundle.bestFor}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-4xl font-bold text-white">
                      {bundle.priceFormatted}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-slate-500 line-through text-sm">{bundle.originalPrice}</span>
                    <span className="text-green-400 text-sm font-semibold">{bundle.discount}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {bundle.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={bundle.highlighted ? 'primary' : 'secondary'}
                  href={createBundleWhatsAppLink(bundle.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCTA('select_bundle', bundle.name)}
                  className="w-full justify-center"
                  aria-label={`Pilih ${bundle.name} via WhatsApp`}
                >
                  {bundle.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

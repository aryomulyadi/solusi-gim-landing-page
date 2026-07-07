import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Layers, Gamepad2, Zap } from 'lucide-react';
import Button from '../ui/Button';
import { trackCTA } from '../../utils/analytics';

const trustStats = [
  { value: '500+', label: 'Asset Siap Pakai', icon: <Layers className="w-5 h-5" /> },
  { value: '10+', label: 'Kategori Asset', icon: <Sparkles className="w-5 h-5" /> },
  { value: '100%', label: 'Lisensi Jelas', icon: <Zap className="w-5 h-5" /> },
  { value: 'Indie', label: 'Support Developer', icon: <Gamepad2 className="w-5 h-5" /> },
];

const floatingCards = [
  { label: 'UI Kit', emoji: '🎨', color: 'from-cyan-500 to-blue-500', delay: 0 },
  { label: 'Sprite', emoji: '🧙', color: 'from-purple-500 to-pink-500', delay: 0.2 },
  { label: 'SFX', emoji: '🔊', color: 'from-amber-500 to-orange-500', delay: 0.4 },
  { label: 'Icons', emoji: '✨', color: 'from-green-500 to-emerald-500', delay: 0.1 },
  { label: 'Template', emoji: '🎮', color: 'from-rose-500 to-red-500', delay: 0.3 },
];

export default function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="glow-orb w-96 h-96 bg-blue-500 top-20 -left-48" />
      <div className="glow-orb w-80 h-80 bg-purple-500 bottom-20 -right-40" />
      <div className="glow-orb w-64 h-64 bg-cyan-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.08 }} />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Bangun Game Lebih Cepat dengan{' '}
              <span className="gradient-text">Aset Siap Pakai</span>{' '}
              dari SOLUSI GIM
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
              Temukan 2D assets, UI kit, icon pack, sprite, sound effect, background, dan template game yang rapi, legal, dan siap digunakan untuk proyek game Anda.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="primary" size="lg" href="#produk" icon={ArrowRight} onClick={() => trackCTA('view_catalog', 'hero_lihat_katalog')}>
                Lihat Katalog Aset
              </Button>
              <Button variant="secondary" size="lg" href="#lead-magnet" icon={Download} onClick={() => trackCTA('download_asset', 'hero_download_gratis')}>
                Download Aset Gratis
              </Button>
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {trustStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center gap-3 px-3 py-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="text-cyan-400">{stat.icon}</div>
                  <div>
                    <div className="text-white font-heading font-bold text-lg">{stat.value}</div>
                    <div className="text-slate-500 text-xs">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Floating cards visual */}
          <motion.div
            className="relative h-[400px] lg:h-[500px] hidden md:flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Central glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
            </div>

            {/* Floating asset cards */}
            {floatingCards.map((card, i) => {
              const positions = [
                'top-8 left-1/2 -translate-x-1/2',
                'top-1/4 right-4',
                'bottom-1/4 right-8',
                'top-1/3 left-4',
                'bottom-8 left-1/3',
              ];
              return (
                <motion.div
                  key={card.label}
                  className={`absolute ${positions[i]} glass p-4 rounded-2xl w-36 ${i === 0 ? 'w-44' : ''}`}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, i % 2 === 0 ? 2 : -2, 0],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: card.delay,
                  }}
                >
                  <div className={`w-full h-16 rounded-xl bg-gradient-to-br ${card.color} mb-3 flex items-center justify-center text-2xl`}>
                    {card.emoji}
                  </div>
                  <p className="text-white text-sm font-semibold text-center">{card.label}</p>
                  <p className="text-slate-500 text-xs text-center">Game Asset</p>
                </motion.div>
              );
            })}

            {/* Decorative dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`dot-${i}`}
                className="absolute w-2 h-2 rounded-full bg-blue-400/30"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                }}
                animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
                transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

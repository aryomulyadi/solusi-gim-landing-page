import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileType, Monitor, Shield } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import SearchInput from '../ui/SearchInput';
import Badge from '../ui/Badge';
import products from '../../data/products';
import { createProductWhatsAppLink } from '../../utils/whatsapp';

const filterCategories = ['Semua', '2D Asset', 'UI Kit', 'Icon Pack', 'Background', 'Sound Effect', 'Game Template'];

const statusConfig = {
  available: { label: 'Tersedia', variant: 'green' },
  coming_soon: { label: 'Segera Hadir', variant: 'amber' },
  free_sample: { label: 'Gratis', variant: 'cyan' },
  custom_request: { label: 'Custom Request', variant: 'purple' },
};

export default function ProductSection() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = activeCategory === 'Semua' || p.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  return (
    <section id="produk" className="relative py-20 lg:py-28">
      <div className="glow-orb w-80 h-80 bg-blue-500 top-0 right-0" style={{ opacity: 0.05 }} />

      <div className="section-container relative z-10">
        <SectionHeading
          preTitle="Katalog Produk"
          title={<>Aset Game <span className="gradient-text">Pilihan</span> untuk Proyek Anda</>}
          subtitle="SOLUSI GIM sedang menyiapkan koleksi aset game yang dikurasi khusus untuk developer indie Indonesia."
        />

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 justify-center">
          <SearchInput value={search} onChange={setSearch} />
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filterCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-glow-sm'
                  : 'bg-dark-600/60 text-slate-400 hover:text-white hover:bg-dark-500/60 border border-slate-700/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Product grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const status = statusConfig[product.status];
              return (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card overflow-hidden group"
                >
                  {/* Product thumbnail */}
                  <div className={`h-44 bg-gradient-to-br ${product.gradient} relative flex items-center justify-center overflow-hidden`}>
                    <span className="text-5xl">{product.icon}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <Badge variant={status.variant}>{status.label}</Badge>
                    </div>
                  </div>

                  {/* Product info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-heading font-bold text-white text-lg leading-snug pr-2">
                        {product.name}
                      </h3>
                      <span className="font-heading font-bold text-lg whitespace-nowrap text-cyan-400">
                        {product.priceFormatted}
                      </span>
                    </div>

                    <Badge variant="blue" className="mb-3">{product.category}</Badge>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-4">
                      <span className="flex items-center gap-1">
                        <FileType className="w-3.5 h-3.5" />
                        {product.format.join(', ')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Monitor className="w-3.5 h-3.5" />
                        {product.engines.join(', ')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Shield className="w-3.5 h-3.5" />
                        {product.license}
                      </span>
                    </div>

                    <motion.a
                      href={createProductWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full flex items-center justify-center gap-2 text-sm py-2.5"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`Lihat detail ${product.name} via WhatsApp`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Lihat Detail
                    </motion.a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">Tidak ada produk yang sesuai dengan pencarian Anda.</p>
          </div>
        )}
      </div>
    </section>
  );
}

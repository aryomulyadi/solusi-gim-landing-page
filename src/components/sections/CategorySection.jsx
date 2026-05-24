import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import categories from '../../data/categories';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function CategorySection() {
  return (
    <section id="kategori" className="relative py-20 lg:py-28">
      <div className="glow-orb w-72 h-72 bg-purple-500 bottom-0 left-1/4" style={{ opacity: 0.06 }} />

      <div className="section-container relative z-10">
        <SectionHeading
          preTitle="Kategori Aset"
          title={<>Jelajahi <span className="gradient-text">Beragam Kategori</span> Aset Game</>}
          subtitle="Dari karakter 2D hingga game template lengkap — temukan aset yang sesuai dengan kebutuhan proyek Anda."
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {categories.map((cat) => {
            const IconComp = cat.icon;
            return (
              <motion.a
                key={cat.id}
                href="#produk"
                variants={cardVariants}
                className="glass-card p-5 lg:p-6 group cursor-pointer block"
                whileHover={{ scale: 1.03 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-white text-base mb-1.5">
                  {cat.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

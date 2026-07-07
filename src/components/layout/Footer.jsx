import { Gamepad2, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { WA_BASE_URL } from '../../utils/whatsapp';
import { trackCTA } from '../../utils/analytics';

const footerNavLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Kategori', href: '#kategori' },
  { label: 'Produk', href: '#produk' },
  { label: 'Bundle', href: '#bundle' },
  { label: 'Lisensi', href: '#lisensi' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontributor', href: '#contributors' },
];

const contributors = [
  { name: 'Rifqi Aryo Mulyadi', nim: '23.11.5646', avatar: '👨‍💻' },
  { name: 'Zakki Maulana', nim: '23.11.5686', avatar: '👨‍💻' },
  { name: 'Raditya M. W. H', nim: '23.11.5668', avatar: '👨‍💻' },
];

const categoryLinks = [
  '2D Asset', '3D Asset', 'UI Kit', 'Sprite Pack',
  'Icon Pack', 'Sound Effect', 'Game Template', 'Bundle Pack',
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/50 bg-dark-800/50">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#beranda" className="flex items-center gap-2 mb-4" aria-label="SOLUSI GIM">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                SOLUSI <span className="gradient-text">GIM</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-4 max-w-xs">
              Platform aset game siap pakai untuk developer indie, mahasiswa, dan studio kecil di Indonesia. Bangun game lebih cepat dengan aset yang rapi, legal, dan production-ready.
            </p>
            <div className="flex gap-3">
              {['Twitter', 'Instagram', 'Discord', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-dark-600/60 border border-slate-700/30 flex items-center justify-center text-slate-500 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2.5">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Kategori Produk</h4>
            <ul className="space-y-2.5">
              {categoryLinks.map((cat) => (
                <li key={cat}>
                  <a
                    href="#kategori"
                    className="text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-300"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Kontak</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WA_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCTA('contact_whatsapp', 'footer_wa')}
                  className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@solusigim.com"
                  className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  hello@solusigim.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-slate-500 text-sm">
                  <MapPin className="w-4 h-4" />
                  Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tim Pengembang */}
      <div className="border-t border-slate-800/50" id="contributors">
        <div className="section-container py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {contributors.map((person) => (
              <div key={person.nim} className="flex items-center gap-2.5">
                <span className="text-lg">{person.avatar}</span>
                <div>
                  <p className="text-slate-400 text-sm font-medium leading-tight">{person.name}</p>
                  <p className="text-slate-600 text-xs leading-tight">NIM: {person.nim}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800/50">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} SOLUSI GIM. Semua hak cipta dilindungi.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-300 cursor-pointer"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
            Kembali ke Atas
          </button>
        </div>
      </div>
    </footer>
  );
}

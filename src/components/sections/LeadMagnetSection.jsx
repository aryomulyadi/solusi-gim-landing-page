import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, Gift, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import { trackEvent } from '../../utils/analytics';

export default function LeadMagnetSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Silakan masukkan alamat email Anda.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Format email tidak valid. Contoh: nama@email.com');
      return;
    }

    // MVP: Show success message without backend integration.
    // TODO: Integrate with EmailJS or backend API when ready.
    // Replace the placeholder config below:
    //   SERVICE_ID: 'your_emailjs_service_id'
    //   TEMPLATE_ID: 'your_emailjs_template_id'
    //   PUBLIC_KEY: 'your_emailjs_public_key'
    setSubmitted(true);
    trackEvent('lead_submit', { email });
  };

  return (
    <section id="lead-magnet" className="relative py-20 lg:py-28">
      <div className="section-container relative z-10">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-600/20 border border-blue-500/20 p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background orbs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
              <Gift className="w-8 h-8 text-white" />
            </div>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Download <span className="gradient-text-cyan">5 Aset Gratis</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Mulai buat game pertamamu dengan koleksi aset gratis dari SOLUSI GIM. Tanpa biaya, tanpa komitmen — cukup download dan mulai berkarya.
            </p>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="max-w-md mx-auto"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError(''); }}
                        placeholder="Masukkan email Anda"
                        className={`w-full pl-12 pr-4 py-3.5 bg-dark-700/80 border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all ${
                          error ? 'border-red-500/50' : 'border-slate-700/50'
                        }`}
                        aria-label="Alamat email untuk download aset gratis"
                      />
                    </div>
                    <Button variant="primary" type="submit" icon={Download}>
                      Download Gratis
                    </Button>
                  </div>
                  {error && (
                    <motion.p
                      className="text-red-400 text-sm mt-3 text-left sm:text-center"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {error}
                    </motion.p>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="max-w-md mx-auto glass rounded-2xl p-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">
                    Terima Kasih! 🎉
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Link download aset gratis akan dikirim ke email <span className="text-cyan-400 font-medium">{email}</span>. Silakan cek inbox Anda dalam beberapa saat.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-slate-600 text-xs mt-4">
              Kami menghargai privasi Anda. Email hanya digunakan untuk mengirim link download.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

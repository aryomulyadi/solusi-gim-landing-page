import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import AccordionItem from '../ui/AccordionItem';
import faqs from '../../data/faqs';

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="faq" className="relative py-20 lg:py-28">
      <div className="glow-orb w-72 h-72 bg-cyan-500 top-1/4 -right-36" style={{ opacity: 0.05 }} />

      <div className="section-container relative z-10">
        <SectionHeading
          preTitle="FAQ"
          title={<>Pertanyaan yang <span className="gradient-text">Sering Ditanyakan</span></>}
          subtitle="Temukan jawaban untuk pertanyaan umum seputar aset game dari SOLUSI GIM."
        />

        <div className="max-w-3xl mx-auto glass rounded-2xl p-6 md:p-8">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

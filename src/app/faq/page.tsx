
'use client';

import { motion } from 'framer-motion';

const faqs = [
  { q: "Are you lawyers?", a: "No, we are a document preparation service. We help you fill out legal forms, but we do not give legal advice." },
  { q: "Do I need to pay upfront?", a: "No. You only pay after the service is completed." },
  { q: "What areas do you cover?", a: "We specialize in immigration, divorce, small claims, and basic court documents." },
  { q: "Do you serve outside Washington?", a: "Yes. Most services can be done online and nationwide." },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>
        {faqs.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="mb-4"
          >
            <h2 className="font-semibold text-lg">{item.q}</h2>
            <p className="text-gray-700">{item.a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

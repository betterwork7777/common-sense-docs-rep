
'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black p-6">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-4">About Common Sense Docs</h1>
        <p className="mb-4">
          Common Sense Docs was created to bridge the gap between expensive legal services and underserved communities.
          We use smart tools and deep experience to make legal paperwork easier, cheaper, and accessible to everyone.
        </p>
        <p>
          Whether you're dealing with immigration, court forms, or personal matters — we're here to help you navigate the paperwork,
          without the stress or the big price tag.
        </p>
      </motion.div>
    </div>
  );
}

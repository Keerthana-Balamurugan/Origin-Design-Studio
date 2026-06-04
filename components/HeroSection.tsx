"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-violet-50 via-white to-indigo-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-violet-950" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-violet-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-amber-100 font-semibold tracking-widest uppercase text-amber-506"
        >
          ✦ Origin Design Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          
          <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-indigo-500">
            Design{" "}
            Beyond
            Expectations
          </span>{" "}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10"
        >
          We build brands, products, and experiences
          that people love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="px-8 py-3 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
          >
            View Our Work
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-gray-300 font-semibold hover:bg-gray-100 transition"
          >
            Get In Touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
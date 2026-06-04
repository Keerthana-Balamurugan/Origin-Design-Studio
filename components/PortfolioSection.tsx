"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { title: "Finora", category: "UI/UX Design", color: "from-violet-400 to-indigo-500" },
  { title: "Velvet Glow", category: "Branding", color: "from-rose-400 to-pink-500" },
  { title: "Gliss Extensions", category: "Web Development", color: "from-blue-400 to-cyan-500" },
  { title: "Abhibus Travel Platform", category: "UI/UX + Dev", color: "from-amber-400 to-orange-500" },
  { title: "Mint Wellness App", category: "Mobile Design", color: "from-emerald-400 to-teal-500" },
  { title: "Aurelia E-commerce", category: "Web Development", color: "from-purple-400 to-violet-500" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-amber-50 font-extrabold-widest uppercase text-2xl">
            Our Work
          </p>
          <h3 className="text-4xl font-bold text-neutral-900 dark:text-white">Portfolio</h3>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
            A selection of projects we're proud of — crafted with care and shipped with excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl aspect-4/3 cursor-pointer"
            >
              {/* Gradient placeholder (replace with real <Image> when you have photos) */}
              <div className={`absolute inset-0 bg-linear-to-br ${p.color}`} />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <div className="p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                    {p.category}
                  </p>
                  <h3 className="text-white font-bold text-lg">{p.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
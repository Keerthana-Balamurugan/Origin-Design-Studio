"use client";
import { motion } from "framer-motion";
import { Palette, Code2, Megaphone, Layers } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive, beautiful interfaces crafted with user-first thinking. From wireframes to polished prototypes.",
    color: "bg-violet-50 dark:bg-violet-900/20 text-brand",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, scalable, and modern web applications built with Next.js, TypeScript, and cutting-edge tools.",
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600",
  },
  {
    icon: Layers,
    title: "Branding",
    description:
      "Memorable brand identities — logos, color systems, typography, and complete style guides.",
    color: "bg-rose-50 dark:bg-rose-900/20 text-rose-500",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that grow your audience, increase conversions, and build lasting relationships.",
    color: "bg-amber-50 dark:bg-amber-900/20 text-amber-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-brand mb-3">
            What We Do
          </p>
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">Our Services</h2>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
            End-to-end creative and technical services designed to make your product shine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
                <s.icon size={22} />
              </div>
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
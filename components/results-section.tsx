"use client";

import { motion } from "framer-motion";
import { TrendingUp, Mail, MousePointerClick, Zap } from "lucide-react";

const stats = [
  {
    value: "46%",
    label: "Taux d'ouverture",
    description: "Bien au-dessus de la moyenne",
  },
  {
    value: "14%",
    label: "Taux d'engagement",
    description: "Vos clients interagissent",
  },
  {
    value: "150+",
    label: "Courtiers Actifs",
    description: "Service personnalisé et dédié",
  },
  {
    value: "100%",
    label: "Automatisé",
    description: "Aucun effort de votre part",
  },
];

export function ResultsSection() {
  return (
    <section id="results" className="bg-[#fcb723] px-6 py-24 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Des résultats qui parlent d'eux-mêmes
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-3xl font-bold md:mb-3 md:text-5xl">{stat.value}</div>
              <div className="mb-1 text-sm font-semibold md:mb-2 md:text-lg">{stat.label}</div>
              <div className="text-xs text-black md:text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

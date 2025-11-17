"use client";

import { motion } from "framer-motion";
import { TrendingUp, Mail, MousePointerClick, Zap } from "lucide-react";

const stats = [
  {
    icon: Mail,
    value: "46%",
    label: "Taux d'ouverture",
    description: "Bien au-dessus de la moyenne",
  },
  {
    icon: MousePointerClick,
    value: "14%",
    label: "Taux d'engagement",
    description: "Vos clients interagissent",
  },
  {
    icon: TrendingUp,
    value: "2-5K$",
    label: "Tirages mensuels",
    description: "Pour attirer l'attention",
  },
  {
    icon: Zap,
    value: "100%",
    label: "Automatisé",
    description: "Aucun effort de votre part",
  },
];

export function ResultsSection() {
  return (
    <section id="results" className="bg-gray-50 px-6 py-24 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Des résultats qui parlent d'eux-mêmes
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Nos campagnes mensuelles automatisées vous assurent une présence constante auprès de vos
            clients
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-black">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="mb-3 text-5xl font-bold">{stat.value}</div>
              <div className="mb-2 text-lg font-semibold">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Shield, Users, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Edge compétitif dans votre région",
    description: (
      <>
        Démarquez-vous parmi les{" "}
        <span className="text-center text-xl font-bold">
          <br className="md:hidden" /> 17 000 courtiers
          <br className="md:hidden" />
        </span>{" "}
        du Québec avec un accès exclusif à notre plateforme.
      </>
    ),
  },
  {
    icon: Headphones,
    title: "Support personnalisé",
    description:
      "Bénéficiez d'un accompagnement dédié tout au long de votre utilisation pour personnaliser votre service.",
  },
];

export function ExclusiveSection() {
  return (
    <section className="relative bg-black px-6 py-24 md:py-32">
      {/* Dotted background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #fcb723 1.5px, transparent 1.5px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative container mx-auto mb-16 max-w-7xl text-center">
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          Un accès limité et <span className="text-primary">exclusif</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <div className="mx-auto mb-8">
            <p className="text-lg leading-relaxed text-white/60 md:text-2xl">
              ClickOn est offert à seulement{" "}
              <span className="text-2xl font-bold text-white md:text-3xl">
                {" "}
                <br className="md:hidden" /> 300 courtiers
                <br className="md:hidden" />
              </span>{" "}
              immobiliers et hypothécaires au Québec.
            </p>
            <p className="mt-8 text-xl text-white">Cette limite ne changera jamais</p>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary flex flex-col gap-6 border-2 border-black p-8 backdrop-blur-sm"
            >
              <div className="shrink-0 text-center md:text-left">
                <h3 className="mb-3 text-center text-2xl font-bold text-black">{benefit.title}</h3>
                <p className="text-lg leading-relaxed text-black/70">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Database, TrendingUp, Users, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Database,
    title: "Agents",
    description:
      "Remplissez votre pipeline avec des leads, construisez votre marque et concluez des affaires plus rapidement tout en prouvant que vous êtes l'expert du marché.",
    features: [
      "Trouvez et qualifiez vos prochains clients",
      "Boostez la visibilité avec la publicité numérique ciblée",
      "Impressionnez les clients avec des analyses de propriétés précises et basées sur les données",
    ],
  },
  {
    icon: Users,
    title: "Équipes",
    description:
      "Donnez à votre équipe une technologie moderne conçue pour stimuler la croissance et les aider à atteindre leurs objectifs en toute confiance.",
    features: [
      "Gérez les transactions avec des rôles dédiés pour chaque membre de l'équipe",
      "Créez des sites web captivants pour présenter le courtage de votre équipe",
      "Organisez les journées portes ouvertes et partagez les leads avec toute votre équipe",
    ],
  },
  {
    icon: TrendingUp,
    title: "Courtiers",
    description:
      "Construisez un courtage prospère avec des solutions technologiques qui vous emmènent de la génération de leads à la clôture des affaires sans effort.",
    features: [
      "Identifiez et attirez les agents les plus performants avec des analyses intelligentes",
      "Élevez votre marque avec des sites web personnalisés et à fort impact",
      "Simplifiez et optimisez la gestion du back-office",
    ],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white px-6 py-24 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            Donnez-vous les bons outils pour atteindre vos objectifs et approfondir les relations
            clients.
          </h2>
        </motion.div>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-gray-200 bg-white p-8 transition-colors hover:border-gray-300"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-black">
                <solution.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="mb-4 text-2xl font-bold">{solution.title}</h3>
              <p className="mb-6 leading-relaxed text-gray-600">{solution.description}</p>

              <ul className="mb-6 space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="text-sm leading-relaxed text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="inline-flex items-center gap-2 font-medium text-[#fcb723] transition-all hover:gap-3">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

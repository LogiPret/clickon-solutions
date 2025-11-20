"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Database, TrendingUp, Users, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="how-it-works" className="bg-white px-6 pt-24 md:pt-32">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-20"
        >
          <h2 className="mb-6 text-3xl leading-tight font-bold md:text-5xl lg:text-6xl">
            Donnez-vous les bons outils pour atteindre vos objectifs et approfondir les relations
            clients.
          </h2>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="mb-16 md:hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {solutions.map((solution, index) => (
                <CarouselItem key={index} className="basis-[85%] pl-4 sm:basis-[70%]">
                  <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black">
                      <solution.icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="mb-3 text-xl font-bold">{solution.title}</h3>
                    <p className="mb-6 text-sm leading-relaxed text-gray-600">
                      {solution.description}
                    </p>

                    <ul className="mb-6 grow space-y-3">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="text-sm leading-relaxed text-gray-700">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    index + 1 === current ? "bg-black" : "bg-black/20"
                  }`}
                />
              ))}
            </div>
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="mb-16 hidden gap-8 md:grid md:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-8 transition-colors hover:border-gray-300"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-black">
                <solution.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="mb-4 text-2xl font-bold">{solution.title}</h3>
              <p className="mb-6 leading-relaxed text-gray-600">{solution.description}</p>

              <ul className="mb-6 grow space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="text-sm leading-relaxed text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

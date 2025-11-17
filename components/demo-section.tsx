"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

const benefits = [
  "Démo personnalisée de 20 minutes",
  "Analyse gratuite de votre base clients",
  "Estimation du potentiel de revenus",
  "Aucun engagement requis",
];

export function DemoSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="demo" className="bg-black px-6 py-24 text-white md:py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Prêt à générer plus de leads ?</h2>

            <p className="mb-10 text-xl leading-relaxed text-gray-300">
              Découvrez comment ClickOn peut transformer votre base de clients en machine à revenus.
            </p>

            <ul className="mb-10 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-[#fcb723]" />
                  <span className="text-lg text-gray-200">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white p-10 text-black"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Jean Tremblay"
                    required
                    className="h-12 w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                    Email professionnel
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jean@exemple.com"
                    required
                    className="h-12 w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(514) 555-0123"
                    required
                    className="h-12 w-full"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-semibold">
                    Entreprise
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Votre agence"
                    required
                    className="h-12 w-full"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="h-14 w-full bg-[#fcb723] text-base font-semibold text-black hover:bg-[#e5a520]"
                >
                  Réserver ma démo gratuite
                </Button>

                <p className="text-center text-xs text-gray-600">
                  En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                </p>
              </form>
            ) : (
              <div className="py-16 text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#fcb723]/10">
                  <CheckCircle2 className="h-8 w-8 text-[#fcb723]" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">Merci !</h3>
                <p className="text-gray-600">
                  Notre équipe vous contactera sous 24h pour planifier votre démo.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

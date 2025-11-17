"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Moncef Zaghry",
    role: "Courtier Immobilier",
    content:
      "J'ai été agréablement surpris de recevoir deux références sérieuses dès le premier envoi. Je m'attendais à ce que cela prenne quatre à cinq mois avant de voir des résultats de ce programme.",
    rating: 5,
  },
  {
    name: "Mark-Anthony Barbieri",
    role: "Courtier Hypothécaire",
    content:
      "C'est une stratégie géniale pour obtenir la réponse du client. Rien que cet élément déclenche une conversation avec mes clients, car je prends toujours le temps de leur souhaiter 'Bonne chance'.",
    rating: 5,
  },
  {
    name: "Mark-Anthony Barbieri",
    role: "Courtier Hypothécaire",
    content:
      "Ce simple échange génère des ventes. Même après plusieurs années dans l'industrie… il n'est jamais trop tard pour innover !",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white px-6 py-24 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Ce que nos clients disent</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Des courtiers qui génèrent plus de revenus grâce à ClickOn
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-gray-200 bg-white p-8 transition-colors hover:border-gray-300"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#fcb723] text-[#fcb723]" />
                ))}
              </div>

              <p className="mb-8 leading-relaxed text-gray-700">{testimonial.content}</p>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black font-bold text-white">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

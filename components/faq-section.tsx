"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const faqs = [
  {
    question: "Comment ClickOn contacte-t-il mes anciens clients ?",
    answer:
      "ClickOn utilise une combinaison d'emails personnalisés, de SMS et d'appels automatisés selon vos préférences. Notre IA analyse le meilleur moment et le meilleur canal pour chaque client.",
  },
  {
    question: "Combien de temps avant de voir des résultats ?",
    answer:
      "La plupart de nos clients reçoivent leurs premiers leads qualifiés dans les 7 à 14 jours suivant l'activation. Les résultats s'améliorent continuellement avec le temps.",
  },
  {
    question: "Est-ce que ClickOn fonctionne avec mon CRM actuel ?",
    answer:
      "Oui ! ClickOn s'intègre facilement avec les principaux CRM du marché. Vous pouvez aussi importer vos contacts via un simple fichier Excel ou CSV.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-gray-50 px-6 py-24 md:py-32">
      <div className="container mx-auto mb-16 max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">Questions fréquentes</h2>
        <p className="mb-16 text-xl text-gray-600">Tout ce que vous devez savoir sur ClickOn</p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#fcb723]" />
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

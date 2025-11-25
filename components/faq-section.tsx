"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      "Oui ! ClickOn s'intègre facilement avec les principaux CRM du marché. Vous pouvez aussi importer vos contacts via un simple fichier Excel.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-gray-50 px-6 py-24 md:py-32">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        ></motion.div>
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Questions fréquentes</h2>
          <p className="text-xl text-gray-600">Tout ce que vous devez savoir sur ClickOn</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                  <AccordionTrigger className="py-6 text-left text-lg font-semibold transition-colors hover:text-[#fcb723]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 leading-relaxed text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

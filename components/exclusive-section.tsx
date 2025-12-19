"use client";

import { motion } from "framer-motion";
import { Shield, Headphones } from "lucide-react";
import { useTranslations } from "next-intl";

export function ExclusiveSection() {
  const t = useTranslations("exclusive");

  const benefits = [
    {
      icon: Shield,
      title: t("benefits.edge.title"),
      description: (
        <>
          {t("benefits.edge.description")}{" "}
          <span className="text-center text-xl font-bold">
            <br className="md:hidden" /> {t("benefits.edge.brokerCount")}
            <br className="md:hidden" />
          </span>{" "}
          {t("benefits.edge.descriptionEnd")}
        </>
      ),
    },
    {
      icon: Headphones,
      title: t("benefits.support.title"),
      description: t("benefits.support.description"),
    },
  ];

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
          {t("title")} <span className="text-primary">{t("titleHighlight")}</span>
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
              {t("subtitle")}{" "}
              <span className="text-2xl font-bold text-white md:text-3xl">
                {" "}
                <br className="md:hidden" /> {t("brokerCount")}
                <br className="md:hidden" />
              </span>{" "}
              {t("subtitleEnd")}
            </p>
            <p className="mt-8 text-xl text-white">{t("limitNote")}</p>
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

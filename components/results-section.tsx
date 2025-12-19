"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function ResultsSection() {
  const t = useTranslations("results");

  const stats = [
    {
      value: t("stats.openRate.value"),
      label: t("stats.openRate.label"),
      description: t("stats.openRate.description"),
    },
    {
      value: t("stats.engagementRate.value"),
      label: t("stats.engagementRate.label"),
      description: t("stats.engagementRate.description"),
    },
    {
      value: t("stats.activeBrokers.value"),
      label: t("stats.activeBrokers.label"),
      description: t("stats.activeBrokers.description"),
    },
    {
      value: t("stats.automated.value"),
      label: t("stats.automated.label"),
      description: t("stats.automated.description"),
    },
  ];

  return (
    <section id="results" className="bg-[#fcb723] px-6 py-24 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">{t("title")}</h2>
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

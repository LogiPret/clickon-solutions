"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export function DemoSection() {
  const t = useTranslations("demo");

  const benefits = [
    t("benefits.personalDemo"),
    t("benefits.freeAnalysis"),
    t("benefits.revenueEstimate"),
    t("benefits.noCommitment"),
  ];

  useEffect(() => {
    // Load Calendly script once
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="demo" className="bg-black px-6 py-16 text-white md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">{t("title")}</h2>

            <p className="mb-10 text-xl leading-relaxed text-gray-300">{t("description")}</p>

            <ul className="mb-10 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-[#fcb723]" />
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
            className="flex w-full items-center justify-center"
          >
            {/* Calendly widget */}
            <div
              className="calendly-inline-widget w-full overflow-hidden rounded-lg"
              data-url="https://calendly.com/fgiroux-logipret/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=fcb723"
              style={{ height: "600px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

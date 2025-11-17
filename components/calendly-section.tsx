"use client";

import { motion } from "framer-motion";

export function CalendlySection() {
  return (
    <section className="bg-background relative overflow-hidden py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Début de widget en ligne Calendly */}
            <div
              className="calendly-inline-widget overflow-hidden rounded-lg"
              data-url="https://calendly.com/fgiroux-logipret/30min?background_color=&text_color=1a1a1a&primary_color=fcb723"
              style={{ minWidth: "320px", height: "850px" }}
            />
            <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            />
            {/* Fin de widget en ligne Calendly */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

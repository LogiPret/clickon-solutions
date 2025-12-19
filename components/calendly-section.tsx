"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export function CalendlySection() {
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
    <section className="bg-background relative overflow-hidden py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            {/* Calendly inline widget */}
            <div
              className="calendly-inline-widget overflow-hidden rounded-lg"
              data-url="https://calendly.com/fgiroux-logipret/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=fcb723"
              style={{ minWidth: "420px", height: "950px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

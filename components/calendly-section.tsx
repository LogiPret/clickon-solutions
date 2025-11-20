"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CalendlySection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
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
            {/* Début de widget en ligne Calendly */}
            {isClient && (
              <div
                className="calendly-inline-widget overflow-hidden rounded-lg"
                data-url="https://calendly.com/fgiroux-logipret/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=&text_color=1a1a1a&primary_color=fcb723"
                style={{ minWidth: "420px", height: "950px" }}
              />
            )}
            {/* Fin de widget en ligne Calendly */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

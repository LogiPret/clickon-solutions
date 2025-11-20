"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function ClubPrivilegeSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#C5A059]/10 via-black to-black" />

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#C5A059]/20 bg-zinc-900/50 p-8 backdrop-blur-sm md:p-16">
            {/* Decorative glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                x: [0, -60, -30, 0],
                y: [0, 40, 80, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#C5A059]/10 blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                x: [0, 60, 30, 0],
                y: [0, -40, -80, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#C5A059]/10 blur-3xl"
            />

            <div className="relative flex flex-col items-center text-center">
              {/* Logo / Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-8 flex h-32 w-32 items-center justify-center rounded-full border-2 border-[#C5A059] bg-black shadow-[0_0_40px_-10px_rgba(197,160,89,0.5)]"
              >
                <div className="flex flex-col items-center justify-center p-4">
                  <span className="font-serif text-3xl text-[#C5A059] italic">Club</span>
                  <span className="mt-1 text-[0.6rem] font-bold tracking-[0.2em] text-[#C5A059] uppercase">
                    Privilège
                  </span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-6 text-4xl font-bold tracking-tighter text-white md:text-6xl"
              >
                Vivez l'expérience <span className="text-[#C5A059]">VIP</span>
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-10 max-w-2xl text-lg text-zinc-400 md:text-xl"
              >
                En tant que courtier, il est essentiel de savoir ce que vos clients reçoivent.
                Inscrivez-vous à notre liste de démonstration pour recevoir nos exemples de
                campagnes et constater par vous-même la qualité de nos communications.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  className="group h-14 rounded-full bg-[#C5A059] px-8 text-lg font-semibold text-black hover:bg-[#d4b06a]"
                  size="lg"
                  onClick={() =>
                    window.open("https://app.brokermail.ca/h/t/5911F0FB83917A63", "_blank")
                  }
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Tester l'expérience client
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

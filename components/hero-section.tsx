"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex min-h-[calc(100dvh-5rem)] flex-col overflow-hidden bg-black px-6 py-8 md:block md:min-h-0 md:py-32"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(252, 183, 35, 0.15) 2px, transparent 2px)`,
        backgroundSize: "24px 24px",
      }}
    >
      <div className="container mx-auto flex max-w-7xl flex-1 flex-col md:block">
        <div className="flex flex-1 flex-col gap-8 md:grid md:gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-1 flex-col justify-between text-white md:block"
          >
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#fcb723] px-4 py-1.5 text-xs font-bold tracking-wide text-black uppercase md:mb-8">
                Connecter • Récompenser • Closer
              </div>

              <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Votre base de données travaille pour vous{" "}
                <span className="text-[#fcb723]">pendant que vous closez.</span>
              </h1>

              <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-300 md:mb-10 md:text-xl">
                Le Club Privilège envoie automatiquement des bulletins personnalisés à vos anciens
                clients. Résultat ? 46% d'ouverture et 14% d'engagement. Sans lever le petit doigt.
              </p>
            </div>

            <Button
              size="lg"
              className="h-14 w-full bg-[#fcb723] px-8 text-base font-medium text-black hover:bg-[#e5a520] md:w-auto"
              onClick={scrollToDemo}
            >
              Voir comment ça marche
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/dashboard.png"
                alt="Interface ClickOn"
                width={800}
                height={600}
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
                Les CRM gèrent vos prospects <span className="text-[#fcb723]">ClickOn</span> ravive
                vos clients
              </h1>

              <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-300 md:mb-10 md:text-xl">
                Branchez ClickOn à votre CRM et laissez-le relancer, automatiquement, les clients
                que vous aviez perdus de vue.
              </p>
            </div>
            <div className="mb-8 px-[5vw] lg:hidden">
              <div
                className="relative flex w-full items-center justify-center"
                style={{
                  height: "clamp(200px, 40vw, 350px)",
                  perspective: "1200px",
                  perspectiveOrigin: "center center",
                }}
              >
                {/* Dashboard 4 - Left side, rotated to face right (inward) */}
                <div
                  className="absolute left-0 z-10"
                  style={{
                    width: "clamp(55%, 60%, 65%)",
                    transform: "rotateY(20deg) translateX(-5%)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Image
                    src="/dashboard_4.png"
                    alt="Dashboard ClickOn"
                    width={400}
                    height={300}
                    className="h-auto w-full rounded-lg shadow-2xl"
                    style={{
                      filter:
                        "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.3)) drop-shadow(0 25px 45px rgba(0, 0, 0, 0.4))",
                    }}
                  />
                </div>
                {/* Dashboard 2 - Right side, rotated to face left (inward), overlapping */}
                <div
                  className="absolute right-0 z-20"
                  style={{
                    width: "clamp(55%, 60%, 65%)",
                    transform: "rotateY(-20deg) translateX(5%)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Image
                    src="/dashboard_2.png"
                    alt="Dashboard ClickOn"
                    width={400}
                    height={300}
                    className="h-auto w-full rounded-lg shadow-2xl"
                    style={{
                      filter:
                        "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.3)) drop-shadow(0 25px 45px rgba(0, 0, 0, 0.4))",
                    }}
                  />
                </div>
              </div>
            </div>
            <Button
              size="lg"
              className="h-14 w-full bg-[#fcb723] px-8 text-base font-medium text-black hover:bg-[#e5a520]"
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
            <div className="order-1 hidden h-full items-center justify-center lg:order-2 lg:flex">
              <div
                className="relative flex h-[500px] w-full items-center justify-center"
                style={{
                  perspective: "1500px",
                  perspectiveOrigin: "center center",
                }}
              >
                {/* Dashboard 4 - Left side, rotated to face right (inward) */}
                <div
                  className="absolute left-0 z-10 w-[65%]"
                  style={{
                    transform: "rotateY(30deg) translateX(-5%)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Image
                    src="/dashboard_4.png"
                    alt="Dashboard ClickOn"
                    width={500}
                    height={375}
                    className="h-auto w-full rounded-lg shadow-2xl"
                    style={{
                      filter:
                        "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
                    }}
                  />
                </div>
                {/* Dashboard 2 - Right side, rotated to face left (inward), overlapping */}
                <div
                  className="absolute right-0 z-20 w-[65%]"
                  style={{
                    transform: "rotateY(-30deg) translateX(5%)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Image
                    src="/dashboard_2.png"
                    alt="Dashboard ClickOn"
                    width={500}
                    height={375}
                    className="h-auto w-full rounded-lg shadow-2xl"
                    style={{
                      filter:
                        "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

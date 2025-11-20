"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function FloatingCTA() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDemoVisible, setIsDemoVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDemoVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const demoSection = document.getElementById("demo");
    if (demoSection) {
      observer.observe(demoSection);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isVisible = isScrolled && !isDemoVisible;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none fixed bottom-6 z-50 flex w-full justify-center"
        >
          <div className="pointer-events-auto">
            <Button
              size="lg"
              onClick={scrollToDemo}
              className="rounded-full border border-black bg-[#fcb723] px-6 font-semibold text-black shadow-2xl shadow-[#fcb723]/50 hover:bg-[#e5a520]"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Réserver une démo
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

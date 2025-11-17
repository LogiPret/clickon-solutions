"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="animate-in slide-in-from-bottom-4 fixed right-6 bottom-6 z-50">
      <Button
        size="lg"
        onClick={scrollToDemo}
        className="rounded-full bg-[#fcb723] px-6 font-semibold text-black shadow-2xl shadow-[#fcb723]/50 hover:bg-[#e5a520]"
      >
        <Calendar className="mr-2 h-5 w-5" />
        Réserver une démo
      </Button>
    </div>
  );
}

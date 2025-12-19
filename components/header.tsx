"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageToggle } from "@/components/language-toggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("header");

  const scrollToDemo = () => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById("demo");
      if (!element) return;

      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const headerOffset = 50; // Header height + padding
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 250);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;

      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const headerOffset = 50; // Header height + padding
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 250);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:justify-between">
        {/* Logo */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center md:static md:translate-x-0">
          <Image
            src="/clickon-logo.png"
            alt="ClickOn"
            width={120}
            height={27}
            className="h-7 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <button
            onClick={() => scrollToSection("demo")}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
          >
            {t("demo")}
          </button>
          <button
            onClick={() => scrollToSection("results")}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
          >
            {t("results")}
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
          >
            {t("testimonials")}
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
          >
            {t("resources")}
          </button>
        </div>

        {/* CTA Buttons + Language Toggle */}
        <div className="hidden items-center gap-4 md:flex">
          <Button
            size="default"
            className="bg-[#fcb723] font-medium text-black hover:bg-[#e5a520]"
            asChild
          >
            <Link href="https://app.clickon.it.com/" target="_blank" rel="noopener noreferrer">
              {t("login")}
            </Link>
          </Button>

          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="hover:bg-accent ml-auto rounded-lg p-2 transition-colors md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-background border-t md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-3 px-4 py-4">
              <button
                onClick={() => scrollToSection("demo")}
                className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors"
              >
                {t("demo")}
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors"
              >
                {t("results")}
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors"
              >
                {t("testimonials")}
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors"
              >
                {t("resources")}
              </button>
              <div className="flex items-center justify-between border-t pt-3">
                <LanguageToggle />
              </div>
              <div className="flex flex-col gap-2 border-t pt-2">
                <Button
                  size="sm"
                  className="bg-[#fcb723] font-semibold text-black hover:bg-[#e5a520]"
                  asChild
                >
                  <Link
                    href="https://app.clickon.it.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("login")}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

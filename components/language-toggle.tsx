"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { setLocale } from "@/lib/locale";

export function LanguageToggle() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      setLocale(newLocale);
    });
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-gray-300 bg-gray-100 p-0.5 text-sm font-medium">
      <button
        onClick={() => handleLocaleChange("fr")}
        disabled={locale === "fr" || isPending}
        className={`rounded-full px-2.5 py-1 transition-all ${
          locale === "fr"
            ? "cursor-default bg-black text-white"
            : "cursor-pointer text-gray-600 hover:text-black"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => handleLocaleChange("en")}
        disabled={locale === "en" || isPending}
        className={`rounded-full px-2.5 py-1 transition-all ${
          locale === "en"
            ? "cursor-default bg-black text-white"
            : "cursor-pointer text-gray-600 hover:text-black"
        }`}
      >
        EN
      </button>
    </div>
  );
}

export function LanguageToggleFooter() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      setLocale(newLocale);
    });
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-gray-600 bg-gray-800 p-0.5 text-sm font-medium">
      <button
        onClick={() => handleLocaleChange("fr")}
        disabled={locale === "fr" || isPending}
        className={`rounded-full px-2.5 py-1 transition-all ${
          locale === "fr"
            ? "cursor-default bg-white text-black"
            : "cursor-pointer text-gray-400 hover:text-white"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => handleLocaleChange("en")}
        disabled={locale === "en" || isPending}
        className={`rounded-full px-2.5 py-1 transition-all ${
          locale === "en"
            ? "cursor-default bg-white text-black"
            : "cursor-pointer text-gray-400 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}

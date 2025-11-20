import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative border-t border-gray-800 bg-black px-6 py-16">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(252, 183, 35, 0.8) 2px, transparent 2px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/clickon-logo.png"
                alt="ClickOn"
                width={180}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@clickon.solutions"
                className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                info@clickon.solutions
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">© 2025 ClickOn.solutions. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a
              href="/politique-de-confidentialite"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

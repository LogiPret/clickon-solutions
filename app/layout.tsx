import type React from "react";
import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "ClickOn Solutions - Exploitez la puissance de votre base de données",
  description: "Générez des ventes en automatisant votre base de données avec le Club Privilège",
  generator: "ClickOn Solutions.",
  icons: {
    icon: "/small_logo.png",
    shortcut: "/small_logo.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "ClickOn Solutions - Exploitez la puissance de votre base de données",
    description: "Générez des ventes en automatisant votre base de données avec le Club Privilège",
    url: "https://clickon.solutions",
    siteName: "ClickOn Solutions",
    images: [
      {
        url: "/small_logo.png",
        width: 1200,
        height: 630,
        alt: "ClickOn Solutions",
      },
    ],
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickOn Solutions - Exploitez la puissance de votre base de données",
    description: "Générez des ventes en automatisant votre base de données avec le Club Privilège",
    images: ["/small_logo.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body className={`font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}

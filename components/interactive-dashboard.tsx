"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, DollarSign, TrendingUp, Mail, MousePointerClick } from "lucide-react";
import { motion } from "framer-motion";

export function InteractiveDashboard() {
  const [clientCount, setClientCount] = useState(500);
  const [avgCommission, setAvgCommission] = useState(2000);

  const openRate = 0.46; // 46%
  const engagementRate = 0.14; // 14%

  const totalClients = clientCount;
  const ouvertures = Math.round(clientCount * openRate);
  const engagement = Math.round(clientCount * engagementRate);
  const potentielVentes = engagement * avgCommission;

  const handleClientChange = (value: string) => {
    const num = Number.parseInt(value) || 0;
    if (num >= 0 && num <= 100000) {
      setClientCount(num);
    }
  };

  const handleCommissionChange = (value: string) => {
    const num = Number.parseInt(value) || 0;
    if (num >= 0 && num <= 1000000) {
      setAvgCommission(num);
    }
  };

  const stats = [
    {
      label: "Clients totaux",
      value: totalClients.toLocaleString(),
      icon: Users,
      color: "text-[#fcb723]",
      bgColor: "bg-[#fcb723]/10",
      borderColor: "border-[#fcb723]",
    },
    {
      label: "Ouvertures (46%)",
      value: ouvertures.toLocaleString(),
      icon: Mail,
      color: "text-black",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-200",
    },
    {
      label: "Engagement (14%)",
      value: engagement.toLocaleString(),
      icon: MousePointerClick,
      color: "text-[#fcb723]",
      bgColor: "bg-[#fcb723]/10",
      borderColor: "border-[#fcb723]",
    },
  ];

  return (
    <section
      id="interactive-dashboard"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(252, 183, 35, 0.8) 2px, transparent 2px)`,
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          opacity: 0.5,
        }}
      />
      {/* </CHANGE> */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Calculez votre <span className="text-[#fcb723]">potentiel</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Découvrez combien de ventes additionnelles ClickOn peut générer pour votre entreprise
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mb-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="flex h-[180px] flex-col border-2 border-[#fcb723]/30 bg-white p-6 shadow-lg transition-colors hover:border-[#fcb723]">
              <Label
                htmlFor="client-count"
                className="mb-3 block flex items-center gap-2 text-base font-semibold"
              >
                <Users className="h-5 w-5 text-[#fcb723]" />
                Nombre de clients dans votre base de données
              </Label>
              <Input
                id="client-count"
                type="number"
                min="0"
                max="100000"
                value={clientCount}
                onChange={(e) => handleClientChange(e.target.value)}
                className="h-12 border-2 border-[#fcb723]/30 text-xl font-bold focus:border-[#fcb723]"
              />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="flex h-[180px] flex-col border-2 border-[#fcb723]/30 bg-white p-6 shadow-lg transition-colors hover:border-[#fcb723]">
              <Label
                htmlFor="avg-commission"
                className="mb-3 block flex items-center gap-2 text-base font-semibold"
              >
                <DollarSign className="h-5 w-5 text-[#fcb723]" />
                Commission moyenne par vente
              </Label>
              <div className="relative">
                <span className="text-muted-foreground absolute top-1/2 left-4 -translate-y-1/2 text-xl font-bold">
                  $
                </span>
                <Input
                  id="avg-commission"
                  type="number"
                  min="0"
                  max="1000000"
                  value={avgCommission}
                  onChange={(e) => handleCommissionChange(e.target.value)}
                  className="h-12 border-2 border-[#fcb723]/30 pl-8 text-xl font-bold focus:border-[#fcb723]"
                />
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="mx-auto mb-8 grid max-w-5xl gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card
                className={`border-2 bg-white p-6 shadow-lg ${stat.borderColor} flex h-[140px] flex-col justify-center transition-all hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="flex items-center gap-4">
                  <div className={`rounded-xl p-3 ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground mb-1 text-sm font-medium">{stat.label}</p>
                    <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto max-w-3xl"
        >
          <Card className="relative overflow-hidden border-0 bg-black shadow-2xl">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative p-8 text-center text-white md:p-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#fcb723] px-4 py-2 text-black">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm font-semibold">Potentiel de revenus</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold md:text-3xl">
                Ventes additionnelles potentielles
              </h3>
              <motion.div
                key={potentielVentes}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="mb-6 text-5xl font-bold text-[#fcb723] md:text-7xl"
              >
                {potentielVentes.toLocaleString("fr-CA", {
                  style: "currency",
                  currency: "CAD",
                  minimumFractionDigits: 0,
                })}
              </motion.div>
              <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
                Basé sur {engagement.toLocaleString()} engagements par mois à{" "}
                {avgCommission.toLocaleString("fr-CA", {
                  style: "currency",
                  currency: "CAD",
                  minimumFractionDigits: 0,
                })}{" "}
                par vente
              </p>
              <div className="mx-auto flex max-w-md gap-3">
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  className="h-12 rounded-lg border-0 bg-white/95 text-gray-900 placeholder:text-gray-500"
                />
                <button className="rounded-lg bg-[#fcb723] px-6 py-3 font-bold whitespace-nowrap text-black shadow-xl transition-all hover:scale-105 hover:bg-[#e5a520]">
                  Recevez votre aperçu
                </button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

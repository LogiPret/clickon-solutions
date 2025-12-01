"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, DollarSign, TrendingUp, Mail, MousePointerClick } from "lucide-react";
import { motion } from "framer-motion";

export function InteractiveDashboard() {
  const [clientCount, setClientCount] = useState("500");
  const [avgCommission, setAvgCommission] = useState("9000");

  const openRate = 0.46; // 46%
  const engagementRate = 0.14; // 14%

  const clientNum = Number.parseInt(clientCount) || 0;
  const commissionNum = Number.parseInt(avgCommission) || 0;

  const ouvertures = Math.round(clientNum * openRate);
  const engagement = Math.round(ouvertures * engagementRate);

  const potentielVentes = Math.round(0.05 * engagement);
  const potentielRevenu = potentielVentes * commissionNum;

  const handleClientChange = (value: string) => {
    if (value === "") {
      setClientCount("");
      return;
    }
    const num = Number.parseInt(value);
    if (!isNaN(num) && num >= 0 && num <= 100000) {
      setClientCount(value);
    }
  };

  const handleCommissionChange = (value: string) => {
    if (value === "") {
      setAvgCommission("");
      return;
    }
    const num = Number.parseInt(value);
    if (!isNaN(num) && num >= 0 && num <= 1000000) {
      setAvgCommission(value);
    }
  };

  const stats = [
    {
      label: "Ouvertures (46%)",
      value: ouvertures.toLocaleString(),
      color: "text-[#fcb723]",
      bgColor: "bg-[#fcb723]/10",
      borderColor: "border-[#fcb723]",
    },
    {
      label: "Engagement (14%)",
      value: engagement.toLocaleString(),
      color: "text-[#fcb723]",
      bgColor: "bg-[#fcb723]/10",
      borderColor: "border-[#fcb723]",
    },
    {
      label: "Ventes potentielles (5%)",
      value: potentielVentes.toLocaleString(),
      color: "text-[#fcb723]",
      bgColor: "bg-[#fcb723]/10",
      borderColor: "border-[#fcb723]",
    },
  ];

  return (
    <section
      id="interactive-dashboard"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white pt-24 pb-12"
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
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Calculez comment <span className="text-[#fcb723]">ClickOn</span> peut generer plus
            d'engagements, plus de <span className="text-[#fcb723]">revenus</span>
          </h2>
        </div>

        <div className="mx-auto mb-8 grid max-w-4xl grid-cols-2 gap-3 md:mb-12 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-full"
          >
            <Card className="flex h-full flex-col justify-between border-2 border-[#fcb723]/30 bg-white p-3 shadow-lg transition-colors md:p-6">
              <Label
                htmlFor="client-count"
                className="mb-2 flex items-center gap-1.5 text-xs font-semibold md:mb-3 md:gap-2 md:text-base"
              >
                <Users className="h-3.5 w-3.5 shrink-0 text-[#fcb723] md:h-5 md:w-5" />
                <span>Nombre de clients</span>
              </Label>
              <Input
                id="client-count"
                type="number"
                min="0"
                max="100000"
                value={clientCount}
                onChange={(e) => handleClientChange(e.target.value)}
                className="mt-auto h-9 border-2 border-[#fcb723]/30 text-base font-bold focus:border-[#fcb723] md:h-12 md:text-xl"
              />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full"
          >
            <Card className="flex h-full flex-col justify-between border-2 border-[#fcb723]/30 bg-white p-3 shadow-lg transition-colors md:p-6">
              <Label
                htmlFor="avg-commission"
                className="mb-2 flex items-center gap-1.5 text-xs font-semibold md:mb-3 md:gap-2 md:text-base"
              >
                <DollarSign className="h-3.5 w-3.5 shrink-0 text-[#fcb723] md:h-5 md:w-5" />
                <span>Commission moyenne</span>
              </Label>
              <div className="relative mt-auto">
                <span className="text-muted-foreground absolute top-1/2 left-2.5 -translate-y-1/2 text-base font-bold md:left-4 md:text-xl">
                  $
                </span>
                <Input
                  id="avg-commission"
                  type="number"
                  min="0"
                  max="1000000"
                  value={avgCommission}
                  onChange={(e) => handleCommissionChange(e.target.value)}
                  className="h-9 border-2 border-[#fcb723]/30 pl-6 text-base font-bold focus:border-[#fcb723] md:h-12 md:pl-8 md:text-xl"
                />
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-5xl"
        >
          <Card className="border-2 border-[#fcb723]/30 bg-white p-3 shadow-lg md:p-6">
            <div className="grid h-22 grid-cols-3 divide-x divide-[#fcb723]/20 md:h-32">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex h-full flex-col items-center justify-between px-2 py-2 text-center md:px-6 md:py-4"
                >
                  <p className="text-muted-foreground text-xs leading-tight font-medium md:text-sm">
                    {stat.label}
                  </p>
                  <p className={`text-2xl font-bold md:text-5xl ${stat.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto max-w-3xl"
        >
          <Card className="relative overflow-hidden border-0 bg-black shadow-2xl">
            <div className="relative p-6 text-center text-white md:p-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#fcb723] px-3 py-1.5 text-black md:px-4 md:py-2">
                <TrendingUp className="h-4 w-4 md:h-5 md:w-5" />
                <span className="text-xs font-semibold md:text-sm">Potentiel de revenus</span>
              </div>
              <h3 className="mb-2 text-xl font-bold md:mb-3 md:text-3xl">
                Ventes additionnelles potentielles
              </h3>
              <motion.div
                key={potentielRevenu}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="mb-4 text-4xl font-bold text-[#fcb723] md:mb-6 md:text-7xl"
              >
                {potentielRevenu.toLocaleString("fr-CA", {
                  style: "currency",
                  currency: "CAD",
                  minimumFractionDigits: 0,
                })}
              </motion.div>
              <p className="mx-auto mb-6 max-w-xl text-sm text-white/80 md:mb-8 md:text-lg">
                Basé sur 5% des engagements par mois à{" "}
                {commissionNum.toLocaleString("fr-CA", {
                  style: "currency",
                  currency: "CAD",
                  minimumFractionDigits: 0,
                })}{" "}
                par vente
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

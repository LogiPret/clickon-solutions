"use client";

import { useEffect, useRef, useState } from "react";

import { Target, ChevronDown } from "lucide-react";

const pillars = [
  {
    title: "Valeur",
    description: "Que ce soit pertinent pour tous les gens dans votre base de données",
    clickonSolution: "Concours de 3 à 5000$ chaque mois",
    goal: 1,
  },
  {
    title: "Constance",
    description: "Plusieurs fois par année pour assurer d'être dans sa tête",
    clickonSolution: "1 fois par mois automatiquement",
    goal: 1,
  },
  {
    title: "Engagement",
    description: "Échange d'informations pour connaître les intentions clients",
    clickonSolution: "Questions + réponses dans la plateforme",
    goal: 2,
  },
];

const goals = [
  {
    number: "01",
    title: "Rester dans la tête des gens",
    description:
      "Prospects, anciens clients, ou toute personne qui pourrait avoir besoin de vos services",
    pillars: ["Valeur", "Constance"],
  },
  {
    number: "02",
    title: "Connaître leurs intentions",
    description: "Prêt, vente, achat, référence",
    pillars: ["Engagement"],
  },
];

// Mobile scroll-driven animation component for a single goal with its pillars
function MobileGoalSection({
  goal,
  goalPillars,
}: {
  goal: (typeof goals)[0];
  goalPillars: typeof pillars;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Start when goal card is at 70% from top (lower on screen)
        // End when goal card is at 45% from top (still in middle of screen)
        const startPoint = windowHeight * 0.7;
        const endPoint = windowHeight * 0.3;

        let progress: number;
        if (rect.top >= startPoint) {
          progress = 0;
        } else if (rect.top <= endPoint) {
          progress = 1;
        } else {
          progress = (startPoint - rect.top) / (startPoint - endPoint);
        }

        setScrollProgress(Math.max(0, Math.min(1, progress)));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Eased progress for smoother animation
  const easedProgress =
    scrollProgress < 0.5
      ? 2 * scrollProgress * scrollProgress
      : 1 - Math.pow(-2 * scrollProgress + 2, 2) / 2;

  // Pillar height: 70px collapsed -> 180px expanded (taller to fit content)
  const pillarHeight = 70 + easedProgress * 110;

  return (
    <div ref={sectionRef} className="px-3 py-2">
      {/* Goal Card - compact */}
      <div className="relative z-20 rounded-xl bg-[#fcb723] p-6 shadow-md">
        <div className="flex items-start gap-2.5">
          <div className="min-w-0 flex-1">
            <span className="text-sm font-bold tracking-wider text-black/60 uppercase">
              Objectif {goal.number}
            </span>
            <h3 className="text-base text-xl leading-tight font-bold text-black">{goal.title}</h3>
            <p className="mt-1 leading-snug text-black/70">{goal.description}</p>
          </div>
        </div>
      </div>

      {/* Pillar Cards */}
      <div
        className={`relative z-10 -mt-4 grid gap-1.5 ${goalPillars.length === 2 ? "grid-cols-2" : "mx-auto max-w-40 grid-cols-1"}`}
      >
        {goalPillars.map((pillar, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-b-lg border-2 border-t-0 border-[#fcb723] bg-white pt-4 shadow-sm will-change-[height]"
            style={{
              height: `${pillarHeight}px`,
              transform: "translateZ(0)",
            }}
          >
            <div className="flex h-full flex-col p-2 pt-3">
              {/* Title */}
              <h4 className="text-center text-lg font-bold text-slate-900">{pillar.title}</h4>

              {/* Chevron when collapsed */}
              <div
                className="mt-0.5 flex justify-center"
                style={{
                  opacity: 1 - easedProgress,
                  transform: "translateZ(0)",
                  pointerEvents: "none",
                }}
              >
                <ChevronDown className="h-3.5 w-3.5 animate-bounce text-[#fcb723]" />
              </div>

              {/* Expanded content */}
              <div
                className="mt-1 flex flex-1 flex-col overflow-hidden"
                style={{
                  opacity: easedProgress,
                  transform: "translateZ(0)",
                }}
              >
                <p className="flex-1 text-sm leading-tight text-slate-600">{pillar.description}</p>
                <div className="mt-1 border-t border-[#fcb723]/30 pt-1.5">
                  <p className="text-xs leading-tight font-bold text-[#fcb723]">
                    {pillar.clickonSolution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface LineCoords {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const goal1Ref = useRef<HTMLDivElement>(null);
  const goal2Ref = useRef<HTMLDivElement>(null);
  const pillar1Ref = useRef<HTMLDivElement>(null);
  const pillar2Ref = useRef<HTMLDivElement>(null);
  const pillar3Ref = useRef<HTMLDivElement>(null);

  const [activeGoal, setActiveGoal] = useState<1 | 2>(1);

  const [lines, setLines] = useState<{
    goal1ToPillar1: LineCoords | null;
    goal1ToPillar2: LineCoords | null;
    goal2ToPillar3: LineCoords | null;
  }>({
    goal1ToPillar1: null,
    goal1ToPillar2: null,
    goal2ToPillar3: null,
  });

  useEffect(() => {
    const updateLines = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();

      const getBottomCenter = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (!ref.current) return null;
        const rect = ref.current.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.bottom - containerRect.top,
        };
      };

      const getTopCenter = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (!ref.current) return null;
        const rect = ref.current.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top - containerRect.top,
        };
      };

      const goal1Bottom = getBottomCenter(goal1Ref);
      const goal2Bottom = getBottomCenter(goal2Ref);
      const pillar1Top = getTopCenter(pillar1Ref);
      const pillar2Top = getTopCenter(pillar2Ref);
      const pillar3Top = getTopCenter(pillar3Ref);

      setLines({
        goal1ToPillar1:
          goal1Bottom && pillar1Top
            ? {
                x1: goal1Bottom.x,
                y1: goal1Bottom.y,
                x2: pillar1Top.x,
                y2: pillar1Top.y,
              }
            : null,
        goal1ToPillar2:
          goal1Bottom && pillar2Top
            ? {
                x1: goal1Bottom.x,
                y1: goal1Bottom.y,
                x2: pillar2Top.x,
                y2: pillar2Top.y,
              }
            : null,
        goal2ToPillar3:
          goal2Bottom && pillar3Top
            ? {
                x1: goal2Bottom.x,
                y1: goal2Bottom.y,
                x2: pillar3Top.x,
                y2: pillar3Top.y,
              }
            : null,
      });
    };

    updateLines();
    window.addEventListener("resize", updateLines);
    // Also update on scroll in case of any layout shifts
    window.addEventListener("scroll", updateLines);

    // Update after a small delay to ensure elements are rendered
    const timeout = setTimeout(updateLines, 100);

    return () => {
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("scroll", updateLines);
      clearTimeout(timeout);
    };
  }, []);

  const goalRefs = [goal1Ref, goal2Ref];
  const pillarRefs = [pillar1Ref, pillar2Ref, pillar3Ref];

  return (
    <section id="how-it-works" className="relative bg-slate-50">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 py-6 text-center">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Un système de fidélisation{" "}
            <span className="relative inline-block">
              <span className="relative z-10">performant</span>
              <span className="absolute bottom-0.5 left-0 z-0 h-1.5 w-full bg-[#fcb723]/70"></span>
            </span>
          </h2>
          <p className="text-lg text-slate-600">Trois piliers, deux objectifs clés.</p>
        </div>

        {/* Goal 1 Section */}
        <MobileGoalSection goal={goals[0]} goalPillars={pillars.filter((p) => p.goal === 1)} />

        {/* Goal 2 Section */}
        <MobileGoalSection goal={goals[1]} goalPillars={pillars.filter((p) => p.goal === 2)} />

        {/* Bottom CTA Mobile */}
        <div className="px-4 py-12 text-center">
          <p className="text-xl font-bold text-slate-900">
            Gagnez du temps tout en restant connecté avec vos clients
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden px-4 py-24 md:py-32 lg:block">
        <div className="mx-auto w-full max-w-7xl">
          {/* Introduction */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">
              Un système de fidélisation{" "}
              <span className="relative inline-block">
                <span className="relative z-10">performant</span>
                <span className="absolute bottom-2 left-0 z-0 h-3 w-full bg-[#fcb723]/70"></span>
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              Notre approche repose sur trois piliers fondamentaux pour atteindre deux objectifs
              critiques : rester présent et comprendre vos clients.
            </p>
          </div>

          {/* Desktop Layout (Workflow View) */}
          <div className="relative" ref={containerRef}>
            {/* Dynamic Connection Lines (Desktop SVG) */}
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              style={{ zIndex: 0 }}
            >
              {/* Goal 1 to Pillar 1 */}
              {lines.goal1ToPillar1 && (
                <>
                  {/* Starting circle at Goal 1 */}
                  <circle
                    cx={lines.goal1ToPillar1.x1}
                    cy={lines.goal1ToPillar1.y1}
                    r="4"
                    fill={activeGoal === 1 ? "#fcb723" : "#94a3b8"}
                    className="transition-colors duration-300"
                  />
                  <path
                    d={`M ${lines.goal1ToPillar1.x1} ${lines.goal1ToPillar1.y1} 
                      C ${lines.goal1ToPillar1.x1} ${(lines.goal1ToPillar1.y1 + lines.goal1ToPillar1.y2) / 2}, 
                        ${lines.goal1ToPillar1.x2} ${(lines.goal1ToPillar1.y1 + lines.goal1ToPillar1.y2) / 2}, 
                        ${lines.goal1ToPillar1.x2} ${lines.goal1ToPillar1.y2}`}
                    fill="none"
                    stroke={activeGoal === 1 ? "#fcb723" : "#cbd5e1"}
                    strokeWidth={activeGoal === 1 ? "3" : "2"}
                    strokeDasharray={activeGoal === 1 ? "0" : "8 8"}
                    className="transition-all duration-300"
                  />
                  <circle
                    cx={lines.goal1ToPillar1.x2}
                    cy={lines.goal1ToPillar1.y2}
                    r="5"
                    fill={activeGoal === 1 ? "#fcb723" : "#94a3b8"}
                    className="transition-colors duration-300"
                  />
                </>
              )}

              {/* Goal 1 to Pillar 2 */}
              {lines.goal1ToPillar2 && (
                <>
                  <circle
                    cx={lines.goal1ToPillar2.x1}
                    cy={lines.goal1ToPillar2.y1}
                    r="4"
                    fill={activeGoal === 1 ? "#fcb723" : "#94a3b8"}
                    className="transition-colors duration-300"
                  />
                  <path
                    d={`M ${lines.goal1ToPillar2.x1} ${lines.goal1ToPillar2.y1} 
                      C ${lines.goal1ToPillar2.x1} ${(lines.goal1ToPillar2.y1 + lines.goal1ToPillar2.y2) / 2}, 
                        ${lines.goal1ToPillar2.x2} ${(lines.goal1ToPillar2.y1 + lines.goal1ToPillar2.y2) / 2}, 
                        ${lines.goal1ToPillar2.x2} ${lines.goal1ToPillar2.y2}`}
                    fill="none"
                    stroke={activeGoal === 1 ? "#fcb723" : "#cbd5e1"}
                    strokeWidth={activeGoal === 1 ? "3" : "2"}
                    strokeDasharray={activeGoal === 1 ? "0" : "8 8"}
                    className="transition-all duration-300"
                  />
                  <circle
                    cx={lines.goal1ToPillar2.x2}
                    cy={lines.goal1ToPillar2.y2}
                    r="5"
                    fill={activeGoal === 1 ? "#fcb723" : "#94a3b8"}
                    className="transition-colors duration-300"
                  />
                </>
              )}

              {/* Goal 2 to Pillar 3 */}
              {lines.goal2ToPillar3 && (
                <>
                  {/* Starting circle at Goal 2 */}
                  <circle
                    cx={lines.goal2ToPillar3.x1}
                    cy={lines.goal2ToPillar3.y1}
                    r="4"
                    fill={activeGoal === 2 ? "#fcb723" : "#94a3b8"}
                    className="transition-colors duration-300"
                  />
                  <path
                    d={`M ${lines.goal2ToPillar3.x1} ${lines.goal2ToPillar3.y1} 
                      C ${lines.goal2ToPillar3.x1} ${(lines.goal2ToPillar3.y1 + lines.goal2ToPillar3.y2) / 2}, 
                        ${lines.goal2ToPillar3.x2} ${(lines.goal2ToPillar3.y1 + lines.goal2ToPillar3.y2) / 2}, 
                        ${lines.goal2ToPillar3.x2} ${lines.goal2ToPillar3.y2}`}
                    fill="none"
                    stroke={activeGoal === 2 ? "#fcb723" : "#cbd5e1"}
                    strokeWidth={activeGoal === 2 ? "3" : "2"}
                    strokeDasharray={activeGoal === 2 ? "0" : "8 8"}
                    className="transition-all duration-300"
                  />
                  <circle
                    cx={lines.goal2ToPillar3.x2}
                    cy={lines.goal2ToPillar3.y2}
                    r="5"
                    fill={activeGoal === 2 ? "#fcb723" : "#94a3b8"}
                    className="transition-colors duration-300"
                  />
                </>
              )}
            </svg>

            {/* Goals Row */}
            <div className="relative z-10 mb-24 grid gap-8 md:grid-cols-2 lg:mb-32">
              {goals.map((goal, index) => {
                const goalNumber = (index + 1) as 1 | 2;
                const isActive = activeGoal === goalNumber;

                return (
                  <div
                    key={index}
                    ref={goalRefs[index]}
                    onClick={() => setActiveGoal(goalNumber)}
                    className={`relative cursor-pointer rounded-2xl border-2 p-8 shadow-sm transition-all duration-300 ${
                      isActive
                        ? "border-[#fcb723] bg-[#fcb723]"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                          isActive ? "bg-black" : "bg-slate-100"
                        }`}
                      >
                        <Target
                          className={`h-7 w-7 transition-colors duration-300 ${
                            isActive ? "text-[#fcb723]" : "text-slate-700"
                          }`}
                        />
                      </div>
                      <div>
                        <span
                          className={`font-bold tracking-wider uppercase transition-colors duration-300 ${
                            isActive ? "text-black/60" : "text-slate-400"
                          }`}
                        >
                          Objectif {goal.number}
                        </span>
                        <h3
                          className={`mt-1 text-xl font-bold transition-colors duration-300 md:text-2xl ${
                            isActive ? "text-black" : "text-slate-900"
                          }`}
                        >
                          {goal.title}
                        </h3>
                        <p
                          className={`mt-2 transition-colors duration-300 ${
                            isActive ? "text-black/70" : "text-slate-600"
                          }`}
                        >
                          {goal.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pillars Row */}
            <div className="relative z-10 grid gap-6 md:grid-cols-3">
              {pillars.map((pillar, index) => {
                const isActive = activeGoal === pillar.goal;

                return (
                  <div
                    key={index}
                    ref={pillarRefs[index]}
                    className={`relative rounded-2xl border-2 bg-white p-8 transition-all duration-300 hover:shadow-xl ${
                      isActive ? "border-[#fcb723] shadow-lg" : "border-slate-200"
                    }`}
                  >
                    <h4 className="mb-3 text-2xl font-bold text-slate-900">{pillar.title}</h4>
                    <p className="mb-6 leading-relaxed text-slate-600">{pillar.description}</p>

                    <div
                      className={`border-t pt-4 transition-colors duration-300 ${
                        isActive ? "border-[#fcb723]/30" : "border-slate-200"
                      }`}
                    >
                      <p className="mb-2 text-xs font-bold tracking-wider text-slate-400 uppercase">
                        ClickOn automatise
                      </p>
                      <p
                        className={`font-bold transition-colors duration-300 ${
                          isActive ? "text-[#fcb723]" : "text-slate-900"
                        }`}
                      >
                        {pillar.clickonSolution}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <p className="text-2xl font-bold text-slate-900">
              Gagnez du temps tout en restant connecté avec vos clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

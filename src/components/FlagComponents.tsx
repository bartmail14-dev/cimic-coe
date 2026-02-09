// src/components/FlagComponents.tsx
// Zelfstandige, eenvoudige SVG-vlaggen. Elke flag heeft dezelfde viewBox (24x16)
// en accepteert optioneel className voor grootte/styling (bijv. h-4 w-6).

import React from "react";

type FlagProps = { className?: string };

// Frame helper
function SvgFrame({
  children,
  className = "",
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 16"
      role="img"
      aria-label={title}
      width="24"
      height="16"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      {children}
    </svg>
  );
}

/** 🇳🇱 Netherlands – rood/wit/blauw */
export function FlagNetherlands({ className = "" }: FlagProps) {
  return (
    <SvgFrame className={className} title="Netherlands">
      <rect x="0" y="0" width="24" height="16" fill="#21468B" />
      <rect x="0" y="0" width="24" height="10.6667" fill="#FFFFFF" />
      <rect x="0" y="0" width="24" height="5.3333" fill="#AE1C28" />
    </SvgFrame>
  );
}

/** 🇩🇪 Germany – zwart/rood/geel */
export function FlagGermany({ className = "" }: FlagProps) {
  return (
    <SvgFrame className={className} title="Germany">
      <rect x="0" y="0" width="24" height="5.3333" fill="#000000" />
      <rect x="0" y="5.3333" width="24" height="5.3333" fill="#DD0000" />
      <rect x="0" y="10.6667" width="24" height="5.3333" fill="#FFCE00" />
    </SvgFrame>
  );
}

/** 🇧🇪 Belgium – zwart/geel/rood */
export function FlagBelgium({ className = "" }: FlagProps) {
  return (
    <SvgFrame className={className} title="Belgium">
      <rect x="0" y="0" width="8" height="16" fill="#000000" />
      <rect x="8" y="0" width="8" height="16" fill="#FDDA24" />
      <rect x="16" y="0" width="8" height="16" fill="#EF3340" />
    </SvgFrame>
  );
}

/** 🇫🇷 France – blauw/wit/rood */
export function FlagFrance({ className = "" }: FlagProps) {
  return (
    <SvgFrame className={className} title="France">
      <rect x="0" y="0" width="8" height="16" fill="#0055A4" />
      <rect x="8" y="0" width="8" height="16" fill="#FFFFFF" />
      <rect x="16" y="0" width="8" height="16" fill="#EF4135" />
    </SvgFrame>
  );
}

/** 🇪🇺 European Union – blauw met 12 sterren (gestileerd) */
export function FlagEU({ className = "" }: FlagProps) {
  const stars = Array.from({ length: 12 });
  const cx = 12;
  const cy = 8;
  const r = 5.5;
  return (
    <SvgFrame className={className} title="European Union">
      <rect x="0" y="0" width="24" height="16" fill="#003399" />
      {stars.map((_, i) => {
        const angle = (i / 12) * 2 * Math.PI - Math.PI / 2;
        const sx = cx + r * Math.cos(angle);
        const sy = cy + r * Math.sin(angle);
        return <circle key={i} cx={sx} cy={sy} r="0.7" fill="#FFCC00" />;
      })}
    </SvgFrame>
  );
}

/** 🇬🇧 United Kingdom – vereenvoudigde Union Jack */
export function FlagUK({ className = "" }: FlagProps) {
  return (
    <SvgFrame className={className} title="United Kingdom">
      <rect x="0" y="0" width="24" height="16" fill="#012169" />
      {/* Witte kruizen */}
      <rect x="10.4" y="0" width="3.2" height="16" fill="#FFFFFF" />
      <rect x="0" y="6.4" width="24" height="3.2" fill="#FFFFFF" />
      {/* Rode kruisen */}
      <rect x="11.2" y="0" width="1.6" height="16" fill="#C8102E" />
      <rect x="0" y="7.2" width="24" height="1.6" fill="#C8102E" />
    </SvgFrame>
  );
}

/** 🇺🇸 United States – gestileerd (strepen + blauw kanton) */
export function FlagUSA({ className = "" }: FlagProps) {
  const stripe = 16 / 13;
  return (
    <SvgFrame className={className} title="United States">
      {Array.from({ length: 13 }).map((_, i) => (
        <rect
          key={i}
          x="0"
          y={i * stripe}
          width="24"
          height={stripe}
          fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"}
        />
      ))}
      <rect x="0" y="0" width="10.5" height={stripe * 7} fill="#3C3B6E" />
    </SvgFrame>
  );
}

/** 🇵🇱 Poland – wit/rood */
export function FlagPoland({ className = "" }: FlagProps) {
  return (
    <SvgFrame className={className} title="Poland">
      <rect x="0" y="0" width="24" height="8" fill="#FFFFFF" />
      <rect x="0" y="8" width="24" height="8" fill="#DC143C" />
    </SvgFrame>
  );
}

/** 🇩🇰 Denmark – rood met wit Scandinavisch kruis */
export function FlagDenmark({ className = "" }: FlagProps) {
  return (
    <SvgFrame className={className} title="Denmark">
      <rect x="0" y="0" width="24" height="16" fill="#C60C30" />
      <rect x="0" y="6" width="24" height="4" fill="#FFFFFF" />
      <rect x="7" y="0" width="4" height="16" fill="#FFFFFF" />
    </SvgFrame>
  );
}

/** 🇮🇹 Italy – groen/wit/rood */
export function FlagItaly({ className = "" }: FlagProps) {
  return (
    <SvgFrame className={className} title="Italy">
      <rect x="0" y="0" width="8" height="16" fill="#009246" />
      <rect x="8" y="0" width="8" height="16" fill="#FFFFFF" />
      <rect x="16" y="0" width="8" height="16" fill="#CE2B37" />
    </SvgFrame>
  );
}

/** 🇨🇿 Czechia – wit/rood met blauwe driehoek */
export function FlagCzechia({ className = "" }: FlagProps) {
  return (
    <SvgFrame className={className} title="Czechia">
      <rect x="0" y="0" width="24" height="8" fill="#FFFFFF" />
      <rect x="0" y="8" width="24" height="8" fill="#D7141A" />
      <polygon points="0,0 12,8 0,16" fill="#11457E" />
    </SvgFrame>
  );
}

/** 🇷🇴 Romania – blauw/geel/rood */
export function FlagRomania({ className = "" }: FlagProps) {
  return (
    <SvgFrame className={className} title="Romania">
      <rect x="0" y="0" width="8" height="16" fill="#002B7F" />
      <rect x="8" y="0" width="8" height="16" fill="#FCD116" />
      <rect x="16" y="0" width="8" height="16" fill="#CE1126" />
    </SvgFrame>
  );
}

/** 🇸🇮 Slovenia – wit/blauw/rood (gestileerd, zonder wapen) */
export function FlagSlovenia({ className = "" }: FlagProps) {
  return (
    <SvgFrame className={className} title="Slovenia">
      <rect x="0" y="0" width="24" height="16" fill="#C8102E" />
      <rect x="0" y="0" width="24" height="10.6667" fill="#005EB8" />
      <rect x="0" y="0" width="24" height="5.3333" fill="#FFFFFF" />
    </SvgFrame>
  );
}

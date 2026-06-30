"use client";

import React from "react";

// ─── SVG distortion filter — render once at the top of your layout ───────────
export const GlassFilter: React.FC = () => (
  <svg style={{ display: "none" }} aria-hidden="true">
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="200"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

// ─── Core glass wrapper ───────────────────────────────────────────────────────
interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style = {},
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative flex font-semibold overflow-hidden cursor-pointer transition-all duration-700 ${className}`}
      style={{
        boxShadow: "0 6px 6px rgba(0,0,0,0.25), 0 0 20px rgba(0,0,0,0.15)",
        transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
        ...style,
      }}
    >
      {/* Backdrop blur + distortion */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
        style={{
          backdropFilter: "blur(4px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />
      {/* White glass tint — subtle on dark bg */}
      <div
        className="absolute inset-0 z-10 rounded-[inherit]"
        style={{ background: "rgba(255, 255, 255, 0.08)" }}
      />
      {/* Inner highlight ring */}
      <div
        className="absolute inset-0 z-20 rounded-[inherit] overflow-hidden"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255,255,255,0.25), inset -1px -1px 1px 1px rgba(255,255,255,0.12)",
        }}
      />
      {/* Content */}
      <div className="relative z-30 w-full">{children}</div>
    </div>
  );
};

// ─── SkillHub Glass Button ────────────────────────────────────────────────────
// Replaces all Link/button CTAs sitewide.
// variant="primary" = yellow-tinted glass
// variant="secondary" = neutral dark glass

interface GlassButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  fontFamily?: string;
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  fontFamily,
}) => {
  const isPrimary = variant === "primary";

  const inner = (
    <GlassEffect
      onClick={!href ? onClick : undefined}
      className={`rounded-2xl px-7 py-3 hover:px-8 hover:py-3.5 hover:rounded-3xl ${className}`}
      style={{
        // Primary: gold tint. Secondary: white/neutral tint.
        background: isPrimary
          ? "rgba(224, 206, 0, 0.18)"
          : "rgba(255, 255, 255, 0.06)",
        border: isPrimary
          ? "1px solid rgba(224, 206, 0, 0.35)"
          : "1px solid rgba(255, 255, 255, 0.12)",
      }}
    >
      <span
        className={`text-sm tracking-wide whitespace-nowrap ${
          isPrimary ? "text-[#E0CE00]" : "text-white/70"
        }`}
        style={{ fontFamily }}
      >
        {children}
      </span>
    </GlassEffect>
  );

  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
};
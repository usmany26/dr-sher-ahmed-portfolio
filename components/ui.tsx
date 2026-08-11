"use client";

import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
export function PillButton({ children, href = "#contact", light = false }: { children: ReactNode; href?: string; light?: boolean }) { const external = href.startsWith("http"); return <a className={`pill-button ${light ? "light" : ""}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{children}<ArrowRight size={17} /></a>; }
export function Eyebrow({ children }: { children: ReactNode }) { return <span className="eyebrow">{children}</span>; }
export function ToothSection({ children, variant = "content", id, className = "" }: { children: ReactNode; variant?: "hero" | "content" | "services" | "compact"; id?: string; className?: string }) {
  const reduceMotion = useReducedMotion();
  const initial = variant === "hero"
    ? { opacity: 0, y: 14 }
    : variant === "content"
      ? { opacity: 0, x: -28 }
      : variant === "services"
        ? { opacity: 0, x: 28 }
        : { opacity: 0, y: 24 };

  return <motion.section
    id={id}
    className={`tooth-section tooth-${variant} ${className}`}
    initial={reduceMotion ? false : initial}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, amount: .08, margin: "0px 0px -6% 0px" }}
    transition={{ duration: .9, ease: [0.16, 1, 0.3, 1] }}
  >{children}</motion.section>;
}
export function Logo() { return <a href="#home" className="logo" aria-label="SmileLab home"><svg viewBox="0 0 32 36" aria-hidden="true"><path d="M6 3C2 5 2 12 4 18c2 6 3 14 7 14 3 0 2-10 5-10s2 10 5 10c4 0 5-8 7-14 2-6 2-13-2-15-4-2-7 1-10 1S10 1 6 3Z" /></svg><b>Dr Sher Ahmed</b></a>; }

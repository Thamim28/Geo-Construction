"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  variant?: "white" | "slate" | "yellow" | "dark";
}

export function Section({
  children,
  id,
  title,
  subtitle,
  center = false,
  className,
  variant = "white",
}: SectionProps) {
  const variants = {
    white: "bg-white text-slate-900",
    slate: "bg-slate-50 text-slate-900",
    yellow: "bg-brand-yellow text-brand-black",
    dark: "bg-brand-black text-white",
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={cn(
        "section-padding overflow-hidden",
        variants[variant],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className={cn("mb-12 space-y-2", center && "text-center")}>
            {subtitle && (
              <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-yellow drop-shadow-sm">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1]">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}

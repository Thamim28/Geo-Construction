import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "solid" | "soft" | "outline";
  color?: "yellow" | "white" | "slate" | "dark" | "blue" | "red" | "green";
  className?: string;
}

export function Badge({
  children,
  variant = "solid",
  color = "yellow",
  className,
}: BadgeProps) {
  const variants = {
    solid: {
      yellow: "bg-brand-yellow text-brand-black",
      white: "bg-white text-brand-black",
      slate: "bg-slate-100 text-slate-600",
      dark: "bg-brand-black text-white",
      blue: "bg-blue-600 text-white",
      red: "bg-red-600 text-white",
      green: "bg-brand-black text-brand-yellow", // Redefined green as a yellow/black combo for legacy compatibility
    },
    soft: {
      yellow: "bg-brand-yellow/10 text-brand-black border border-brand-yellow/20",
      white: "bg-white/10 text-white border border-white/20",
      slate: "bg-slate-50 text-slate-500 border border-slate-100",
      dark: "bg-brand-black/5 text-brand-black border border-brand-black/10",
      blue: "bg-blue-50 text-blue-600 border border-blue-100",
      red: "bg-red-50 text-red-600 border border-red-100",
      green: "bg-brand-yellow/5 text-brand-black border border-brand-yellow/10",
    },
    outline: {
      yellow: "border-brand-yellow text-brand-yellow",
      white: "border-white text-white",
      slate: "border-slate-200 text-slate-500",
      dark: "border-brand-black text-brand-black",
      blue: "border-blue-200 text-blue-600",
      red: "border-red-200 text-red-600",
      green: "border-brand-yellow text-brand-yellow",
    },
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-transparent",
        variants[variant][color as keyof typeof variants.solid],
        className
      )}
    >
      {children}
    </span>
  );
}

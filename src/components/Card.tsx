"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  image?: string;
  className?: string;
  horizontal?: boolean;
}

export function Card({
  children,
  title,
  subtitle,
  image,
  className,
  horizontal = false,
}: CardProps) {
  const [imgSrc, setImgSrc] = useState(image ?? "/images/fallback-expertise.jpg");

  useEffect(() => {
    setImgSrc(image ?? "/images/fallback-expertise.jpg");
  }, [image]);

  return (
    <div
      className={cn(
        "group relative flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500",
        horizontal ? "md:flex-row md:items-stretch" : "h-full",
        className
      )}
    >
      <div className={cn(
        "relative overflow-hidden shrink-0",
        horizontal ? "md:w-1/3 h-48 md:h-auto" : "pt-[60%]"
      )}>
        <img
          src={imgSrc}
          onError={() => setImgSrc("https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800")}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/0 transition-colors" />
      </div>
      <div className="flex flex-col flex-1 p-8">
        <div className="mb-4">
          <h3 className="text-xl font-black text-brand-black uppercase tracking-tight mb-2 group-hover:text-brand-yellow transition-colors leading-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              {subtitle}
            </p>
          )}
        </div>
        <div className="flex-1 text-sm text-slate-600 font-medium leading-relaxed mb-6">
          {children}
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export function Accordion({ title, children, isOpen, onToggle }: AccordionProps) {
  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden mb-4 shadow-sm transition-all hover:shadow-md">
      <button 
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between p-6 text-left transition-all focus:outline-none",
          isOpen ? "bg-brand-black text-brand-yellow" : "bg-white text-brand-black hover:bg-slate-50"
        )}
      >
        <span className="text-sm font-black uppercase tracking-wider">{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-[500px]" : "max-h-0"
      )}>
        <div className="p-6 text-slate-600 font-medium text-sm leading-relaxed border-t border-slate-100 italic">
          {children}
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070" 
            alt="Construction Site"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Content has been removed: only video overlay remains */}
      <div className="absolute inset-0 z-10 bg-black/20" />

    </motion.section>
  );
}

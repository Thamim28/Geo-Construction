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
      
      {/* Background Video (replace URL with your video) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="https://cdn.coverr.co/videos/coverr-aerial-shot-of-construction-engineering-9435/1080p.mp4"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-brand-yellow mr-2 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-white">
            Building Excellence Since 2010
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
          GEO <span className="text-brand-yellow">CONSTRUCTION</span> <br />
          <span className="text-white">ENGINEERING THE FUTURE</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-medium">
          Premium structural engineering, architectural design, and industrial building solutions 
          tailored for stability, speed, and safety.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button size="lg" className="w-full sm:w-auto px-10 group bg-brand-black text-white hover:bg-brand-black/90" rightIcon={<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}>
            Start Your Project
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto px-10 text-white border-white/30 hover:bg-white/10"
            leftIcon={<Play size={20} className="fill-brand-yellow text-brand-yellow" />}
          >
            Watch Showreel
          </Button>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
    </motion.section>
  );
}

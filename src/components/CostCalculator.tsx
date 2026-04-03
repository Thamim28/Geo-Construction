"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { Calculator, HardHat, Building2, Warehouse } from "lucide-react";
import { cn } from "@/lib/utils";

const projectTypes = [
  { id: "residential", name: "Residential", icon: <HardHat size={20} />, baseRate: 1500 },
  { id: "commercial", name: "Commercial", icon: <Building2 size={20} />, baseRate: 2200 },
  { id: "industrial", name: "Industrial", icon: <Warehouse size={20} />, baseRate: 3500 },
];

const materialGrades = [
  { id: "standard", name: "Standard", multiplier: 1 },
  { id: "premium", name: "Premium", multiplier: 1.3 },
  { id: "luxury", name: "Luxury", multiplier: 1.8 },
];

export function CostCalculator() {
  const [area, setArea] = useState<number>(1000);
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [materialGrade, setMaterialGrade] = useState(materialGrades[0]);
  const [estimate, setEstimate] = useState(0);

  useEffect(() => {
    const total = area * projectType.baseRate * materialGrade.multiplier;
    setEstimate(total);
  }, [area, projectType, materialGrade]);

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 max-w-4xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 bg-brand-yellow rounded-xl text-brand-black">
          <Calculator size={32} />
        </div>
        <div>
          <h3 className="text-3xl font-black tracking-tight text-brand-black">Project Estimator</h3>
          <p className="text-slate-500 font-medium">Get an instant quote for your build.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          {/* Project Type */}
          <div className="space-y-4">
            <label className="text-sm font-black uppercase tracking-widest text-slate-400">Project Type</label>
            <div className="grid grid-cols-1 gap-3">
              {projectTypes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setProjectType(t)}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-xl border-2 transition-all font-bold",
                    projectType.id === t.id 
                      ? "border-brand-yellow bg-brand-yellow/5 text-brand-black shadow-md" 
                      : "border-slate-100 hover:border-slate-200 text-slate-500"
                  )}
                >
                  <div className="flex items-center space-x-3">
                    {t.icon}
                    <span>{t.name}</span>
                  </div>
                  {projectType.id === t.id && <div className="w-2 h-2 rounded-full bg-brand-yellow" />}
                </button>
              ))}
            </div>
          </div>

          {/* Area Input */}
          <div className="space-y-4">
            <label className="text-sm font-black uppercase tracking-widest text-slate-400">Area (sq. ft.)</label>
            <div className="relative">
              <input 
                type="range" 
                min="100" 
                max="10000" 
                step="100" 
                value={area} 
                onChange={(e) => setArea(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
              />
              <div className="flex justify-between mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span>100 sqft</span>
                <span className="text-brand-black font-black">{area} SQFT</span>
                <span>10,000 sqft</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Material Grade */}
          <div className="space-y-4">
            <label className="text-sm font-black uppercase tracking-widest text-slate-400">Material Grade</label>
            <div className="flex gap-2">
              {materialGrades.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMaterialGrade(m)}
                  className={cn(
                    "flex-1 py-3 px-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all border",
                    materialGrade.id === m.id
                      ? "bg-brand-black text-white border-brand-black shadow-lg"
                      : "bg-slate-50 text-slate-500 border-slate-100 hover:bg-slate-100"
                  )}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-brand-black rounded-3xl p-8 text-white relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 text-center space-y-2">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-yellow opacity-80">Estimated Cost</span>
              <div className="text-5xl font-black tracking-tighter">
                ${estimate.toLocaleString()}
              </div>
              <p className="text-xs text-white/50 pt-4 uppercase tracking-widest font-medium">Includes labor & core materials</p>
            </div>
            
            <div className="mt-8 relative z-10">
              <Button variant="secondary" className="w-full py-6 font-black uppercase tracking-widest rounded-xl">
                Get Detailed Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

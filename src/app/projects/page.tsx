"use client";

import React, { useState } from "react";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Search, Filter, LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectCategory = "All" | "Residential" | "Commercial" | "Industrial" | "Ongoing" | "Completed";

const projectData = [
  {
    title: "Skyline Premium Residency",
    category: "Residential",
    status: "Completed",
    location: "Metropolis City",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
    description: "A 45-story luxury residential complex with sustainable energy and smart interiors."
  },
  {
    title: "Global Commerce Center",
    category: "Commercial",
    status: "Ongoing",
    location: "Downtown District",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    description: "Modern office layouts with modular design and state-of-the-art security."
  },
  {
    title: "Eco-Friendly Tech Hub",
    category: "Commercial",
    status: "Upcoming",
    location: "Valley District",
    image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1000",
    description: "An innovative workspace featuring vertical gardens and carbon-neutral construction."
  },
  {
    title: "North Logistics Park",
    category: "Industrial",
    status: "Completed",
    location: "North Industrial Zone",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
    description: "High-capacity automated warehouse with smart inventory management systems."
  },
  {
    title: "Sunset Villa Estates",
    category: "Residential",
    status: "Ongoing",
    location: "Oasis Suburb",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
    description: "Private luxury villa community showcasing modern Mediterranean architecture."
  },
  {
    title: "Metro Railway Phase II",
    category: "Industrial",
    status: "Ongoing",
    location: "Transborder Corridor",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000",
    description: "Advanced infrastructure project focusing on high-speed rail connectivity."
  }
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProjects = projectData.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter || project.status === activeFilter;
  });

  const filterOptions: ProjectCategory[] = ["All", "Residential", "Commercial", "Industrial", "Ongoing", "Completed"];

  return (
    <div className="pt-20">
      {/* Projects Title */}
      <Section variant="white" title="Our Architectural Legacy" subtitle="Portfolio" center={true} className="pb-10">
        <p className="max-w-2xl mx-auto text-slate-600 text-lg font-medium">
          Explore our diverse range of engineering masterpieces, from sustainable housing 
          to complex industrial infrastructures.
        </p>
      </Section>

      {/* Filter Bar */}
      <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-y border-slate-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border-2",
                    activeFilter === filter 
                      ? "bg-brand-yellow border-brand-yellow text-brand-black shadow-lg shadow-brand-yellow/20" 
                      : "bg-transparent border-slate-100 text-slate-400 hover:border-brand-yellow hover:text-brand-black"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <div className="hidden md:flex items-center space-x-4 bg-slate-50 p-1 rounded-xl">
               <button 
                 onClick={() => setViewMode("grid")}
                 className={cn("p-2 rounded-lg transition-all", viewMode === "grid" ? "bg-white shadow-sm text-brand-black" : "text-slate-400")}
               >
                 <LayoutGrid size={20} />
               </button>
               <button 
                 onClick={() => setViewMode("list")}
                 className={cn("p-2 rounded-lg transition-all", viewMode === "list" ? "bg-white shadow-sm text-brand-black" : "text-slate-400")}
               >
                 <List size={20} />
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <Section variant="slate" className="pt-20">
        <div className={cn(
          "grid gap-10",
          viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
        )}>
          {filteredProjects.map((project, idx) => (
            <Card 
              key={idx} 
              title={project.title} 
              image={project.image} 
              horizontal={viewMode === "list"}
              className={cn(viewMode === "list" && "min-h-[300px]")}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Badge color={project.status === "Completed" ? "dark" : project.status === "Ongoing" ? "yellow" : "slate"} variant="soft">
                  {project.status}
                </Badge>
                <span className="text-slate-400">•</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{project.location}</span>
              </div>
              <p className="line-clamp-3 mb-6 text-sm text-slate-600 font-medium">{project.description}</p>
              <div className="mt-auto">
                <Button variant="outline" size="sm" className="w-full md:w-auto font-black uppercase tracking-widest text-[10px]">
                   Case Study
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-2xl font-black text-slate-300 uppercase italic">No projects found for the selected category.</h3>
          </div>
        )}
      </Section>

      {/* Bottom Stats */}
      <Section variant="yellow" className="py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
           <div className="space-y-2">
             <div className="text-6xl font-black text-brand-black tracking-tighter leading-none">1.5M</div>
             <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-black/60">Sq. Ft. Built</div>
           </div>
           <div className="space-y-2">
             <div className="text-6xl font-black text-brand-black tracking-tighter leading-none">12</div>
             <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-black/60">Safety Awards</div>
           </div>
           <div className="space-y-2">
             <div className="text-6xl font-black text-brand-black tracking-tighter leading-none">100%</div>
             <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-black/60">Compliance</div>
           </div>
        </div>
      </Section>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { 
  BarChart3, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  FileText, 
  LayoutDashboard, 
  Plus, 
  Settings, 
  TowerControl as Control,
  User,
  LogOut,
  Bell,
  HardHat
} from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectStatus = "Under Review" | "Planning" | "Excavation" | "Structural" | "Finishing" | "Completed";

interface MockBuild {
  id: string;
  name: string;
  status: ProjectStatus;
  progress: number;
  lastUpdate: string;
}

export default function CdeckPortal() {
  const [builds, setBuilds] = useState<MockBuild[]>([]);
  const [activeTab, setActiveTab] = useState<"projects" | "docs" | "profile">("projects");

  useEffect(() => {
    const saved = localStorage.getItem("geo_builds");
    if (saved) {
      setBuilds(JSON.parse(saved));
    } else {
      const initial: MockBuild[] = [
        { id: "1", name: "Metro Skyline Villa", status: "Structural", progress: 65, lastUpdate: "2h ago" },
        { id: "2", name: "Downtown Office Retrofit", status: "Planning", progress: 15, lastUpdate: "1d ago" },
      ];
      setBuilds(initial);
      localStorage.setItem("geo_builds", JSON.stringify(initial));
    }
  }, []);

  const addBuild = () => {
    const newBuild: MockBuild = {
      id: Date.now().toString(),
      name: "New Project Build " + (builds.length + 1),
      status: "Under Review",
      progress: 0,
      lastUpdate: "Just now"
    };
    const updated = [...builds, newBuild];
    setBuilds(updated);
    localStorage.setItem("geo_builds", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-12 flex flex-col md:flex-row">
      {/* Sidebar - Desktop */}
      <aside className="w-full md:w-64 bg-brand-black border-r border-white/10 p-6 space-y-10 md:static fixed bottom-0 md:h-auto h-20 md:flex-col flex-row flex items-center justify-around md:justify-start z-50">
        <div className="hidden md:flex items-center space-x-2 text-brand-yellow font-black text-xl mb-4">
           <Control size={24} />
           <span>CDECK</span>
        </div>
        
        <nav className="flex md:flex-col flex-row md:space-y-2 space-x-4 md:space-x-0 w-full">
           <SidebarLink 
              icon={<LayoutDashboard size={20} />} 
              label="Overview" 
              active={activeTab === "projects"} 
              onClick={() => setActiveTab("projects")} 
            />
           <SidebarLink 
              icon={<FileText size={20} />} 
              label="Documents" 
              active={activeTab === "docs"} 
              onClick={() => setActiveTab("docs")} 
            />
           <SidebarLink 
              icon={<User size={20} />} 
              label="Account" 
              active={activeTab === "profile"} 
              onClick={() => setActiveTab("profile")} 
            />
           <SidebarLink 
              icon={<Settings size={20} />} 
              label="Settings" 
              active={false} 
              onClick={() => {}} 
            />
        </nav>

        <div className="mt-auto hidden md:block pt-10 border-t border-white/5">
           <SidebarLink icon={<LogOut size={20} />} label="Logout" active={false} onClick={() => {}} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
           <div>
             <h1 className="text-3xl font-black text-brand-black tracking-tight uppercase">Client Dashboard</h1>
             <p className="text-slate-500 font-medium">Welcome back, George.</p>
           </div>
           <div className="flex items-center space-x-4">
             <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-brand-yellow hover:shadow-md transition-all">
                <Bell size={20} />
             </button>
             <Button variant="primary" size="md" className="rounded-xl shadow-lg font-black uppercase text-xs" leftIcon={<Plus />} onClick={addBuild}>
                New Build Request
             </Button>
           </div>
        </div>

        {activeTab === "projects" && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <DashboardStatItem label="Active Builds" value={builds.length.toString()} icon={<Control />} color="yellow" />
              <DashboardStatItem label="Material Orders" value="12" icon={<Clock />} color="yellow" />
              <DashboardStatItem label="Budget Usage" value="84%" icon={<BarChart3 />} color="blue" />
            </div>

            {/* Builds List */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
               <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                 <h3 className="font-black text-brand-black uppercase tracking-widest text-sm">Active Projects</h3>
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sort by: Last Update</span>
               </div>
               <div className="divide-y divide-slate-100">
                 {builds.map((build) => (
                   <ProjectRow key={build.id} build={build} />
                 ))}
               </div>
            </div>
          </div>
        )}

        {/* Informational Alert */}
        <div className="bg-brand-black rounded-2xl p-6 flex items-start space-x-4 text-white relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
           <div className="p-3 bg-brand-yellow rounded-xl text-brand-black shrink-0 relative z-10">
              <Calendar size={20} />
           </div>
           <div className="relative z-10">
              <h4 className="font-black uppercase tracking-tight text-brand-yellow">Site Inspection Scheduled</h4>
              <p className="text-sm text-white/60 font-medium">Engineer Alex Chen is scheduled for a structural safety check on your Metro Skyline Villa tomorrow at 10:00 AM.</p>
           </div>
        </div>
      </main>
    </div>
  );
}

function SidebarLink({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex md:w-full items-center md:px-4 py-3 rounded-xl transition-all font-black uppercase text-xs tracking-wider",
        active 
          ? "bg-brand-yellow text-brand-black shadow-lg md:translate-x-2" 
          : "text-white/40 hover:text-brand-yellow hover:bg-white/5"
      )}
    >
      <span className="md:mr-3">{icon}</span>
      <span className="hidden md:inline">{label}</span>
    </button>
  );
}

function DashboardStatItem({ label, value, icon, color }: { label: string; value: string; icon: React.ReactNode; color: "yellow" | "blue" }) {
  const colors = {
    yellow: "bg-brand-yellow text-brand-black",
    blue: "bg-brand-black text-brand-yellow border border-brand-yellow/20",
  };
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow">
       <div className={cn("p-4 rounded-2xl shrink-0 shadow-inner", colors[color])}>
         {icon}
       </div>
       <div>
         <div className="text-2xl font-black text-brand-black tracking-tighter">{value}</div>
         <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</div>
       </div>
    </div>
  );
}

function ProjectRow({ build }: { build: MockBuild }) {
  return (
    <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors">
       <div className="flex items-center space-x-6 w-full md:w-1/3">
          <div className="h-16 w-16 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0 border-2 border-white shadow-sm overflow-hidden">
             <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=200" className="object-cover w-full h-full" alt="Project Thumbnail" />
          </div>
          <div>
            <h4 className="font-black text-brand-black text-lg leading-tight uppercase tracking-tight">{build.name}</h4>
            <div className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
               <Clock size={12} className="mr-1" /> Updated {build.lastUpdate}
            </div>
          </div>
       </div>
       
       <div className="w-full md:w-1/4">
          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
            <span>Overall Progress</span>
            <span className="text-brand-black">{build.progress}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-100 shadow-inner">
             <div className="h-full bg-brand-yellow rounded-full transition-all duration-1000" style={{ width: `${build.progress}%` }} />
          </div>
       </div>

       <div className="flex items-center justify-end space-x-6 w-full md:w-1/4">
          <Badge color={build.status === "Structural" ? "dark" : "yellow"} variant="soft" className="uppercase text-[10px]">
             {build.status}
          </Badge>
          <Button variant="ghost" size="icon" className="hover:bg-white hover:shadow-sm">
             <CheckCircle2 size={24} className="text-slate-300 hover:text-brand-yellow" />
          </Button>
       </div>
    </div>
  );
}

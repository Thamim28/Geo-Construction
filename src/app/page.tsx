import React from "react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { CostCalculator } from "@/components/CostCalculator";
import { 
  Building2, 
  HardHat, 
  Hammer, 
  ShieldCheck, 
  TrendingUp,
  CheckCircle2, 
  Zap,
  Globe,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <div className="relative z-30 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-brand-black rounded-[2rem] shadow-2xl p-10 border border-white/5">
          <StatItem icon={<Building2 className="text-brand-yellow" />} label="Projects Completed" value="450+" />
          <StatItem icon={<HardHat className="text-brand-yellow" />} label="Happy Clients" value="1.2k" />
          <StatItem icon={<TrendingUp className="text-brand-yellow" />} label="Growth Rate" value="25%" />
          <StatItem icon={<ShieldCheck className="text-brand-yellow" />} label="Safety Rating" value="99.9%" />
        </div>
      </div>

      {/* About Section */}
      <Section id="about" title="Crafting Excellence Since 2010" subtitle="Our Legacy" center={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Geo Construction was founded on the principles of integrity, quality, and innovation. 
              Over the last 15 years, we have grown into a leading infrastructure group.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <FeatureItem text="Certified Engineering Team" />
              <FeatureItem text="Sustainable Build Practices" />
              <FeatureItem text="On-Time Delivery Guarantee" />
              <FeatureItem text="Modern Asset Management" />
            </div>
            <div className="pt-8">
              <Button variant="outline" size="lg" className="px-10 font-black uppercase text-sm tracking-widest">
                Our Story
              </Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-6 bg-brand-yellow/10 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000" 
              alt="Engineers discussing plans" 
              className="relative rounded-[2rem] shadow-2xl w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Core Services Section */}
      <Section variant="dark" title="Our Core Expertise" subtitle="Capability" center={true}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card 
            title="Residential" 
            subtitle="Build"
            image="/images/residential.png"
          >
            Custom luxury villas and high-rise apartments designed for durability.
          </Card>
          <Card 
            title="Interior" 
            subtitle="Design"
            image="/images/interior.png"
          >
            Elegant interior fit-out with high-end furniture, lighting, and finishes.
          </Card>
          <Card 
            title="Architecture" 
            subtitle="Planning"
            image="/images/architecture.png"
          >
            Thoughtful architectural planning for landmark projects and sustainable communities.
          </Card>
        </div>
      </Section>

      {/* Packages Section */}
      <Section id="packages" variant="white" title="Choose Your Build Grade" subtitle="Packages" center={true}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <PricingCard 
            title="Standard" 
            price="1,500" 
            features={["Quality Foundation", "Eco Materials", "12 Month Warranty"]}
            icon={<Hammer className="text-brand-yellow" />}
            color="black"
          />
          <PricingCard 
            title="Premium" 
            price="2,200" 
            features={["Reinforced Structure", "Modern Finishes", "3D Visualization"]}
            icon={<Zap className="text-brand-black" />}
            color="yellow"
            isPopular={true}
          />
          <PricingCard 
            title="Executive" 
            price="3,500" 
            features={["High-End Luxury", "Smart Integration", "Lifetime Support"]}
            icon={<Globe className="text-brand-yellow" />}
            color="black"
          />
        </div>
        
        {/* Estimator Integration */}
        <div className="pt-20">
          <div className="text-center mb-16">
             <Badge color="yellow" variant="soft" className="mb-4">Live Tool</Badge>
             <h2 className="text-4xl md:text-5xl font-black text-brand-black tracking-tight">Need a quick estimate?</h2>
             <p className="text-slate-500 mt-4 max-w-xl mx-auto font-medium">Use our builder to calculate costs based on your specific requirements.</p>
          </div>
          <CostCalculator />
        </div>
      </Section>

      {/* CDECK Teaser */}
      <Section variant="dark" className="py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="text-center space-y-10 relative z-10">
          <Badge color="yellow" variant="solid" className="px-6 py-2 text-xs font-black">Next-Gen Portal</Badge>
          <h2 className="text-5xl md:text-6xl font-black text-white max-w-4xl mx-auto tracking-tighter leading-tight uppercase">
            TRACK YOUR BUILD <span className="text-brand-yellow underline decoration-brand-yellow/30 underline-offset-8">LIVE</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
            Join the digital revolution. Monitor site feeds, view blueprints, and authorize milestone payments through CDECK.
          </p>
          <div className="pt-6">
            <Link href="/cdeck">
              <Button variant="secondary" size="lg" className="px-16 py-8 font-black text-xl uppercase tracking-widest rounded-2xl shadow-2xl">
                Enter CDECK Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section title="Ready to Build?" subtitle="Contact" center={true}>
        <div className="bg-brand-black rounded-[3rem] p-16 text-center text-white relative overflow-hidden group">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-yellow/20 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
          <div className="relative z-10 space-y-10">
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">THE FUTURE IS ENGINEERED.</h3>
            <p className="text-white/60 max-w-xl mx-auto text-lg font-medium">
              Our experts are ready to turn your structural blueprints into reality.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="px-12 py-7 font-black text-sm uppercase tracking-widest transition-all" rightIcon={<ArrowRight />}>Book Consultation</Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}

function StatItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="text-center space-y-3 p-4">
      <div className="inline-flex p-4 bg-white/5 rounded-2xl mb-2 border border-white/10">{icon}</div>
      <div className="text-4xl font-black text-white tracking-tighter">{value}</div>
      <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">{label}</div>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center">
        <CheckCircle2 size={14} className="text-brand-black" />
      </div>
      <span className="text-slate-700 font-black uppercase text-xs tracking-wider">{text}</span>
    </div>
  );
}

function PricingCard({ title, price, features, icon, color, isPopular }: { title: string; price: string; features: string[]; icon: React.ReactNode; color: "black" | "yellow"; isPopular?: boolean }) {
  const colors = {
    yellow: "bg-brand-yellow text-brand-black",
    black: "bg-brand-black text-white",
  };
  
  return (
    <div className={cn(
      "relative p-10 rounded-[2.5rem] border transition-all duration-500 hover:scale-105",
      colors[color],
      color === "yellow" ? "border-brand-yellow shadow-2xl shadow-brand-yellow/20" : "border-white/10"
    )}>
      {isPopular && (
        <div className="absolute top-0 right-10 -translate-y-1/2 bg-white text-brand-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg border border-slate-100">
          Most Popular
        </div>
      )}
      <div className="mb-8">{icon}</div>
      <h4 className="text-2xl font-black uppercase tracking-tighter mb-2">{title}</h4>
      <div className="flex items-baseline space-x-1 mb-8">
        <span className="text-xs font-black uppercase tracking-widest opacity-60">from</span>
        <span className="text-4xl font-black">${price}</span>
        <span className="text-[10px] font-black uppercase tracking-widest opacity-40">/sqft</span>
      </div>
      <ul className="space-y-4 mb-10">
        {features.map((f) => (
          <li key={f} className="flex items-center text-xs font-bold uppercase tracking-wide opacity-80">
            <CheckCircle2 size={16} className="mr-3 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <Button 
        variant={color === "black" ? "secondary" : "primary"} 
        className="w-full py-6 font-black uppercase tracking-widest text-xs rounded-xl"
      >
        Select Plan
      </Button>
    </div>
  );
}

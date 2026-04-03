"use client";

import React, { useState } from "react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { 
  Mail, 
  PhoneCall, 
  MapPin, 
  Send, 
  CheckCircle,
  Building
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Contact Hero */}
      <Section title="Let's Build Together" subtitle="Contact Us" center={true}>
        <p className="max-w-2xl mx-auto text-slate-600 text-lg font-medium">
          Ready to turn your vision into a concrete reality? Our team of engineering 
          experts and architects is standing by.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white border border-slate-100 p-8 rounded-3xl space-y-8 shadow-sm">
              <h3 className="text-2xl font-black text-brand-black uppercase tracking-tight">Reach Out</h3>
              
              <ContactInfoItem 
                icon={<PhoneCall className="text-brand-black" />} 
                title="Call Us Directly" 
                detail="+1 (234) 567-8900"
                subDetail="Mon-Fri, 9am-6pm EST"
              />
              
              <ContactInfoItem 
                icon={<Mail className="text-brand-black" />} 
                title="Email Inquiry" 
                detail="projects@geoconstruction.com"
                subDetail="24/7 Response Guaranteed"
              />
              
              <ContactInfoItem 
                icon={<MapPin className="text-brand-black" />} 
                title="Head Office" 
                detail="123 Industrial Way, Suite 500"
                subDetail="Metropolis CBD, 10293"
              />
              
              <div className="pt-6 border-t border-slate-100">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Office Hours</h4>
                <div className="flex justify-between text-xs font-black text-brand-black uppercase">
                  <span>Monday — Friday</span>
                  <span>08:00 – 18:00</span>
                </div>
                <div className="flex justify-between text-xs font-black text-brand-black uppercase mt-2">
                  <span>Saturday</span>
                  <span>10:00 – 14:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {!formSubmitted ? (
               <form onSubmit={handleSubmit} className="bg-brand-black rounded-[2.5rem] p-8 md:p-12 shadow-2xl space-y-6 text-white border border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormGroup label="First Name" placeholder="John" required />
                  <FormGroup label="Last Name" placeholder="Doe" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormGroup label="Work Email" placeholder="john@company.com" type="email" required />
                  <FormGroup label="Phone Number" placeholder="+1 (555) 000-0000" type="tel" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Service Category</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-yellow focus:outline-none transition-all appearance-none cursor-pointer text-white">
                    <option className="bg-brand-black">Residential Construction</option>
                    <option className="bg-brand-black">Commercial Development</option>
                    <option className="bg-brand-black">Industrial Engineering</option>
                    <option className="bg-brand-black">Renovation & Retrofitting</option>
                    <option className="bg-brand-black">Other / General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Project Description</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us about your project goals, location, and timeline..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-yellow focus:outline-none transition-all text-white placeholder:text-white/20"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="secondary"
                  size="lg" 
                  className="w-full py-6 text-sm font-black uppercase tracking-widest rounded-2xl shadow-xl hover:scale-[1.02]"
                  isLoading={isSubmitting}
                  rightIcon={<Send size={20} />}
                >
                  Send Proposal Request
                </Button>
                <p className="text-center text-[10px] text-white/20 font-black uppercase tracking-wider">
                  By clicking submit, you agree to our Privacy Policy.
                </p>
              </form>
            ) : (
              <div className="bg-brand-yellow border-2 border-brand-yellow rounded-[2.5rem] p-16 text-center space-y-6 animate-in fade-in zoom-in-95 duration-500 shadow-2xl shadow-brand-yellow/20">
                <div className="inline-flex p-6 bg-brand-black rounded-full text-brand-yellow mb-4">
                  <CheckCircle size={64} />
                </div>
                <h3 className="text-3xl font-black text-brand-black uppercase tracking-tight">Message Received!</h3>
                <p className="text-brand-black/60 text-lg max-w-sm mx-auto font-medium">
                   Our project management team will review your requirements and reach out within 24 business hours.
                </p>
                <Button variant="primary" onClick={() => setFormSubmitted(false)} className="font-black uppercase tracking-widest text-xs px-10">Send Another</Button>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <Section variant="slate" className="pt-0">
         <div className="relative h-[500px] w-full bg-slate-200 rounded-[3rem] overflow-hidden shadow-inner flex items-center justify-center">
            <div className="absolute inset-0 opacity-40 grayscale contrast-125 hover:scale-110 transition-transform duration-[5s]">
               <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Map" />
            </div>
            <div className="relative z-10 bg-white p-10 rounded-[2rem] shadow-2xl flex items-center space-x-8 border-l-8 border-brand-yellow hover:scale-105 transition-transform duration-500">
               <div className="p-5 bg-brand-black rounded-2xl text-brand-yellow">
                 <Building size={32} />
               </div>
               <div>
                 <h4 className="text-2xl font-black text-brand-black uppercase tracking-tight">GEO HQ</h4>
                 <p className="text-slate-500 font-medium italic">Visit our experience center</p>
                 <a href="#" className="text-brand-black font-black text-xs uppercase tracking-widest mt-4 inline-flex items-center group">
                    Open in Maps 
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                 </a>
               </div>
            </div>
         </div>
      </Section>
    </div>
  );
}

function ContactInfoItem({ icon, title, detail, subDetail }: { icon: React.ReactNode; title: string; detail: string; subDetail: string }) {
  return (
    <div className="flex items-start space-x-4 group">
      <div className="p-3 bg-slate-50 rounded-xl shadow-sm border border-slate-100 transition-all group-hover:bg-brand-black group-hover:text-brand-yellow shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{title}</h4>
        <p className="text-lg font-bold text-brand-black group-hover:text-brand-black/100 transition-colors">{detail}</p>
        <p className="text-xs text-slate-500 font-medium">{subDetail}</p>
      </div>
    </div>
  );
}

function FormGroup({ label, placeholder, type = "text", required = false }: { label: string; placeholder: string; type?: string; required?: boolean }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-white/40">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        required={required}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-yellow focus:outline-none transition-all text-white placeholder:text-white/20"
      />
    </div>
  );
}

import { ArrowRight } from "lucide-react";

import React from "react";
import Link from "next/link";
import { HardHat, Globe, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/#about" },
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Residential", href: "/#packages" },
      { name: "Commercial", href: "/#packages" },
      { name: "Industrial", href: "/#packages" },
      { name: "Cost Estimator", href: "/#packages" },
    ],
    support: [
      { name: "CDECK Portal", href: "/cdeck" },
      { name: "Safety Standards", href: "/#" },
      { name: "Privacy Policy", href: "/#" },
      { name: "Terms", href: "/#" },
    ],
  };

  return (
    <footer className="bg-brand-black text-slate-400 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Mission */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-brand-yellow rounded-xl text-brand-black">
                <HardHat size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                GEO <span className="text-brand-yellow">CONSTRUCTION</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed font-medium">
              Engineering the future with precision, integrity, and sustainable innovation. 
              A decade of structural excellence and client trust.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Globe size={18} />} />
              <SocialLink icon={<Globe size={18} />} />
              <SocialLink icon={<Globe size={18} />} />
            </div>
          </div>

          {/* Navigation Sections */}
          <div>
            <h3 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8">Navigation</h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-[10px]">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-brand-yellow transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8">Expertise</h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-[10px]">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-brand-yellow transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8">Contact</h3>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start space-x-4">
                <MapPin size={20} className="text-brand-yellow shrink-0" />
                <span className="font-medium text-white/80 leading-snug">
                  123 Construction Ave,<br />
                  Sky Tower, Metropolis
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={20} className="text-brand-yellow shrink-0" />
                <span className="font-medium text-white/80">+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={20} className="text-brand-yellow shrink-0" />
                <span className="font-medium text-white/80 lowercase">contact@geoconstruction.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
            © {currentYear} Geo Construction Group. All rights reserved.
          </p>
          <div className="flex space-x-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
             <a href="#" className="hover:text-brand-yellow transition-colors">Privacy</a>
             <a href="#" className="hover:text-brand-yellow transition-colors">Security</a>
             <a href="#" className="hover:text-brand-yellow transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="p-3 bg-white/5 rounded-xl text-white/40 hover:bg-brand-yellow hover:text-brand-black transition-all hover:scale-110 border border-white/5">
      {icon}
    </a>
  );
}

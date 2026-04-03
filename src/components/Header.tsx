"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, HardHat } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-brand-black/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-brand-yellow rounded-lg text-brand-black group-hover:scale-110 transition-transform">
              <HardHat size={24} />
            </div>
            <span className={cn(
              "text-xl font-black tracking-tighter transition-colors",
              isScrolled ? "text-white" : "text-white"
            )}>
              GEO <span className="text-brand-yellow">CONSTRUCTION</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-bold uppercase tracking-widest transition-all hover:text-brand-yellow",
                    isActive ? "text-brand-yellow" : "text-white/90"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="block h-0.5 w-full bg-brand-yellow mt-0.5 rounded-full" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/cdeck"
              className="px-6 py-2 bg-brand-yellow text-brand-black text-sm font-black uppercase tracking-wider rounded-lg hover:bg-white transition-all shadow-xl hover:shadow-brand-yellow/20"
            >
              CDECK Portal
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white hover:text-brand-yellow transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden bg-brand-black transform transition-transform duration-500 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-32 px-8 space-y-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-4xl font-black uppercase tracking-tighter transition-all",
                  isActive ? "text-brand-yellow translate-x-4" : "text-white/40 hover:text-white"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/cdeck"
            className="w-full py-5 bg-brand-yellow text-brand-black text-center text-2xl font-black uppercase rounded-xl shadow-2xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            CDECK Portal
          </Link>
        </div>
      </div>
    </header>
  );
}

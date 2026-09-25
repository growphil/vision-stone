"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "HOME", href: "/" },
  { name: "PRODUCTS", href: "/products" },
  { name: "ABOUT", href: "/about" },
  { name: "APPLICATIONS", href: "/applications" },
  { name: "MANUFACTURING", href: "/manufacturing" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-display ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E8E8E4] py-3.5 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-[#E8E8E4]/60 py-4"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="VISION STONES Home"
          >
            <div className="w-8 h-8 rounded-[4px] bg-white border border-[#E8E8E4] flex items-center justify-center relative overflow-hidden group-hover:border-[#E52323] transition-colors shadow-xs">
              <img
                src="/favicon.svg"
                alt="Vision Stones Logo Emblem"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-display font-black text-sm sm:text-lg tracking-[0.12em] sm:tracking-[0.18em] text-[#111111] group-hover:text-[#E52323] transition-colors leading-tight truncate">
                VISION STONES
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.12em] sm:tracking-[0.2em] text-[#777777] uppercase -mt-0.5 truncate">
                NATURAL MINERALS &amp; SUPPLY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest font-bold transition-colors pb-1 relative ${
                    isActive ? "text-[#E52323]" : "text-[#555555] hover:text-[#111111]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E52323]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/contact?intent=quote"
              className="inline-flex items-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-[4px] transition-all shadow-sm hover:shadow"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] hover:text-[#E52323] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E8E8E4] px-6 py-6 shadow-xl space-y-4 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-wider font-bold py-2.5 border-b border-[#F5F5F2] transition-colors ${
                    isActive ? "text-[#E52323]" : "text-[#333333] hover:text-[#111111]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2">
            <Link
              href="/contact?intent=quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#E52323] text-white py-3.5 rounded-[4px] text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

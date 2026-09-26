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
  const [isOverHero, setIsOverHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const heroElement = document.getElementById("cinematic-hero");
        if (heroElement) {
          const rect = heroElement.getBoundingClientRect();
          // Header is over hero if bottom of hero element is below top header height (~70px)
          setIsOverHero(rect.bottom > 70);
          return;
        }
      }
      setIsOverHero(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-display ${
        isOverHero
          ? "bg-white/10 backdrop-blur-md border-b border-white/20 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          : isScrolled
          ? "bg-white/60 backdrop-blur-md border-b border-[#E8E8E4]/80 py-3.5 shadow-sm"
          : "bg-white/40 backdrop-blur-sm border-b border-[#E8E8E4]/50 py-4"
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
            <div
              className={`w-8 h-8 rounded-[4px] flex items-center justify-center relative overflow-hidden transition-all duration-300 shadow-xs ${
                isOverHero
                  ? "bg-white/20 border border-white/30 group-hover:border-[#E52323] backdrop-blur-md"
                  : "bg-white/80 border border-[#E8E8E4] group-hover:border-[#E52323]"
              }`}
            >
              <img
                src="/favicon.svg"
                alt="Vision Stones Logo Emblem"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span
                className={`font-display font-black text-sm sm:text-lg tracking-[0.12em] sm:tracking-[0.18em] group-hover:text-[#E52323] transition-colors leading-tight truncate ${
                  isOverHero ? "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]" : "text-[#111111]"
                }`}
              >
                VISION STONES
              </span>
              <span
                className={`text-[8px] sm:text-[9px] font-mono tracking-[0.12em] sm:tracking-[0.2em] uppercase -mt-0.5 truncate transition-colors ${
                  isOverHero ? "text-white/80" : "text-[#666666]"
                }`}
              >
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
                    isActive
                      ? "text-[#E52323]"
                      : isOverHero
                      ? "text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                      : "text-[#444444] hover:text-[#111111]"
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
              className="inline-flex items-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-[4px] transition-all shadow-md hover:shadow-lg hover:shadow-[#E52323]/25"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors focus:outline-none ${
                isOverHero ? "text-white hover:text-[#E52323]" : "text-[#111111] hover:text-[#E52323]"
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden px-6 py-6 shadow-2xl space-y-4 max-h-[calc(100vh-4.5rem)] overflow-y-auto transition-all duration-300 ${
            isOverHero
              ? "bg-black/60 backdrop-blur-2xl border-b border-white/20 text-white"
              : "bg-white/90 backdrop-blur-md border-b border-[#E8E8E4] text-[#111111]"
          }`}
        >
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
                  className={`text-sm uppercase tracking-wider font-bold py-2.5 transition-colors ${
                    isOverHero ? "border-b border-white/15" : "border-b border-[#F5F5F2]"
                  } ${
                    isActive
                      ? "text-[#E52323]"
                      : isOverHero
                      ? "text-white/90 hover:text-white"
                      : "text-[#333333] hover:text-[#111111]"
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
              className="w-full inline-flex items-center justify-center gap-2 bg-[#E52323] text-white py-3.5 rounded-[4px] text-xs font-bold uppercase tracking-wider shadow-md"
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

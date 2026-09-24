"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { PRODUCT_CATEGORIES, PRODUCTS } from "@/data/products";

const NAV_LINKS = [
  { name: "Products", href: "/products", hasMega: true },
  { name: "Brands", href: "/brands" },
  { name: "About", href: "/about" },
  { name: "Applications", href: "/applications" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] py-3.5 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-black/[0.06] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E52323] rounded-sm"
            aria-label="VISION STONE Home"
          >
            <div className="w-8 h-8 rounded-sm bg-[#111111] border border-black/10 flex items-center justify-center relative overflow-hidden group-hover:border-[#E52323] transition-colors">
              <span className="font-display font-black text-sm text-white tracking-widest pl-0.5">VS</span>
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#E52323]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base tracking-[0.16em] text-[#111111] group-hover:text-black transition-colors">
                VISION STONE
              </span>
              <span className="text-[9px] font-mono-code tracking-[0.2em] text-[#666666] -mt-0.5">
                MINERALS &bull; INDUSTRIAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasMega) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3.5 py-2 text-xs uppercase tracking-widest font-semibold transition-colors inline-flex items-center gap-1 rounded-sm ${
                        isActive ? "text-[#111111]" : "text-[#444444] hover:text-[#111111]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          productsDropdownOpen ? "rotate-180 text-[#E52323]" : "text-[#888888]"
                        }`}
                      />
                    </Link>

                    {/* Products Dropdown */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px]">
                        <div className="bg-white border border-[#E5E5E5] rounded-sm p-6 shadow-xl grid grid-cols-2 gap-5">
                          {PRODUCT_CATEGORIES.map((cat) => (
                            <div key={cat.id} className="space-y-2">
                              <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#E52323] font-bold">
                                {cat.name}
                              </span>
                              <div className="space-y-1.5">
                                {PRODUCTS.filter((p) => p.categorySlug === cat.id).map((prod) => (
                                  <Link
                                    key={prod.id}
                                    href={`/products/${prod.slug}`}
                                    className="block text-xs text-[#444444] hover:text-[#111111] hover:translate-x-1 transition-all py-0.5"
                                  >
                                    {prod.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                          <div className="col-span-2 pt-3 border-t border-[#F0F0EC] flex items-center justify-between text-[11px]">
                            <span className="text-[#666666]">8 Engineered Mineral Products</span>
                            <Link
                              href="/products"
                              className="text-[#111111] hover:text-[#E52323] flex items-center gap-1 font-bold transition-colors"
                            >
                              View Full Catalogue <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-xs uppercase tracking-widest font-semibold transition-colors rounded-sm relative ${
                    isActive ? "text-[#111111]" : "text-[#444444] hover:text-[#111111]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#E52323]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-widest font-bold text-white bg-[#111111] hover:bg-[#E52323] transition-all duration-300 rounded-sm shadow-sm"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#111111] hover:text-[#E52323] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E52323] rounded-sm"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-white border-t border-[#E5E5E5] p-6 overflow-y-auto z-50 flex flex-col justify-between shadow-2xl">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono-code text-[#E52323] uppercase tracking-widest font-bold">
                Navigation
              </span>
              <div className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`py-3 text-base uppercase tracking-wider font-display font-medium border-b border-[#F0F0EC] flex items-center justify-between ${
                        isActive ? "text-[#111111] font-bold pl-2 border-l-2 border-l-[#E52323]" : "text-[#555555] hover:text-[#111111]"
                      }`}
                    >
                      {link.name}
                      <ArrowUpRight className="w-4 h-4 text-[#888888]" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Products */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-mono-code text-[#888888] uppercase tracking-widest font-bold">
                Quick Products
              </span>
              <div className="grid grid-cols-2 gap-2">
                {PRODUCTS.slice(0, 6).map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.slug}`}
                    className="p-2.5 bg-[#F5F5F2] rounded text-xs text-[#333333] hover:text-[#111111] border border-[#E8E8E4] font-medium"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E5E5E5]">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#111111] hover:bg-[#E52323] text-white text-xs uppercase tracking-widest font-bold rounded-sm shadow-md transition-colors"
            >
              <span>Submit Commercial Enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="mt-4 text-center">
              <span className="text-xs text-[#666666] font-mono-code">+91 98765 43210 &bull; enquiry@visionstone.in</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

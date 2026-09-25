import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { APPLICATIONS } from "@/data/applications";

export default function ApplicationProductLinks() {
  const parameters = [
    {
      name: "PRODUCT",
      icon: (
        <svg className="w-6 h-6 stroke-current text-[#111111]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      ),
    },
    {
      name: "QUANTITY",
      icon: (
        <svg className="w-6 h-6 stroke-current text-[#111111]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
    },
    {
      name: "PARTICLE SIZE SPECIFICATION",
      icon: (
        <svg className="w-6 h-6 stroke-current text-[#111111]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <circle cx="12" cy="6" r="1.5" fill="currentColor" />
          <circle cx="8" cy="12" r="1.5" fill="currentColor" />
          <circle cx="16" cy="12" r="1.5" fill="currentColor" />
          <circle cx="6" cy="18" r="1.5" fill="currentColor" />
          <circle cx="12" cy="18" r="1.5" fill="currentColor" />
          <circle cx="18" cy="18" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "APPLICATION",
      icon: (
        <svg className="w-6 h-6 stroke-current text-[#111111]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      name: "PACKAGING",
      icon: (
        <svg className="w-6 h-6 stroke-current text-[#111111]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009 9.35c.692 0 1.343-.234 1.868-.628m4.264 0A2.993 2.993 0 0017 9.35c.692 0 1.343-.234 1.868-.628M3.75 9.35l2.25-6.75h12l2.25 6.75" />
        </svg>
      ),
    },
    {
      name: "DELIVERY",
      icon: (
        <svg className="w-6 h-6 stroke-current text-[#111111]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V3.75m0 3.75h4.875" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#FAF9F6] border-b border-[#E8E8E2]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 space-y-24 sm:space-y-32">
        
        {/* SECTION 16: FROM APPLICATION TO MATERIAL */}
        <div className="space-y-12 sm:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-mono-code font-bold tracking-[0.25em] uppercase text-[#777777] block">
                OUR APPROACH
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-none">
                FROM
                <br />
                APPLICATION
                <br />
                <span className="text-[#E52323]">TO MATERIAL.</span>
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-xl font-normal">
                We understand customer requirements across industries and supply suitable mineral products with the right specifications, quantities, packaging and delivery support.
              </p>
            </div>
          </div>

          {/* Minimalist Parameters Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pt-8 border-t border-[#E0DFD8]">
            {parameters.map((param, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-full border border-[#DCDCD6] bg-white flex items-center justify-center shadow-2xs">
                  {param.icon}
                </div>
                <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#111111] leading-tight">
                  {param.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 17: APPLICATIONS MEET PRODUCTS */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#E0DFD8] gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono-code font-bold tracking-[0.25em] uppercase text-[#E52323] block">
                APPLICATIONS
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#111111]">
                MEET PRODUCTS
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#777777] max-w-md font-mono-code">
              Our mineral products are used across multiple industries. Here are some common application-to-product relationships.
            </p>
          </div>

          {/* Clean Editorial Cards Grid (8 Sectors) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPLICATIONS.map((app) => (
              <div
                key={app.id}
                className="bg-white border border-[#E8E8E2] rounded-[8px] overflow-hidden flex flex-col justify-between p-5 space-y-4 shadow-2xs hover:border-[#D0D0CA] transition-colors"
              >
                {/* Sector Image */}
                <div className="relative w-full aspect-[16/11] rounded-[4px] overflow-hidden bg-[#E8E8E2]">
                  <Image
                    src={app.image}
                    alt={app.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-black uppercase text-[#111111] tracking-tight leading-tight line-clamp-2">
                    {app.name}
                  </h4>
                </div>

                {/* Plain Typography Product Links (No Pills, No Product Images) */}
                <div className="pt-3 border-t border-[#E8E8E2] space-y-2">
                  {app.relatedProducts.map((prod) => (
                    <Link
                      key={prod.slug}
                      href={`/products/${prod.slug}`}
                      className="group flex items-center justify-between text-xs font-bold text-[#555555] hover:text-[#E52323] transition-colors"
                    >
                      <span className="line-clamp-1">{prod.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E52323] group-hover:translate-x-1 transition-transform shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111111] flex items-center justify-center px-6 font-display">
      <div className="text-center space-y-6 max-w-md bg-[#FAF9F6] p-10 rounded-[12px] border border-[#E8E8E4] shadow-subtle">
        <div className="w-12 h-12 rounded-[4px] bg-white border border-[#E0E0DB] flex items-center justify-center mx-auto text-[#E52323] font-mono font-black text-lg">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black uppercase text-[#111111]">
            PAGE NOT FOUND
          </h1>
          <p className="text-xs sm:text-sm text-[#555555]">
            The requested mineral product or page route does not exist.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E52323] hover:bg-[#C91A1A] text-white text-xs uppercase tracking-wider font-bold rounded-[4px] transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}

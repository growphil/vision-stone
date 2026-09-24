import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070709] text-white flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
          <span className="font-mono-code font-bold text-lg text-[#D62828]">404</span>
        </div>
        <div className="space-y-2">
          <h1 className="font-display font-bold text-3xl text-white">
            Page Not Found
          </h1>
          <p className="text-xs text-neutral-400">
            The requested mineral product or page route does not exist.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#D62828] hover:bg-[#b52020] text-white font-mono-code text-xs uppercase tracking-wider font-bold rounded-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}

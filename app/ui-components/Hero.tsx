'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Grid Pattern Background with Gradient Highlight */}
    

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-slate-900">Transform API responses into </span>
            <span className="bg-gradient-to-b from-slate-900 to-slate-500 bg-clip-text text-transparent">
              beautiful visualizations
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Test APIs and convert JSON into interactive tree views, graphs, and tables — all in your browser.
          </p>
          
          {/* CTA Button */}
          <div className="flex items-center justify-center mb-20">
            <Link
              href="/app"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-b from-slate-900 to-slate-700 text-white font-semibold rounded-lg hover:from-slate-800 hover:to-slate-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Testing APIs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* App Preview - Placeholder for your image */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-slate-100">
              <img 
                src="hero/hero-preview.png" 
                alt="ApiLens Dashboard Preview" 
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
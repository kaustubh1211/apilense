'use client';

import Link from 'next/link';
import { Activity, Github } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-xl font-bold text-slate-900">ApiLens</span>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#features"
              className="text-sm text-slate-600 hover:text-slate-900 font-medium"
            >
              Features
            </a>
            <a 
              href="#how-it-works"
              className="text-sm text-slate-600 hover:text-slate-900 font-medium"
            >
              How it works
            </a>
            <a 
              href="#demo"
              className="text-sm text-slate-600 hover:text-slate-900 font-medium"
            >
              Demo
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
           
            <Link 
              href="/app"
              className="px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800"
            >
                Launch App
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
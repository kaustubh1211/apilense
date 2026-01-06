'use client';

import { Eye, Network, Table, Zap, Shield, Code } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Everything you need to test APIs
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Built for developers who want to understand their API responses at a glance
          </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          
          {/* Tree View - Large card with slide-up animation */}
          <div className="group md:row-span-2 bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:bg-white transition-all duration-300 overflow-hidden relative">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Tree View</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Navigate nested JSON structures with an intuitive collapsible tree interface.
            </p>
            
            {/* Tree View Visual - slides up on hover */}
            <div className="bg-white border border-slate-200 rounded-lg p-4 font-mono text-xs transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span className="text-slate-400">▼</span>
                <span className="text-slate-700">data</span>
              </div>
              <div className="pl-4 space-y-1">
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span className="text-slate-400">▼</span>
                  <span className="text-slate-700">user</span>
                </div>
                <div className="pl-4 space-y-1">
                  <div className="text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">name: "John"</div>
                  <div className="text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-[350ms]">id: 123</div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-[400ms]">
                    <span className="text-slate-400">▶</span>
                    <span className="text-slate-700">address</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Graph Visualization - Wide card with pulse animation */}
          <div className="group md:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-300 overflow-hidden">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-900 mb-6">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Graph Visualization</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              See relationships between data points with interactive network graphs.
            </p>
            
            {/* Graph Visual - nodes pulse on hover */}
            <div className="flex items-center justify-center gap-8 mt-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-white text-xs font-semibold group-hover:bg-slate-600 group-hover:scale-110 transition-all duration-300">
                  User
                </div>
                <div className="h-8 w-0.5 bg-slate-700 group-hover:bg-slate-500 transition-colors duration-300"></div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center text-white text-xs font-semibold group-hover:bg-slate-600 group-hover:scale-110 transition-all duration-300 delay-75">
                  Posts
                </div>
                <div className="h-8 w-0.5 bg-slate-700 group-hover:bg-slate-500 transition-colors duration-300 delay-75"></div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center text-white text-xs font-semibold group-hover:bg-slate-600 group-hover:scale-110 transition-all duration-300 delay-150">
                  Tags
                </div>
              </div>
            </div>
          </div>

          {/* Table View - rotates icon on hover */}
          <div className="group bg-white border-2 border-slate-900 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-4 group-hover:rotate-12 transition-transform duration-300">
              <Table className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Table View</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Convert arrays into sortable, filterable tables.
            </p>
            {/* Animated underline */}
            <div className="h-0.5 bg-slate-900 mt-4 w-0 group-hover:w-full transition-all duration-300"></div>
          </div>

          {/* Lightning Fast - icon moves on hover */}
          <div className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:bg-slate-100 transition-all duration-300 relative overflow-hidden">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-4">
              <Zap className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Lightning Fast</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Instant parsing and rendering in your browser.
            </p>
            {/* Speed lines effect */}
            <div className="absolute -right-4 top-1/2 w-20 h-0.5 bg-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-300"></div>
            <div className="absolute -right-4 top-1/2 mt-2 w-16 h-0.5 bg-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-6 transition-all duration-300 delay-75"></div>
          </div>

          {/* 100% Private - shield glows on hover */}
          <div className="group bg-white border border-slate-300 rounded-2xl p-6 hover:border-slate-900 transition-all duration-300">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-4 group-hover:shadow-lg group-hover:shadow-slate-900/50 transition-all duration-300">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">100% Private</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your data never leaves your device. Zero tracking.
            </p>
            {/* Lock indicator */}
            <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
              <span className="text-xs text-slate-500">Client-side only</span>
            </div>
          </div>

          {/* Custom JSON - Wide card with typing effect simulation */}
          <div className="group md:col-span-2 bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:bg-white hover:border-slate-300 transition-all duration-300 overflow-hidden">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
              <Code className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Custom JSON</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Test with your own JSON or paste API responses directly. Supports any valid JSON structure.
            </p>
            
            {/* JSON Preview - cursor blinks on hover */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 font-mono text-xs relative">
              <div className="text-slate-500">{'{'}</div>
              <div className="pl-4 text-slate-400">"name": <span className="text-slate-300">"ApiLens"</span>,</div>
              <div className="pl-4 text-slate-400">"status": <span className="text-slate-300">"active"</span></div>
              <div className="text-slate-500 inline">{'}'}</div>
              {/* Blinking cursor */}
              <span className="inline-block w-1.5 h-4 bg-slate-400 ml-0.5 opacity-0 group-hover:animate-pulse group-hover:opacity-100"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
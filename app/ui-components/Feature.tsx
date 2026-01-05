'use client';

import { Eye, Network, Table, Zap, Shield, Code } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50">
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
        
        {/* Bento Grid Layout - 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Tree View - Large card with visual */}
          <div className="md:row-span-2 bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 shadow-md hover:shadow-xl transition-all overflow-hidden">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Tree View</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Navigate nested JSON structures with an intuitive collapsible tree interface.
            </p>
            
            {/* Tree View Visual */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-mono text-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-slate-400">▼</span>
                <span className="text-slate-700">data</span>
              </div>
              <div className="pl-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">▼</span>
                  <span className="text-slate-700">user</span>
                </div>
                <div className="pl-4 space-y-1">
                  <div className="text-slate-600">name: "John"</div>
                  <div className="text-slate-600">id: 123</div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">▶</span>
                    <span className="text-slate-700">address</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Graph Visualization - Wide card with visual */}
          <div className="md:col-span-2 bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 shadow-md hover:shadow-xl transition-all overflow-hidden">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Graph Visualization</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              See relationships between data points with interactive network graphs.
            </p>
            
            {/* Graph Visual */}
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                  User
                </div>
                <div className="h-8 w-0.5 bg-slate-300"></div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                  Posts
                </div>
                <div className="h-8 w-0.5 bg-slate-300"></div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                  Tags
                </div>
              </div>
            </div>
          </div>

          {/* Table View */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 shadow-md hover:shadow-xl transition-all">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-4">
              <Table className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Table View</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Convert arrays into sortable, filterable tables.
            </p>
          </div>

          {/* Lightning Fast */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 shadow-md hover:shadow-xl transition-all">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Lightning Fast</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Instant parsing and rendering in your browser.
            </p>
          </div>

          {/* 100% Private */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 shadow-md hover:shadow-xl transition-all">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">100% Private</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your data never leaves your device. Zero tracking.
            </p>
          </div>

          {/* Custom JSON - Wide card with code preview */}
          <div className="md:col-span-2 bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 shadow-md hover:shadow-xl transition-all overflow-hidden">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Custom JSON</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Test with your own JSON or paste API responses directly. Supports any valid JSON structure.
            </p>
            
            {/* JSON Preview */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 font-mono text-xs">
              <div className="text-slate-500">{'{'}</div>
              <div className="pl-4 text-purple-400">"name": <span className="text-emerald-400">"ApiLens"</span>,</div>
              <div className="pl-4 text-purple-400">"status": <span className="text-emerald-400">"active"</span></div>
              <div className="text-slate-500">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
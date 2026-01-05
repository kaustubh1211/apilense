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
          {/* Row 1 - Left large card */}
          <div className="md:row-span-2 bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Tree View</h3>
            <p className="text-slate-600 leading-relaxed">
              Navigate nested JSON structures with an intuitive collapsible tree interface.
            </p>
          </div>

          {/* Row 1 - Top right card */}
          <div className="md:col-span-2 bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Graph Visualization</h3>
            <p className="text-slate-600 leading-relaxed">
              See relationships between data points with interactive network graphs.
            </p>
          </div>

          {/* Row 2 - Two cards on right */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-lg transition-all">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-4">
              <Table className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Table View</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Convert arrays into sortable, filterable tables.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-lg transition-all">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Lightning Fast</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Instant parsing and rendering in your browser.
            </p>
          </div>

          {/* Row 3 - Bottom two cards */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-lg transition-all">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">100% Private</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your data never leaves your device. Zero tracking.
            </p>
          </div>

          <div className="md:col-span-2 bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Custom JSON</h3>
            <p className="text-slate-600 leading-relaxed">
              Test with your own JSON or paste API responses directly. Supports any valid JSON structure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
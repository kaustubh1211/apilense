'use client';

import { Zap, Shield, Eye, Code, Table, Network, Download, Palette, Sparkles } from 'lucide-react';

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
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature
            icon={<Eye className="w-5 h-5" />}
            title="Tree View"
            description="Navigate nested JSON structures with an intuitive collapsible tree interface."
          />
          
          <Feature
            icon={<Network className="w-5 h-5" />}
            title="Graph Visualization"
            description="See relationships between data points with interactive network graphs."
          />
          
          <Feature
            icon={<Table className="w-5 h-5" />}
            title="Table View"
            description="Convert arrays into sortable, filterable tables for easy analysis."
          />
          
          <Feature
            icon={<Zap className="w-5 h-5" />}
            title="Lightning Fast"
            description="Instant parsing and rendering. Everything runs locally in your browser."
          />
          
          <Feature
            icon={<Shield className="w-5 h-5" />}
            title="100% Private"
            description="Your data never leaves your device. Zero tracking, complete privacy."
          />
          
          <Feature
            icon={<Code className="w-5 h-5" />}
            title="Custom JSON"
            description="Test with your own JSON or paste API responses directly."
          />
          
          <Feature
            icon={<Palette className="w-5 h-5" />}
            title="Syntax Highlighting"
            description="Beautiful color-coded JSON with proper formatting."
          />
          
          <Feature
            icon={<Download className="w-5 h-5" />}
            title="Export Options"
            description="Download formatted JSON, export to CSV, or copy to clipboard."
          />
          
          <Feature
            icon={<Sparkles className="w-5 h-5" />}
            title="Smart Detection"
            description="Automatically selects the best view for your data type."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all">
      <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
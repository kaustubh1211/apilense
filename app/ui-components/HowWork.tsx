'use client';

import { Send, Sparkles, Eye, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Three steps to 
            <span className='bg-gradient-to-b from-blue-500 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-800 ml-5 mr-3'>

            visual 
            </span>
            clarity
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From API request to beautiful visualization in seconds
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 -z-10" />
          
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            <Step
              number="1"
              icon={<Send className="w-6 h-6" />}
              title="Send Request"
              description="Enter your API endpoint or paste custom JSON. Supports GET, POST, PUT, DELETE with custom headers."
            />
            
            <Step
              number="2"
              icon={<Sparkles className="w-6 h-6" />}
              title="Auto Process"
              description="Our engine instantly parses your JSON and intelligently determines the best visualization method."
            />
            
            <Step
              number="3"
              icon={<Eye className="w-6 h-6" />}
              title="Explore Data"
              description="Switch between tree, graph, and table views. Filter, sort, and export your data with ease."
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/app"
            className="inline-flex items-center gap-2 px-8 py-4  bg-gradient-to-b from-blue-500 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-800"
          >
            Try it now — it's free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Step({ number, icon, title, description }: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative">
      {/* Step Number Badge */}
      <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md z-10">
        {number}
      </div>
      
      <div className="bg-white border border-slate-200 rounded-xl p-8 hover:border-slate-300 hover:shadow-md transition-all h-full">
        <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
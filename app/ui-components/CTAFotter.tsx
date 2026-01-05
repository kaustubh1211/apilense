'use client';

import Link from 'next/link';
import { ArrowRight, Activity, Github, Twitter, Mail } from 'lucide-react';

export default function CTAAndFooter() {
  return (
    <>
      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to visualize your APIs?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join developers who are already using ApiLens to debug and understand their APIs faster.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/app"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-indigo-600 text-white font-bold text-lg rounded-lg hover:bg-indigo-700 shadow-xl transition-all duration-200"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-slate-800 text-white font-semibold text-lg rounded-lg border border-slate-700 hover:bg-slate-700 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>

          <p className="mt-8 text-slate-400 text-sm">
            No account required • Free forever • Open source
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Activity className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <span className="text-lg font-bold text-white">ApiLens</span>
                  <span className="block text-xs text-slate-500 -mt-1">API Visualizer</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 max-w-sm">
                Transform API responses into beautiful, interactive visualizations. Built for developers who want to understand their data at a glance.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-white font-semibold mb-3">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
                <li><Link href="/app" className="hover:text-white transition-colors">Launch App</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2025 ApiLens. Built with Next.js, React & TypeScript.
            </p>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@apilens.dev"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
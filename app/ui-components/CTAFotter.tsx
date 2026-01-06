'use client';

import Link from 'next/link';
import { ArrowRight, Github } from 'lucide-react';
import Image from 'next/image';

export default function CTAAndFooter() {
  return (
    <>
      {/* CTA Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Ready to visualize your APIs?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            No sign-up required. Start in seconds.
          </p>
          
          <Link
            href="/app"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors shadow-sm"
          >
            Launch ApiLens
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-2.5">
  <div className="   ">
    <Image
      src="/logo/api-lens.png"
      alt="ApiLens"
      width={30}
      height={30}
      className="object-fill rounded-lg flex items-center justify-center"
    />
  </div>
  <span className="text-xl font-bold text-slate-900">ApiLens</span>
</Link>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm">
              <a
                href="https://github.com/kaustubh1211/apilens"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <span className="text-slate-300">|</span>
              <a
                href="https://kaustubhp.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Portfolio
              </a>
            </div>

            {/* Developer Credit */}
            <p className="text-sm text-slate-600">
              Developed by{' '}
              <a
                href="https://kaustubhp.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-900 hover:underline"
              >
                Kaustubh Patil
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
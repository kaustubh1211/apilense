import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Shield, Code2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ApiLens</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com"
              className="text-sm text-gray-600 hover:text-gray-900 font-medium"
            >
              GitHub
            </a>
            <Link 
              href="/app"
              className="px-5 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Open Editor
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Free and open source</span>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Visualize JSON into
            <br />
            <span className="text-gray-400">interactive graphs</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            The best online JSON viewer to <span className="font-semibold text-gray-900">visualize</span>, <span className="font-semibold text-gray-900">format</span> and <span className="font-semibold text-gray-900">explore</span>.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/app"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
            >
              Go to Editor
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Screenshot */}
          <div className="mt-16 rounded-xl border border-gray-200 shadow-2xl overflow-hidden bg-gray-50">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <Code2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-400 text-sm">App Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why developers choose ApiLens
            </h2>
            <p className="text-lg text-gray-600">
              Simple, fast, and powerful JSON visualization
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              icon={<Zap className="w-6 h-6" />}
              title="Lightning Fast"
              description="Instantly visualize any JSON response. No lag, even with large datasets."
            />
            
            <Feature
              icon={<Shield className="w-6 h-6" />}
              title="Privacy First"
              description="All processing happens in your browser. Your data never leaves your device."
            />
            
            <Feature
              icon={<Sparkles className="w-6 h-6" />}
              title="Smart Detection"
              description="Automatically detects the best view for your data - tree, table, or raw."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to visualize your APIs?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            No sign-up required. Start in seconds.
          </p>
          <Link
            href="/app"
            className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white font-semibold text-lg rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
          >
            Launch ApiLens
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <p>© 2025 ApiLens. Built with Next.js and TypeScript.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-900">GitHub</a>
              <a href="#" className="hover:text-gray-900">Documentation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-900 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
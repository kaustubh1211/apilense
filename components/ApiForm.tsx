'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface ApiFormProps {
  onResponse: (response: any) => void;
  onError: (error: string) => void;
}

export default function ApiForm({ onResponse, onError }: ApiFormProps) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      onError('Please enter a URL');
      return;
    }

    setLoading(true);

    try {
      const startTime = Date.now();
      
      const response = await fetch('/api/fetch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const result = await response.json();
      const endTime = Date.now();

      onResponse({
        ...result,
        time: endTime - startTime,
      });
    } catch (error) {
      onError('Failed to fetch API. Check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  const loadExample = (exampleUrl: string) => {
    setUrl(exampleUrl);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* URL Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            API Endpoint
          </label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://api.github.com/users/octocat"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            disabled={loading}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Fetching...
            </>
          ) : (
            'Fetch Response'
          )}
        </button>
      </form>

      {/* Example APIs */}
      <div className="mt-6">
        <p className="text-sm text-gray-600 mb-3">Try these examples:</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => loadExample('https://api.github.com/users/octocat')}
            className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            GitHub User
          </button>
          <button
            onClick={() => loadExample('https://jsonplaceholder.typicode.com/users')}
            className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            Fake Users
          </button>
          <button
            onClick={() => loadExample('https://jsonplaceholder.typicode.com/posts/1')}
            className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            Single Post
          </button>
        </div>
      </div>
    </div>
  );
}
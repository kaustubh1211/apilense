'use client';

import { useState } from 'react';
import { Loader2, Plus, X, ChevronDown } from 'lucide-react';

interface ApiFormProps {
  onResponse: (response: any) => void;
  onError: (error: string) => void;
}

export default function ApiForm({ onResponse, onError }: ApiFormProps) {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/users');
  const [method, setMethod] = useState<'GET' | 'POST' | 'PUT' | 'DELETE'>('GET');
  const [loading, setLoading] = useState(false);
  const [showHeaders, setShowHeaders] = useState(false);
  const [headers, setHeaders] = useState<Array<{ key: string; value: string }>>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      onError('Please enter a URL');
      return;
    }

    setLoading(true);

    try {
      const startTime = Date.now();
      
      const requestHeaders: Record<string, string> = {};
      headers.forEach(({ key, value }) => {
        if (key.trim() && value.trim()) {
          requestHeaders[key.trim()] = value.trim();
        }
      });
      
      const response = await fetch('/api/fetch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, method, headers: requestHeaders }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const result = await response.json();
      const endTime = Date.now();

      onResponse({ ...result, time: endTime - startTime });
    } catch (error) {
      onError('Failed to fetch API');
    } finally {
      setLoading(false);
    }
  };

  const loadExample = (exampleUrl: string) => {
    setUrl(exampleUrl);
    setMethod('GET');
    setHeaders([]);
    setShowHeaders(false);
  };

  const addHeader = () => setHeaders([...headers, { key: '', value: '' }]);
  const removeHeader = (index: number) => setHeaders(headers.filter((_, i) => i !== index));
  const updateHeader = (index: number, field: 'key' | 'value', value: string) => {
    const newHeaders = [...headers];
    newHeaders[index][field] = value;
    setHeaders(newHeaders);
  };

  return (
    <div className="space-y-4">
      {/* Method + URL Row */}
      <div className="flex gap-2">
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value as any)}
          disabled={loading}
          className="w-28 px-4 py-3 bg-black border border-gray-800 text-white rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://api.github.com/users/octocat"
          disabled={loading}
          className="flex-1 px-4 py-3 bg-black border border-gray-800 text-white rounded-lg placeholder-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
        />

        <button
          onClick={() => setShowHeaders(!showHeaders)}
          className="px-4 py-3 bg-black border border-gray-800 text-gray-400 rounded-lg hover:text-white hover:border-gray-700 transition-colors"
        >
          Headers {headers.length > 0 && `(${headers.length})`}
        </button>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-800 disabled:text-gray-600 text-white font-medium rounded-lg transition-colors"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send'}
        </button>
      </div>

      {/* Headers Section */}
      {showHeaders && (
        <div className="bg-black border border-gray-800 rounded-lg p-4 space-y-2">
          {headers.length === 0 && (
            <p className="text-gray-500 text-sm">No headers added</p>
          )}
          
          {headers.map((header, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                placeholder="Key"
                value={header.key}
                onChange={(e) => updateHeader(index, 'key', e.target.value)}
                className="flex-1 px-3 py-2 bg-black border border-gray-800 text-white text-sm rounded placeholder-gray-600 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Value"
                value={header.value}
                onChange={(e) => updateHeader(index, 'value', e.target.value)}
                className="flex-1 px-3 py-2 bg-black border border-gray-800 text-white text-sm rounded placeholder-gray-600 focus:border-blue-500 focus:outline-none"
              />
              <button
                onClick={() => removeHeader(index)}
                className="p-2 text-gray-500 hover:text-red-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
          
          <button
            onClick={addHeader}
            className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400 font-medium"
          >
            <Plus className="w-4 h-4" />
            Add Header
          </button>
        </div>
      )}

      {/* Examples */}
      <div className="flex items-center gap-2">
        <span className="text-gray-500 text-sm">Examples:</span>
        {[
          { label: 'GitHub User', url: 'https://api.github.com/users/octocat' },
          { label: 'Users List', url: 'https://jsonplaceholder.typicode.com/users' },
          { label: 'Single Post', url: 'https://jsonplaceholder.typicode.com/posts/1' },
        ].map((example) => (
          <button
            key={example.label}
            onClick={() => loadExample(example.url)}
            className="px-3 py-1.5 text-sm bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white rounded border border-gray-800 transition-colors"
          >
            {example.label}
          </button>
        ))}
      </div>
    </div>
  );
}
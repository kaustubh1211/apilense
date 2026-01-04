'use client';

import { useState } from 'react';
import { Copy, Check, Download } from 'lucide-react';
import { toast } from 'sonner';

interface RawViewProps {
  data: any;
}

export default function RawView({ data }: RawViewProps) {
  const [copied, setCopied] = useState(false);

  const formattedJson = JSON.stringify(data, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedJson);
    setCopied(true);
    toast.success('Copied');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([formattedJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `response-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Downloaded');
  };

  return (
    <div className="relative">
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={handleCopy}
          className="p-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded transition-colors"
          title="Copy JSON"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        <button
          onClick={handleDownload}
          className="p-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded transition-colors"
          title="Download JSON"
        >
          <Download className="w-4 h-4 text-gray-400" />
        </button>
      </div>
      
      <pre className="p-6 overflow-auto max-h-[70vh] text-sm font-mono text-gray-300 custom-scrollbar">
        {formattedJson}
      </pre>
    </div>
  );
}
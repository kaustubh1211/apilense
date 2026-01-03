'use client';

import { useState } from 'react';
import ApiForm from '@/components/ApiForm';
import { toast, Toaster } from 'sonner';

export default function Home() {
  const [responseData, setResponseData] = useState<any>(null);

  const handleResponse = (response: any) => {
    setResponseData(response);
    toast.success('Response received!');
  };

  const handleError = (error: string) => {
    toast.error(error);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <Toaster position="top-right" />
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-3">
          🔍 ApiLens
        </h1>
        <p className="text-lg text-gray-600">
          See your APIs clearly
        </p>
      </div>

      {/* Form */}
      <ApiForm onResponse={handleResponse} onError={handleError} />

      {/* Response Display (temporary) */}
      {responseData && (
        <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Response</h2>
            <div className="text-sm text-gray-500">
              {responseData.status} • {responseData.time}ms • {responseData.size} bytes
            </div>
          </div>
          <pre className="bg-gray-50 p-4 rounded overflow-auto max-h-96 text-sm">
            {JSON.stringify(responseData.data, null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}
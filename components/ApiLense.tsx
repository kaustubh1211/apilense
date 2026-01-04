'use client';

import { useState } from 'react';
import Link from 'next/link';
import ApiForm from '@/components/ApiForm';
import TreeView from '@/components/TreeView';
import TableView from '@/components/TableView';
import RawView from '@/components/RawView';
import GraphView from '@/components/GraphView';
import ViewTabs from '@/components/ViewTabs';
import SearchBar from '@/components/SearchBar';
import StatsPanel from './StatsPanner';
import { analyzeData } from '@/libs/Analyzer';
import { toast } from 'sonner';
import { Code2, ArrowLeft } from 'lucide-react';

export default function ApiLensApp() {
  const [responseData, setResponseData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'tree' | 'table' | 'raw' | 'graph'>('tree');
  const [searchQuery, setSearchQuery] = useState('');

  const handleResponse = (response: any) => {
    setResponseData(response);
    setSearchQuery('');
    toast.success('Response received');
  };

  const handleError = (error: string) => {
    toast.error(error);
  };

  const analysis = responseData ? analyzeData(responseData.data) : null;
  const showTableTab = analysis?.suggestedView === 'table';

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Bar */}
      <div className="border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/landing" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-white" />
            <span className="font-bold">ApiLens</span>
          </div>
          
          <div className="w-16"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* Request Form */}
        <div className="bg-gray-950 border border-gray-900 rounded-lg p-6">
          <ApiForm onResponse={handleResponse} onError={handleError} />
        </div>

        {/* Response */}
        {responseData && (
          <>
            {/* Stats */}
            <StatsPanel
              data={responseData.data}
              status={responseData.status}
              time={responseData.time}
              size={responseData.size}
            />

            {/* Viewer */}
            <div className="bg-gray-950 border border-gray-900 rounded-lg overflow-hidden">
              {/* Toolbar */}
              <div className="border-b border-gray-900 p-4">
                {activeTab === 'tree' ? (
                  <SearchBar value={searchQuery} onChange={setSearchQuery} />
                ) : (
                  <div className="h-10"></div>
                )}
              </div>

              {/* Tabs */}
              <ViewTabs 
                activeTab={activeTab} 
                onTabChange={(tab) => {
                  setActiveTab(tab);
                  setSearchQuery('');
                }}
                showTable={showTableTab}
              />

              {/* Content */}
              {activeTab === 'tree' && (
                <div className="p-6 max-h-[70vh] overflow-auto custom-scrollbar">
                  <TreeView data={responseData.data} searchQuery={searchQuery} />
                </div>
              )}

              {activeTab === 'table' && showTableTab && (
                <div className="max-h-[70vh] overflow-auto custom-scrollbar">
                  <TableView data={responseData.data} />
                </div>
              )}

              {activeTab === 'graph' && (
                <GraphView data={responseData.data} />
              )}

              {activeTab === 'raw' && <RawView data={responseData.data} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
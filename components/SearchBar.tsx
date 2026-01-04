'use client';

import { Search, X, ChevronUp, ChevronDown } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  matchCount?: number;
  currentMatch?: number;
  onNext?: () => void;
  onPrevious?: () => void;
}

export default function SearchBar({ 
  value, 
  onChange, 
  matchCount = 0,
  currentMatch = 0,
  onNext,
  onPrevious
}: SearchBarProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search in response..."
          className="w-full pl-10 pr-10 py-2 bg-black border border-gray-800 text-white text-sm rounded-lg placeholder-gray-600 focus:border-blue-500 focus:outline-none"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-800 rounded"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        )}
      </div>

      {value && matchCount > 0 && (
        <>
          <span className="text-sm text-gray-500 whitespace-nowrap">
            {currentMatch}/{matchCount}
          </span>
          <div className="flex gap-1">
            <button
              onClick={onPrevious}
              className="p-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded transition-colors"
              disabled={matchCount === 0}
            >
              <ChevronUp className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={onNext}
              className="p-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded transition-colors"
              disabled={matchCount === 0}
            >
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
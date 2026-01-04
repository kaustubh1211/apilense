'use client';

import { useState, useMemo } from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

interface TableViewProps {
  data: any[];
}

export default function TableView({ data }: TableViewProps) {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [copiedCell, setCopiedCell] = useState<string | null>(null);

  const columns = useMemo(() => {
    const allKeys = new Set<string>();
    data.forEach(item => {
      if (typeof item === 'object' && item !== null) {
        Object.keys(item).forEach(key => allKeys.add(key));
      }
    });
    return Array.from(allKeys);
  }, [data]);

  const sortedData = useMemo(() => {
    if (!sortColumn) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];

      if (aVal == null) return 1;
      if (bVal == null) return -1;

      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortDirection === 'asc' 
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }

      return sortDirection === 'asc'
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  }, [data, sortColumn, sortDirection]);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleCopy = (value: any, cellId: string) => {
    const textValue = typeof value === 'string' ? value : JSON.stringify(value);
    navigator.clipboard.writeText(textValue);
    setCopiedCell(cellId);
    toast.success('Copied');
    setTimeout(() => setCopiedCell(null), 2000);
  };

  const formatValue = (value: any): string => {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (typeof value === 'object') return JSON.stringify(value);
    return String(value);
  };

  if (!data || data.length === 0) {
    return <div className="text-gray-500 p-6 text-center">No data</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-900">
            {columns.map((column) => (
              <th
                key={column}
                onClick={() => handleSort(column)}
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-900/50 transition-colors select-none"
              >
                <div className="flex items-center gap-2">
                  <span>{column}</span>
                  {sortColumn === column ? (
                    sortDirection === 'asc' ? (
                      <ArrowUp className="w-3 h-3" />
                    ) : (
                      <ArrowDown className="w-3 h-3" />
                    )
                  ) : (
                    <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-50" />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-900">
          {sortedData.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              className="hover:bg-gray-900/30 transition-colors"
            >
              {columns.map((column) => {
                const value = row[column];
                const cellId = `${rowIndex}-${column}`;
                const isCopied = copiedCell === cellId;

                return (
                  <td 
                    key={column}
                    className="px-4 py-3 text-sm text-gray-300 group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono truncate max-w-md">
                        {formatValue(value)}
                      </span>
                      <button
                        onClick={() => handleCopy(value, cellId)}
                        className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-800 rounded transition-all"
                      >
                        {isCopied ? (
                          <Check className="w-3 h-3 text-green-500" />
                        ) : (
                          <Copy className="w-3 h-3 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="px-4 py-3 text-xs text-gray-500 border-t border-gray-900 bg-gray-950">
        {sortedData.length} {sortedData.length === 1 ? 'row' : 'rows'}
      </div>
    </div>
  );
}
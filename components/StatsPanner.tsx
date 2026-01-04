'use client';

import { analyzeData } from "@/libs/Analyzer";

interface StatsPanelProps {
  data: any;
  status: number;
  time: number;
  size: number;
}

export default function StatsPanel({ data, status, time, size }: StatsPanelProps) {
  const analysis = analyzeData(data);
  
  const stats = [
    {
      label: 'Status',
      value: status,
      success: status >= 200 && status < 300,
    },
    {
      label: 'Time',
      value: `${time}ms`,
    },
    {
      label: 'Size',
      value: `${(size / 1024).toFixed(2)} KB`,
    },
    {
      label: 'Type',
      value: analysis.type === 'array' ? `Array[${analysis.itemCount}]` : analysis.type,
    },
    {
      label: 'Depth',
      value: `${analysis.depth}`,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="border-b border-neutral-800 bg-neutral-950 text-neutral-200   rounded-b-sm p-4"
        >
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            {stat.label}
          </div>
          <div className={`text-xl font-semibold ${
            stat.label === 'Status' 
              ? (stat.success ? 'text-green-500' : 'text-red-500')
              : 'text-white'
          }`}>
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
}
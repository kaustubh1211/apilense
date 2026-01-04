export interface AnalysisResult {
  type: 'array' | 'object' | 'primitive';
  suggestedView: 'tree' | 'table' | 'raw';
  itemCount?: number;
  depth: number;
  keys?: string[];
}

export function analyzeData(data: any): AnalysisResult {
  const type = getDataType(data);
  const depth = calculateDepth(data);

  // Array of objects → Table view
  if (Array.isArray(data) && data.length > 0) {
    const firstItem = data[0];
    
    if (typeof firstItem === 'object' && firstItem !== null && !Array.isArray(firstItem)) {
      // Check if all items have similar structure
      const firstKeys = Object.keys(firstItem);
      const allSimilar = data.every(item => 
        typeof item === 'object' && 
        item !== null &&
        Object.keys(item).length > 0
      );

      if (allSimilar) {
        return {
          type: 'array',
          suggestedView: 'table',
          itemCount: data.length,
          depth,
          keys: firstKeys,
        };
      }
    }

    return {
      type: 'array',
      suggestedView: 'tree',
      itemCount: data.length,
      depth,
    };
  }

  // Nested object → Tree view
  if (type === 'object') {
    return {
      type: 'object',
      suggestedView: 'tree',
      depth,
      keys: Object.keys(data),
    };
  }

  // Primitive → Raw view
  return {
    type: 'primitive',
    suggestedView: 'raw',
    depth: 0,
  };
}

function getDataType(data: any): 'array' | 'object' | 'primitive' {
  if (data === null || data === undefined) return 'primitive';
  if (Array.isArray(data)) return 'array';
  if (typeof data === 'object') return 'object';
  return 'primitive';
}

function calculateDepth(obj: any, currentDepth = 0): number {
  if (typeof obj !== 'object' || obj === null) {
    return currentDepth;
  }

  let maxDepth = currentDepth;

  for (const key in obj) {
    const depth = calculateDepth(obj[key], currentDepth + 1);
    maxDepth = Math.max(maxDepth, depth);
  }

  return maxDepth;
}
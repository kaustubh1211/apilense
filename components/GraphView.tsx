'use client';

import { useCallback, useMemo } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
} from 'reactflow';


interface GraphViewProps {
  data: any;
}

export default function GraphView({ data }: GraphViewProps) {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => 
    convertToGraph(data), [data]
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="h-[70vh] bg-black">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        attributionPosition="bottom-right"
        proOptions={{ hideAttribution: true }}
        className="bg-black"
      >
        <Background color="#333" gap={16} />
        <Controls className="bg-gray-900 border border-gray-800" />
        <MiniMap 
          className="bg-gray-900 border border-gray-800"
          nodeColor="#1f2937"
          maskColor="rgba(0, 0, 0, 0.6)"
        />
      </ReactFlow>
    </div>
  );
}

// Convert JSON to graph nodes and edges
function convertToGraph(data: any, parentId: string = 'root', level: number = 0): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  
  let nodeId = 0;
  const getId = () => `node-${nodeId++}`;

  const buildGraph = (obj: any, parent: string | null, depth: number, xOffset: number = 0) => {
    const currentId = getId();
    const isArray = Array.isArray(obj);
    const isObject = typeof obj === 'object' && obj !== null && !isArray;
    const isPrimitive = !isArray && !isObject;

    // Calculate position
    const x = xOffset * 250;
    const y = depth * 150;

    // Create node
    if (isPrimitive) {
      // Primitive value node
      nodes.push({
        id: currentId,
        data: { 
          label: (
            <div className="px-3 py-2">
              <div className="text-gray-300 font-mono text-sm">
                {String(obj)}
              </div>
            </div>
          )
        },
        position: { x, y },
        style: {
          background: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: '6px',
          color: 'white',
          fontSize: '12px',
          padding: '0',
        },
      });
    } else if (isArray) {
      // Array node
      nodes.push({
        id: currentId,
        data: { 
          label: (
            <div className="px-3 py-2">
              <div className="text-gray-500 text-xs font-medium mb-1">Array</div>
              <div className="text-white font-mono text-sm">
                [{obj.length} items]
              </div>
            </div>
          )
        },
        position: { x, y },
        style: {
          background: '#0a0a0a',
          border: '1px solid #2563eb',
          borderRadius: '6px',
          padding: '0',
          minWidth: '120px',
        },
      });

      // Process array items
      obj.forEach((item: any, index: number) => {
        const childXOffset = xOffset + (index - obj.length / 2) * 0.5;
        buildGraph(item, currentId, depth + 1, childXOffset);
      });
    } else if (isObject) {
      // Object node
      const keys = Object.keys(obj);
      
      nodes.push({
        id: currentId,
        data: { 
          label: (
            <div className="px-3 py-2 space-y-1">
              {keys.slice(0, 5).map(key => {
                const value = obj[key];
                const isNested = typeof value === 'object' && value !== null;
                
                return (
                  <div key={key} className="flex items-start gap-2 text-xs">
                    <span className="text-blue-400 font-medium">{key}:</span>
                    {!isNested && (
                      <span className="text-gray-300 font-mono">
                        {typeof value === 'string' ? `"${value}"` : String(value)}
                      </span>
                    )}
                    {isNested && (
                      <span className="text-gray-500">
                        {Array.isArray(value) ? `{${value.length} items}` : '{...}'}
                      </span>
                    )}
                  </div>
                );
              })}
              {keys.length > 5 && (
                <div className="text-gray-600 text-xs">
                  +{keys.length - 5} more
                </div>
              )}
            </div>
          )
        },
        position: { x, y },
        style: {
          background: '#0a0a0a',
          border: '1px solid #333',
          borderRadius: '6px',
          padding: '0',
          minWidth: '160px',
        },
      });

      // Process nested objects/arrays
      let childIndex = 0;
      keys.forEach(key => {
        const value = obj[key];
        if (typeof value === 'object' && value !== null) {
          const childXOffset = xOffset + (childIndex - keys.length / 2) * 0.8;
          buildGraph(value, currentId, depth + 1, childXOffset);
          childIndex++;
        }
      });
    }

    // Create edge from parent
    if (parent) {
      edges.push({
        id: `edge-${parent}-${currentId}`,
        source: parent,
        target: currentId,
        type: 'smoothstep',
        animated: false,
        style: { stroke: '#333', strokeWidth: 1.5 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#333',
          width: 15,
          height: 15,
        },
      });
    }

    return currentId;
  };

  buildGraph(data, null, 0, 0);

  return { nodes, edges };
}
"use client";

import { useState } from "react";

interface GraphNode {
  id: string;
  label: string;
  type: "file" | "function" | "component" | "api" | "data";
  x: number;
  y: number;
}

interface GraphEdge {
  from: string;
  to: string;
  label: string;
}

const NODES: GraphNode[] = [
  { id: "page", label: "page.tsx", type: "file", x: 50, y: 10 },
  { id: "layout", label: "layout.tsx", type: "file", x: 20, y: 25 },
  { id: "starfield", label: "StarField", type: "component", x: 75, y: 20 },
  { id: "guestbook", label: "Guestbook", type: "component", x: 30, y: 50 },
  { id: "counter", label: "VisitorCounter", type: "component", x: 70, y: 50 },
  { id: "sound", label: "SoundManager", type: "component", x: 50, y: 35 },
  { id: "api_gb", label: "/api/guestbook", type: "api", x: 20, y: 75 },
  { id: "api_vis", label: "/api/visitors", type: "api", x: 80, y: 75 },
  { id: "data_gb", label: "guestbook.json", type: "data", x: 10, y: 90 },
  { id: "data_vis", label: "visitors.json", type: "data", x: 90, y: 90 },
  { id: "konami", label: "KonamiCode", type: "component", x: 55, y: 65 },
];

const EDGES: GraphEdge[] = [
  { from: "page", to: "layout", label: "renders in" },
  { from: "page", to: "starfield", label: "imports" },
  { from: "page", to: "guestbook", label: "imports" },
  { from: "page", to: "counter", label: "imports" },
  { from: "page", to: "sound", label: "imports" },
  { from: "page", to: "konami", label: "imports" },
  { from: "guestbook", to: "api_gb", label: "fetches" },
  { from: "counter", to: "api_vis", label: "fetches" },
  { from: "api_gb", to: "data_gb", label: "reads/writes" },
  { from: "api_vis", to: "data_vis", label: "reads/writes" },
];

const TYPE_COLORS: Record<string, string> = {
  file: "#ff6ec7",
  function: "#00ffff",
  component: "#39ff14",
  api: "#ffff00",
  data: "#9b59b6",
};

export default function GraphifySection() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h3 className="text-lg mb-2" style={{ fontFamily: "'Press Start 2P', monospace", color: "#00ffff", fontSize: "0.9rem" }}>
          🧠 PIP&apos;S BRAIN MAP
        </h3>
        <p className="text-gray-400 font-mono text-sm">
          Powered by{" "}
          <a href="https://github.com/Graphify-Labs/graphify" target="_blank" rel="noopener noreferrer" className="text-[#ff6ec7] underline hover:text-[#00ffff] transition-colors">Graphify</a>
          {" "}— this website&apos;s own codebase, visualized as a graph
        </p>
      </div>

      <div className="relative w-full h-80 md:h-96 border-2 border-[#333] bg-black/40 rounded overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          {EDGES.map((edge, i) => {
            const fromNode = NODES.find((n) => n.id === edge.from)!;
            const toNode = NODES.find((n) => n.id === edge.to)!;
            const isHighlighted = hoveredNode === edge.from || hoveredNode === edge.to;
            return (
              <g key={i}>
                <line x1={fromNode.x} y1={fromNode.y} x2={toNode.x} y2={toNode.y}
                  stroke={isHighlighted ? "#00ffff" : "#333"} strokeWidth={isHighlighted ? 0.8 : 0.3}
                  strokeDasharray={isHighlighted ? "none" : "2,2"} className="transition-all duration-300" />
                {isHighlighted && (
                  <text x={(fromNode.x + toNode.x) / 2} y={(fromNode.y + toNode.y) / 2 - 2}
                    textAnchor="middle" fill="#ffff00" fontSize="2.5" fontFamily="monospace">{edge.label}</text>
                )}
              </g>
            );
          })}
          {NODES.map((node) => (
            <g key={node.id} onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)} onClick={() => setSelectedNode(node)} className="cursor-pointer">
              <circle cx={node.x} cy={node.y} r={hoveredNode === node.id ? 4 : 3}
                fill={TYPE_COLORS[node.type]} opacity={hoveredNode && hoveredNode !== node.id ? 0.3 : 1}
                className="transition-all duration-300" />
              <text x={node.x} y={node.y + 6} textAnchor="middle"
                fill={hoveredNode === node.id ? "#fff" : "#aaa"} fontSize="2.2" fontFamily="monospace"
                className="transition-all duration-300">{node.label}</text>
            </g>
          ))}
        </svg>
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-2 text-[10px] font-mono">
          {Object.entries(TYPE_COLORS).map(([type, color]) => (
            <span key={type} className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: color }} />
              <span className="text-gray-400">{type}</span>
            </span>
          ))}
        </div>
      </div>

      {selectedNode && (
        <div className="mt-4 p-4 border border-[#00ffff]/30 bg-black/60 rounded font-mono text-sm">
          <span className="text-[#ff6ec7]">node:</span> <span className="text-white">{selectedNode.label}</span><br />
          <span className="text-[#ff6ec7]">type:</span> <span style={{ color: TYPE_COLORS[selectedNode.type] }}>{selectedNode.type}</span><br />
          <span className="text-[#ff6ec7]">edges:</span>{" "}
          <span className="text-[#39ff14]">
            {EDGES.filter((e) => e.from === selectedNode.id || e.to === selectedNode.id).length} connections
          </span>
        </div>
      )}
    </div>
  );
}
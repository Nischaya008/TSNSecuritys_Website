import { useState, useEffect, useRef } from "react";
import {
  Network,
  Search,
  Filter,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Download,
  Settings,
  Eye,
  EyeOff,
  MapPin,
  Users,
  Database,
  Globe,
  Phone,
  Mail,
  Car,
  Bitcoin,
  Activity,
  Clock,
  AlertTriangle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Node {
  id: string;
  label: string;
  type:
    | "target"
    | "data_source"
    | "analysis"
    | "location"
    | "device"
    | "communication";
  subtype?: string;
  risk_level?: "low" | "medium" | "high" | "critical";
  confidence?: number;
  x?: number;
  y?: number;
  data: {
    description?: string;
    last_activity?: Date;
    source_count?: number;
    connection_strength?: number;
  };
}

interface Edge {
  id: string;
  source: string;
  target: string;
  type: "communication" | "financial" | "location" | "social" | "technical";
  strength: number;
  direction?: "bidirectional" | "source_to_target" | "target_to_source";
  data: {
    first_seen?: Date;
    last_seen?: Date;
    frequency?: number;
    evidence_count?: number;
  };
}

interface NetworkVisualization {
  nodes: Node[];
  edges: Edge[];
}

const nodeTypeIcons = {
  target: Users,
  data_source: Database,
  analysis: Activity,
  location: MapPin,
  device: Globe,
  communication: Phone,
};

const nodeTypeColors = {
  target: "#ef4444", // red
  data_source: "#3b82f6", // blue
  analysis: "#10b981", // green
  location: "#f59e0b", // yellow
  device: "#8b5cf6", // purple
  communication: "#06b6d4", // cyan
};

export default function InvestigationMap() {
  const [networkData, setNetworkData] = useState<NetworkVisualization>({
    nodes: [],
    edges: [],
  });
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [nodeTypeFilter, setNodeTypeFilter] = useState<string>("all");
  const [riskFilter, setRiskFilter] = useState<string>("all");
  const [timeRange, setTimeRange] = useState<number[]>([0, 30]);
  const [showLabels, setShowLabels] = useState(true);
  const [showEdgeWeights, setShowEdgeWeights] = useState(false);
  const [networkStrength, setNetworkStrength] = useState<number[]>([0.3]);
  const svgRef = useRef<SVGSVGElement>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);

  // Mock network data
  useEffect(() => {
    const mockNodes: Node[] = [
      {
        id: "target-001",
        label: "Viktor Petrov",
        type: "target",
        subtype: "person",
        risk_level: "critical",
        confidence: 95,
        x: 400,
        y: 300,
        data: {
          description: "Suspected cybercriminal leader",
          last_activity: new Date(Date.now() - 2 * 60 * 60 * 1000),
          source_count: 8,
          connection_strength: 0.9,
        },
      },
      {
        id: "target-002",
        label: "Dark Phoenix Org",
        type: "target",
        subtype: "organization",
        risk_level: "high",
        confidence: 78,
        x: 600,
        y: 200,
        data: {
          description: "Criminal organization",
          last_activity: new Date(Date.now() - 6 * 60 * 60 * 1000),
          source_count: 15,
          connection_strength: 0.8,
        },
      },
      {
        id: "phone-001",
        label: "+7-495-xxx-xxxx",
        type: "communication",
        subtype: "phone",
        risk_level: "medium",
        confidence: 82,
        x: 300,
        y: 450,
        data: {
          description: "Moscow phone number",
          last_activity: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          source_count: 3,
          connection_strength: 0.6,
        },
      },
      {
        id: "email-001",
        label: "v.petrov@suspicious.com",
        type: "communication",
        subtype: "email",
        risk_level: "high",
        confidence: 88,
        x: 500,
        y: 450,
        data: {
          description: "Suspicious email domain",
          last_activity: new Date(Date.now() - 4 * 60 * 60 * 1000),
          source_count: 5,
          connection_strength: 0.7,
        },
      },
      {
        id: "location-001",
        label: "Moscow, Russia",
        type: "location",
        risk_level: "medium",
        confidence: 75,
        x: 200,
        y: 300,
        data: {
          description: "Primary operating location",
          last_activity: new Date(Date.now() - 12 * 60 * 60 * 1000),
          source_count: 12,
          connection_strength: 0.5,
        },
      },
      {
        id: "bitcoin-001",
        label: "1A1zP1eP5Q...DivfNa",
        type: "device",
        subtype: "crypto_wallet",
        risk_level: "critical",
        confidence: 92,
        x: 700,
        y: 350,
        data: {
          description: "Bitcoin wallet with large transactions",
          last_activity: new Date(Date.now() - 30 * 60 * 1000),
          source_count: 6,
          connection_strength: 0.85,
        },
      },
      {
        id: "source-001",
        label: "FBI Database",
        type: "data_source",
        confidence: 98,
        x: 100,
        y: 150,
        data: {
          description: "Government intelligence database",
          source_count: 247,
          connection_strength: 1.0,
        },
      },
      {
        id: "analysis-001",
        label: "Financial Analysis",
        type: "analysis",
        confidence: 89,
        x: 800,
        y: 450,
        data: {
          description: "Transaction pattern analysis",
          last_activity: new Date(Date.now() - 1 * 60 * 60 * 1000),
          connection_strength: 0.7,
        },
      },
    ];

    const mockEdges: Edge[] = [
      {
        id: "edge-001",
        source: "target-001",
        target: "target-002",
        type: "social",
        strength: 0.8,
        direction: "bidirectional",
        data: {
          first_seen: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000),
          last_seen: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          frequency: 24,
          evidence_count: 8,
        },
      },
      {
        id: "edge-002",
        source: "target-001",
        target: "phone-001",
        type: "communication",
        strength: 0.9,
        direction: "bidirectional",
        data: {
          first_seen: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
          last_seen: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          frequency: 156,
          evidence_count: 12,
        },
      },
      {
        id: "edge-003",
        source: "target-001",
        target: "email-001",
        type: "communication",
        strength: 0.85,
        direction: "source_to_target",
        data: {
          first_seen: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
          last_seen: new Date(Date.now() - 4 * 60 * 60 * 1000),
          frequency: 89,
          evidence_count: 15,
        },
      },
      {
        id: "edge-004",
        source: "target-001",
        target: "location-001",
        type: "location",
        strength: 0.7,
        direction: "bidirectional",
        data: {
          first_seen: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
          last_seen: new Date(Date.now() - 12 * 60 * 60 * 1000),
          frequency: 45,
          evidence_count: 6,
        },
      },
      {
        id: "edge-005",
        source: "target-002",
        target: "bitcoin-001",
        type: "financial",
        strength: 0.95,
        direction: "bidirectional",
        data: {
          first_seen: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
          last_seen: new Date(Date.now() - 30 * 60 * 1000),
          frequency: 67,
          evidence_count: 23,
        },
      },
      {
        id: "edge-006",
        source: "source-001",
        target: "target-001",
        type: "technical",
        strength: 0.8,
        direction: "source_to_target",
        data: {
          first_seen: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000),
          last_seen: new Date(Date.now() - 1 * 60 * 60 * 1000),
          frequency: 12,
          evidence_count: 5,
        },
      },
      {
        id: "edge-007",
        source: "bitcoin-001",
        target: "analysis-001",
        type: "technical",
        strength: 0.75,
        direction: "source_to_target",
        data: {
          first_seen: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          last_seen: new Date(Date.now() - 1 * 60 * 60 * 1000),
          frequency: 8,
          evidence_count: 3,
        },
      },
    ];

    setNetworkData({ nodes: mockNodes, edges: mockEdges });
  }, []);

  const filteredNodes = networkData.nodes.filter((node) => {
    const matchesSearch = node.label
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType =
      nodeTypeFilter === "all" || node.type === nodeTypeFilter;
    const matchesRisk = riskFilter === "all" || node.risk_level === riskFilter;
    return matchesSearch && matchesType && matchesRisk;
  });

  const filteredEdges = networkData.edges.filter((edge) => {
    const sourceVisible = filteredNodes.some((node) => node.id === edge.source);
    const targetVisible = filteredNodes.some((node) => node.id === edge.target);
    const strengthMatch = edge.strength >= networkStrength[0];
    return sourceVisible && targetVisible && strengthMatch;
  });

  const getRiskColor = (risk?: string) => {
    switch (risk) {
      case "critical":
        return "#dc2626";
      case "high":
        return "#ea580c";
      case "medium":
        return "#d97706";
      case "low":
        return "#16a34a";
      default:
        return "#6b7280";
    }
  };

  const getEdgeColor = (type: string) => {
    switch (type) {
      case "communication":
        return "#06b6d4";
      case "financial":
        return "#dc2626";
      case "location":
        return "#f59e0b";
      case "social":
        return "#8b5cf6";
      case "technical":
        return "#10b981";
      default:
        return "#6b7280";
    }
  };

  const handleNodeClick = (node: Node) => {
    setSelectedNode(node);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev * 1.2, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev * 0.8, 0.1));
  };

  const handleReset = () => {
    setZoomLevel(1);
    setPanX(0);
    setPanY(0);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Investigation Map</h1>
          <p className="text-muted-foreground">
            Interactive network visualization of OSINT relationships and
            connections
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Map
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Nodes</CardTitle>
            <Network className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredNodes.length}</div>
            <p className="text-xs text-muted-foreground">
              {networkData.nodes.length} total entities
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Connections</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredEdges.length}</div>
            <p className="text-xs text-success">Strong relationships</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {
                filteredNodes.filter(
                  (n) => n.risk_level === "critical" || n.risk_level === "high",
                ).length
              }
            </div>
            <p className="text-xs text-destructive">Critical attention</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Sources</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {filteredNodes.filter((n) => n.type === "data_source").length}
            </div>
            <p className="text-xs text-muted-foreground">Active sources</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Control Panel */}
        <div className="space-y-4">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <Input
                  id="search"
                  placeholder="Search nodes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="node-type">Node Type</Label>
                <Select
                  value={nodeTypeFilter}
                  onValueChange={setNodeTypeFilter}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="target">Targets</SelectItem>
                    <SelectItem value="communication">Communication</SelectItem>
                    <SelectItem value="location">Locations</SelectItem>
                    <SelectItem value="device">Devices</SelectItem>
                    <SelectItem value="data_source">Data Sources</SelectItem>
                    <SelectItem value="analysis">Analysis</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="risk">Risk Level</Label>
                <Select value={riskFilter} onValueChange={setRiskFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Connection Strength</Label>
                <Slider
                  value={networkStrength}
                  onValueChange={setNetworkStrength}
                  min={0}
                  max={1}
                  step={0.1}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground">
                  Min: {networkStrength[0].toFixed(1)}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Layers className="h-4 w-4" />
                Display Options
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="show-labels">Show Labels</Label>
                <Switch
                  id="show-labels"
                  checked={showLabels}
                  onCheckedChange={setShowLabels}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="show-weights">Edge Weights</Label>
                <Switch
                  id="show-weights"
                  checked={showEdgeWeights}
                  onCheckedChange={setShowEdgeWeights}
                />
              </div>

              <div className="space-y-2">
                <Label>Zoom: {(zoomLevel * 100).toFixed(0)}%</Label>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleZoomOut}
                    className="flex-1"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleReset}
                    className="flex-1"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleZoomIn}
                    className="flex-1"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legend */}
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg">Legend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Label className="text-xs font-medium">NODE TYPES</Label>
                {Object.entries(nodeTypeIcons).map(([type, Icon]) => (
                  <div key={type} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor:
                          nodeTypeColors[type as keyof typeof nodeTypeColors],
                      }}
                    />
                    <Icon className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs capitalize">
                      {type.replace("_", " ")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-medium">RISK LEVELS</Label>
                {["critical", "high", "medium", "low"].map((risk) => (
                  <div key={risk} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: getRiskColor(risk) }}
                    />
                    <span className="text-xs capitalize">{risk}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Network Visualization */}
        <div className="lg:col-span-2">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Network className="h-4 w-4" />
                Network Graph
              </CardTitle>
              <CardDescription>
                Interactive visualization of investigation relationships
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-[600px] border rounded-lg bg-background/50 overflow-hidden">
                <TooltipProvider>
                  <svg
                    ref={svgRef}
                    width="100%"
                    height="100%"
                    className="cursor-grab active:cursor-grabbing"
                  >
                    {/* Background grid */}
                    <defs>
                      <pattern
                        id="grid"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="rgb(41, 49, 61)"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    <g
                      transform={`translate(${panX}, ${panY}) scale(${zoomLevel})`}
                    >
                      {/* Edges */}
                      {filteredEdges.map((edge) => {
                        const sourceNode = filteredNodes.find(
                          (n) => n.id === edge.source,
                        );
                        const targetNode = filteredNodes.find(
                          (n) => n.id === edge.target,
                        );
                        if (!sourceNode || !targetNode) return null;

                        return (
                          <g key={edge.id}>
                            <line
                              x1={sourceNode.x}
                              y1={sourceNode.y}
                              x2={targetNode.x}
                              y2={targetNode.y}
                              stroke={getEdgeColor(edge.type)}
                              strokeWidth={Math.max(edge.strength * 4, 1)}
                              strokeOpacity={0.6}
                            />
                            {showEdgeWeights && (
                              <text
                                x={(sourceNode.x! + targetNode.x!) / 2}
                                y={(sourceNode.y! + targetNode.y!) / 2}
                                fill="rgb(148, 163, 184)"
                                fontSize="10"
                                textAnchor="middle"
                              >
                                {edge.strength.toFixed(1)}
                              </text>
                            )}
                          </g>
                        );
                      })}

                      {/* Nodes */}
                      {filteredNodes.map((node) => {
                        const NodeIcon =
                          nodeTypeIcons[
                            node.type as keyof typeof nodeTypeIcons
                          ];
                        return (
                          <Tooltip key={node.id}>
                            <TooltipTrigger asChild>
                              <g
                                className="cursor-pointer hover:opacity-80"
                                onClick={() => handleNodeClick(node)}
                              >
                                <circle
                                  cx={node.x}
                                  cy={node.y}
                                  r={
                                    node.type === "target"
                                      ? 25
                                      : node.type === "data_source"
                                        ? 20
                                        : 15
                                  }
                                  fill={
                                    node.risk_level
                                      ? getRiskColor(node.risk_level)
                                      : nodeTypeColors[
                                          node.type as keyof typeof nodeTypeColors
                                        ]
                                  }
                                  stroke="rgb(248, 250, 252)"
                                  strokeWidth="2"
                                />
                                {showLabels && (
                                  <text
                                    x={node.x}
                                    y={node.y! + 35}
                                    fill="rgb(248, 250, 252)"
                                    fontSize="12"
                                    textAnchor="middle"
                                    className="pointer-events-none"
                                  >
                                    {node.label.length > 15
                                      ? `${node.label.substring(0, 15)}...`
                                      : node.label}
                                  </text>
                                )}
                              </g>
                            </TooltipTrigger>
                            <TooltipContent>
                              <div className="space-y-1">
                                <p className="font-medium">{node.label}</p>
                                <p className="text-xs text-muted-foreground">
                                  Type: {node.type.replace("_", " ")}
                                </p>
                                {node.confidence && (
                                  <p className="text-xs">
                                    Confidence: {node.confidence}%
                                  </p>
                                )}
                                {node.data.description && (
                                  <p className="text-xs">
                                    {node.data.description}
                                  </p>
                                )}
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                    </g>
                  </svg>
                </TooltipProvider>

                {/* Controls overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge variant="outline" className="bg-background/80">
                    {filteredNodes.length} nodes, {filteredEdges.length}{" "}
                    connections
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Node Details Panel */}
        <div className="space-y-4">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Node Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedNode ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">{selectedNode.label}</h3>
                    <p className="text-sm text-muted-foreground capitalize">
                      {selectedNode.type.replace("_", " ")}
                      {selectedNode.subtype && ` - ${selectedNode.subtype}`}
                    </p>
                  </div>

                  {selectedNode.risk_level && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Risk Level:</span>
                      <Badge
                        variant="outline"
                        style={{
                          backgroundColor: `${getRiskColor(selectedNode.risk_level)}20`,
                          color: getRiskColor(selectedNode.risk_level),
                          borderColor: `${getRiskColor(selectedNode.risk_level)}40`,
                        }}
                      >
                        {selectedNode.risk_level.toUpperCase()}
                      </Badge>
                    </div>
                  )}

                  {selectedNode.confidence && (
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm">Confidence</span>
                        <span className="text-sm">
                          {selectedNode.confidence}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${selectedNode.confidence}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {selectedNode.data.description && (
                    <div>
                      <Label className="text-xs text-muted-foreground">
                        DESCRIPTION
                      </Label>
                      <p className="text-sm mt-1">
                        {selectedNode.data.description}
                      </p>
                    </div>
                  )}

                  {selectedNode.data.last_activity && (
                    <div>
                      <Label className="text-xs text-muted-foreground">
                        LAST ACTIVITY
                      </Label>
                      <p className="text-sm mt-1 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {selectedNode.data.last_activity.toLocaleString()}
                      </p>
                    </div>
                  )}

                  {selectedNode.data.source_count && (
                    <div>
                      <Label className="text-xs text-muted-foreground">
                        DATA SOURCES
                      </Label>
                      <p className="text-sm mt-1">
                        {selectedNode.data.source_count} sources
                      </p>
                    </div>
                  )}

                  <div className="pt-2 border-t">
                    <Button size="sm" className="w-full">
                      View Full Profile
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Network className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Click on a node to view details
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Connection Analysis */}
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Connections
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedNode ? (
                <div className="space-y-3">
                  {filteredEdges
                    .filter(
                      (edge) =>
                        edge.source === selectedNode.id ||
                        edge.target === selectedNode.id,
                    )
                    .map((edge) => {
                      const connectedNodeId =
                        edge.source === selectedNode.id
                          ? edge.target
                          : edge.source;
                      const connectedNode = filteredNodes.find(
                        (n) => n.id === connectedNodeId,
                      );
                      if (!connectedNode) return null;

                      return (
                        <div
                          key={edge.id}
                          className="flex items-center justify-between p-2 border rounded"
                        >
                          <div>
                            <p className="text-sm font-medium">
                              {connectedNode.label}
                            </p>
                            <p className="text-xs text-muted-foreground capitalize">
                              {edge.type} connection
                            </p>
                          </div>
                          <Badge
                            variant="outline"
                            className="text-xs"
                            style={{
                              backgroundColor: `${getEdgeColor(edge.type)}20`,
                              color: getEdgeColor(edge.type),
                              borderColor: `${getEdgeColor(edge.type)}40`,
                            }}
                          >
                            {(edge.strength * 100).toFixed(0)}%
                          </Badge>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-4">
                  Select a node to view connections
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

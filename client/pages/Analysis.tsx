import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Download,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  MoreHorizontal,
  ArrowUpDown,
  Calendar,
  MapPin,
  Globe,
  Phone,
  Mail,
  Car,
  Bitcoin,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Analysis {
  id: string;
  type: "phone" | "email" | "ip" | "crypto" | "vehicle" | "international_phone";
  query: string;
  status: "pending" | "completed" | "failed";
  risk_level: "low" | "medium" | "high";
  created_at: Date;
  completed_at?: Date;
  confidence: number;
  location?: string;
  provider?: string;
  reputation?: string;
  threat_indicators: string[];
}

const dataTypeIcons = {
  phone: Phone,
  email: Mail,
  ip: Globe,
  crypto: Bitcoin,
  vehicle: Car,
  international_phone: Phone,
};

export default function Analysis() {
  const [analyses, setAnalyses] = useState<Analysis[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [riskFilter, setRiskFilter] = useState<string>("all");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock data
  useEffect(() => {
    const mockAnalyses: Analysis[] = [
      {
        id: "AN001",
        type: "phone",
        query: "+1-555-0123",
        status: "completed",
        risk_level: "high",
        created_at: new Date(Date.now() - 2 * 60 * 60 * 1000),
        completed_at: new Date(Date.now() - 1.5 * 60 * 60 * 1000),
        confidence: 95,
        location: "New York, USA",
        provider: "Verizon",
        reputation: "Suspicious",
        threat_indicators: ["Multiple fraud reports", "Blacklisted number"],
      },
      {
        id: "AN002",
        type: "email",
        query: "suspect@darkweb.onion",
        status: "completed",
        risk_level: "high",
        created_at: new Date(Date.now() - 3 * 60 * 60 * 1000),
        completed_at: new Date(Date.now() - 2.5 * 60 * 60 * 1000),
        confidence: 88,
        location: "Unknown",
        provider: "Tor Hidden Service",
        reputation: "Malicious",
        threat_indicators: ["Dark web association", "Illegal activities"],
      },
      {
        id: "AN003",
        type: "ip",
        query: "192.168.1.100",
        status: "completed",
        risk_level: "low",
        created_at: new Date(Date.now() - 1 * 60 * 60 * 1000),
        completed_at: new Date(Date.now() - 30 * 60 * 1000),
        confidence: 72,
        location: "Private Network",
        provider: "Local ISP",
        reputation: "Clean",
        threat_indicators: [],
      },
      {
        id: "AN004",
        type: "crypto",
        query: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        status: "pending",
        risk_level: "medium",
        created_at: new Date(Date.now() - 15 * 60 * 1000),
        confidence: 0,
        threat_indicators: [],
      },
    ];
    setAnalyses(mockAnalyses);
  }, []);

  const filteredAnalyses = analyses.filter((analysis) => {
    const matchesSearch = analysis.query
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || analysis.status === statusFilter;
    const matchesRisk =
      riskFilter === "all" || analysis.risk_level === riskFilter;
    return matchesSearch && matchesStatus && matchesRisk;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "failed":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      default:
        return <Clock className="h-4 w-4 text-warning" />;
    }
  };

  const getRiskBadge = (risk: string) => {
    const variants = {
      high: "bg-destructive/10 text-destructive border-destructive/20",
      medium: "bg-warning/10 text-warning border-warning/20",
      low: "bg-success/10 text-success border-success/20",
    };
    return (
      <Badge
        variant="outline"
        className={variants[risk as keyof typeof variants]}
      >
        {risk.toUpperCase()}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analysis Center</h1>
          <p className="text-muted-foreground">
            Advanced OSINT analysis and investigation tools
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export All
          </Button>
          <Button size="sm">
            <Search className="h-4 w-4 mr-2" />
            New Analysis
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Analyses
            </CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyses.length}</div>
            <p className="text-xs text-success">+12% from last week</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {analyses.filter((a) => a.risk_level === "high").length}
            </div>
            <p className="text-xs text-destructive">
              Critical attention required
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">94.2%</div>
            <p className="text-xs text-success">+2.1% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Processing
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4m</div>
            <p className="text-xs text-muted-foreground">Per analysis</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-lg">Filters & Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="search">Search Query</Label>
              <Input
                id="search"
                placeholder="Search by query, ID, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
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
                  <SelectItem value="high">High Risk</SelectItem>
                  <SelectItem value="medium">Medium Risk</SelectItem>
                  <SelectItem value="low">Low Risk</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button variant="outline" className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Results Table */}
      <Card className="bg-card/50 backdrop-blur">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Analysis Results</CardTitle>
              <CardDescription>
                {filteredAnalyses.length} of {analyses.length} analyses
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Sort
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Query</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Confidence</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAnalyses.map((analysis) => {
                const TypeIcon = dataTypeIcons[analysis.type];
                return (
                  <TableRow key={analysis.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <TypeIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="capitalize">{analysis.type}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {analysis.query}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(analysis.status)}
                        <span className="capitalize">{analysis.status}</span>
                      </div>
                    </TableCell>
                    <TableCell>{getRiskBadge(analysis.risk_level)}</TableCell>
                    <TableCell>
                      {analysis.confidence > 0
                        ? `${analysis.confidence}%`
                        : "-"}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm">
                          {analysis.location || "Unknown"}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {analysis.created_at.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Export Report
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            Delete Analysis
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

import { useState, useEffect } from "react";
import {
  Database,
  Globe,
  Shield,
  Zap,
  AlertCircle,
  CheckCircle,
  Settings,
  Plus,
  RefreshCw,
  Eye,
  Activity,
  Clock,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DataSource {
  id: string;
  name: string;
  type:
    | "database"
    | "api"
    | "web_scraping"
    | "social_media"
    | "government"
    | "commercial";
  status: "online" | "offline" | "maintenance";
  reliability: number;
  response_time: number;
  last_update: Date;
  queries_today: number;
  data_types: string[];
  coverage: string;
  cost_per_query: number;
  classification: "unclassified" | "confidential" | "secret" | "top_secret";
}

const sourceTypeIcons = {
  database: Database,
  api: Globe,
  web_scraping: Globe,
  social_media: Activity,
  government: Shield,
  commercial: TrendingUp,
};

export default function DataSources() {
  const [sources, setSources] = useState<DataSource[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock data
  useEffect(() => {
    const mockSources: DataSource[] = [
      {
        id: "DS001",
        name: "FBI Criminal Database",
        type: "government",
        status: "online",
        reliability: 98,
        response_time: 150,
        last_update: new Date(Date.now() - 5 * 60 * 1000),
        queries_today: 247,
        data_types: ["Criminal Records", "Fingerprints", "Mugshots"],
        coverage: "United States",
        cost_per_query: 0,
        classification: "secret",
      },
      {
        id: "DS002",
        name: "Interpol Global Database",
        type: "government",
        status: "online",
        reliability: 95,
        response_time: 320,
        last_update: new Date(Date.now() - 15 * 60 * 1000),
        queries_today: 89,
        data_types: [
          "International Alerts",
          "Stolen Documents",
          "Wanted Persons",
        ],
        coverage: "Global",
        cost_per_query: 0,
        classification: "secret",
      },
      {
        id: "DS003",
        name: "Social Media Intelligence API",
        type: "social_media",
        status: "online",
        reliability: 87,
        response_time: 89,
        last_update: new Date(Date.now() - 2 * 60 * 1000),
        queries_today: 1523,
        data_types: ["Social Profiles", "Posts", "Connections", "Metadata"],
        coverage: "Global",
        cost_per_query: 0.05,
        classification: "confidential",
      },
      {
        id: "DS004",
        name: "TeleSign Phone Intelligence",
        type: "commercial",
        status: "online",
        reliability: 92,
        response_time: 45,
        last_update: new Date(Date.now() - 1 * 60 * 1000),
        queries_today: 892,
        data_types: [
          "Phone Verification",
          "Carrier Info",
          "Location",
          "Risk Score",
        ],
        coverage: "Global",
        cost_per_query: 0.02,
        classification: "unclassified",
      },
      {
        id: "DS005",
        name: "Dark Web Monitoring",
        type: "web_scraping",
        status: "maintenance",
        reliability: 76,
        response_time: 2340,
        last_update: new Date(Date.now() - 2 * 60 * 60 * 1000),
        queries_today: 23,
        data_types: ["Market Listings", "Forum Posts", "Leak Databases"],
        coverage: "Tor Network",
        cost_per_query: 0.15,
        classification: "confidential",
      },
      {
        id: "DS006",
        name: "Blockchain Analysis Platform",
        type: "api",
        status: "online",
        reliability: 94,
        response_time: 125,
        last_update: new Date(Date.now() - 30 * 1000),
        queries_today: 156,
        data_types: ["Transactions", "Wallet Clusters", "Risk Assessment"],
        coverage: "Bitcoin, Ethereum, Major Altcoins",
        cost_per_query: 0.08,
        classification: "confidential",
      },
    ];
    setSources(mockSources);
  }, []);

  const getStatusBadge = (status: string) => {
    const variants = {
      online: "bg-success/10 text-success border-success/20",
      offline: "bg-destructive/10 text-destructive border-destructive/20",
      maintenance: "bg-warning/10 text-warning border-warning/20",
    };
    return (
      <Badge
        variant="outline"
        className={variants[status as keyof typeof variants]}
      >
        {status.toUpperCase()}
      </Badge>
    );
  };

  const getClassificationBadge = (classification: string) => {
    const variants = {
      unclassified: "bg-muted/10 text-muted-foreground border-muted/20",
      confidential: "bg-warning/10 text-warning border-warning/20",
      secret: "bg-destructive/10 text-destructive border-destructive/20",
      top_secret: "bg-destructive/20 text-destructive border-destructive/40",
    };
    return (
      <Badge
        variant="outline"
        className={variants[classification as keyof typeof variants]}
      >
        {classification.toUpperCase().replace("_", " ")}
      </Badge>
    );
  };

  const onlineSources = sources.filter((s) => s.status === "online").length;
  const avgReliability =
    sources.reduce((sum, s) => sum + s.reliability, 0) / sources.length;
  const totalQueries = sources.reduce((sum, s) => sum + s.queries_today, 0);
  const totalCost = sources.reduce(
    (sum, s) => sum + s.queries_today * s.cost_per_query,
    0,
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Data Sources</h1>
          <p className="text-muted-foreground">
            Manage and monitor OSINT data source integrations
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh All
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Source
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Data Source</DialogTitle>
                <DialogDescription>
                  Configure a new OSINT data source for intelligence gathering
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Data source configuration interface would be implemented here.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Online Sources
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              {onlineSources}/{sources.length}
            </div>
            <p className="text-xs text-muted-foreground">
              {((onlineSources / sources.length) * 100).toFixed(1)}% operational
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Reliability
            </CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {avgReliability.toFixed(1)}%
            </div>
            <Progress value={avgReliability} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Queries Today</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalQueries.toLocaleString()}
            </div>
            <p className="text-xs text-success">+15% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Cost</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalCost.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">API usage costs</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different views */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="costs">Costs</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg">Active Data Sources</CardTitle>
              <CardDescription>
                Real-time status and configuration of all integrated sources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Source</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Reliability</TableHead>
                    <TableHead>Response Time</TableHead>
                    <TableHead>Queries Today</TableHead>
                    <TableHead>Last Update</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sources.map((source) => {
                    const TypeIcon = sourceTypeIcons[source.type];
                    return (
                      <TableRow key={source.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <TypeIcon className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <div className="font-medium">{source.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {source.coverage}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="capitalize">
                          {source.type.replace("_", " ")}
                        </TableCell>
                        <TableCell>{getStatusBadge(source.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress
                              value={source.reliability}
                              className="w-16"
                            />
                            <span className="text-sm">
                              {source.reliability}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{source.response_time}ms</TableCell>
                        <TableCell className="font-mono">
                          {source.queries_today}
                        </TableCell>
                        <TableCell className="text-sm">
                          {source.last_update.toLocaleTimeString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">Response Times</CardTitle>
                <CardDescription>
                  Average response time by source type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["government", "commercial", "social_media", "api"].map(
                    (type) => {
                      const typeSources = sources.filter(
                        (s) => s.type === type,
                      );
                      const avgTime =
                        typeSources.length > 0
                          ? typeSources.reduce(
                              (sum, s) => sum + s.response_time,
                              0,
                            ) / typeSources.length
                          : 0;
                      return (
                        <div
                          key={type}
                          className="flex items-center justify-between"
                        >
                          <span className="capitalize text-sm">
                            {type.replace("_", " ")}
                          </span>
                          <div className="flex items-center gap-2">
                            <Progress
                              value={Math.min(avgTime / 10, 100)}
                              className="w-24"
                            />
                            <span className="text-sm font-mono w-16">
                              {avgTime.toFixed(0)}ms
                            </span>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">Reliability Scores</CardTitle>
                <CardDescription>
                  Data quality and uptime metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sources.slice(0, 4).map((source) => (
                    <div
                      key={source.id}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm">{source.name}</span>
                      <div className="flex items-center gap-2">
                        <Progress value={source.reliability} className="w-24" />
                        <span className="text-sm font-mono w-12">
                          {source.reliability}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg">
                Security Classifications
              </CardTitle>
              <CardDescription>
                Data source security levels and access controls
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Source</TableHead>
                    <TableHead>Classification</TableHead>
                    <TableHead>Data Types</TableHead>
                    <TableHead>Access Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sources.map((source) => (
                    <TableRow key={source.id}>
                      <TableCell className="font-medium">
                        {source.name}
                      </TableCell>
                      <TableCell>
                        {getClassificationBadge(source.classification)}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {source.data_types.slice(0, 2).map((type, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {type}
                            </Badge>
                          ))}
                          {source.data_types.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{source.data_types.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-success/10 text-success border-success/20"
                        >
                          Authorized
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="costs" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">Cost Breakdown</CardTitle>
                <CardDescription>
                  Daily API usage costs by source
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sources
                    .filter((s) => s.cost_per_query > 0)
                    .map((source) => {
                      const dailyCost =
                        source.queries_today * source.cost_per_query;
                      return (
                        <div
                          key={source.id}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm">{source.name}</span>
                          <div className="text-right">
                            <div className="font-mono text-sm">
                              ${dailyCost.toFixed(2)}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {source.queries_today} queries @ $
                              {source.cost_per_query}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">Monthly Projection</CardTitle>
                <CardDescription>
                  Estimated monthly costs based on current usage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold">
                    ${(totalCost * 30).toFixed(2)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Projected monthly cost
                  </p>
                  <div className="text-sm">
                    <span className="text-success">15% under budget</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

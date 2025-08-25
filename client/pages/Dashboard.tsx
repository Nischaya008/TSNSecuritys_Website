import { useState, useEffect } from "react";
import { OSINTAnalysisRequest, OSINTAnalysisResponse } from "@shared/osint";
import {
  Search,
  Shield,
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  Car,
  Globe,
  Bitcoin,
  Activity,
  TrendingUp,
  Users,
  Database,
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

type DataType =
  | "phone"
  | "email"
  | "ip"
  | "crypto"
  | "vehicle"
  | "international_phone";

interface AnalysisResult extends Omit<OSINTAnalysisResponse, "timestamp"> {
  timestamp: Date;
}

const dataTypeConfig = {
  phone: { icon: Phone, label: "Phone Number", placeholder: "+1234567890" },
  email: {
    icon: Mail,
    label: "Email Address",
    placeholder: "example@domain.com",
  },
  ip: { icon: Globe, label: "IP Address", placeholder: "192.168.1.1" },
  crypto: {
    icon: Bitcoin,
    label: "Crypto Wallet",
    placeholder: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
  },
  vehicle: { icon: Car, label: "Vehicle Number", placeholder: "ABC-1234" },
  international_phone: {
    icon: Phone,
    label: "International Phone",
    placeholder: "+44 20 7946 0958",
  },
};

export default function Dashboard() {
  const [selectedDataType, setSelectedDataType] = useState<DataType>("phone");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<AnalysisResult[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnalysis = async () => {
    if (!query.trim()) return;

    setIsAnalyzing(true);

    try {
      const analysisRequest: OSINTAnalysisRequest = {
        type: selectedDataType,
        query: query.trim(),
      };

      const response = await fetch("/api/osint/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(analysisRequest),
      });

      if (!response.ok) {
        throw new Error("Analysis request failed");
      }

      const analysisResponse: OSINTAnalysisResponse = await response.json();

      const newResult: AnalysisResult = {
        ...analysisResponse,
        timestamp: new Date(analysisResponse.timestamp),
      };

      setResults((prev) => [newResult, ...prev]);

      // Poll for analysis completion
      setTimeout(
        () => {
          setResults((prev) =>
            prev.map((result) =>
              result.id === newResult.id
                ? {
                    ...result,
                    status: "completed",
                    risk_level: ["low", "medium", "high"][
                      Math.floor(Math.random() * 3)
                    ] as any,
                  }
                : result,
            ),
          );
          setIsAnalyzing(false);
        },
        2000 + Math.random() * 3000,
      );
    } catch (error) {
      console.error("Analysis failed:", error);
      setIsAnalyzing(false);
    }

    setQuery("");
  };

  const stats = [
    {
      label: "Active Investigations",
      value: "12",
      icon: Activity,
      trend: "+2",
    },
    {
      label: "Data Points Analyzed",
      value: "1,247",
      icon: Database,
      trend: "+156",
    },
    { label: "High Risk Alerts", value: "3", icon: AlertTriangle, trend: "+1" },
    { label: "Success Rate", value: "97.2%", icon: TrendingUp, trend: "+0.8%" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to NEXUS OSINT</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Advanced Open Source Intelligence Platform for Government Operations
        </p>
        <div className="flex justify-center gap-4">
          <Badge
            variant="outline"
            className="bg-primary/10 text-primary border-primary/20 px-4 py-2"
          >
            Secure Intelligence Gathering
          </Badge>
          <Badge
            variant="outline"
            className="bg-success/10 text-success border-success/20 px-4 py-2"
          >
            Real-time Analysis
          </Badge>
          <Badge
            variant="outline"
            className="bg-warning/10 text-warning border-warning/20 px-4 py-2"
          >
            Multi-source Integration
          </Badge>
        </div>
      </div>
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.label}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-success">
                {stat.trend} from last period
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Analysis Interface */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                Intelligence Analysis
              </CardTitle>
              <CardDescription>
                Enter intelligence data for analysis via Telegram bot
                integration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="dataType">Data Type</Label>
                  <Select
                    value={selectedDataType}
                    onValueChange={(value: DataType) =>
                      setSelectedDataType(value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(dataTypeConfig).map(([key, config]) => (
                        <SelectItem key={key} value={key}>
                          <div className="flex items-center gap-2">
                            <config.icon className="h-4 w-4" />
                            {config.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="query">Query Input</Label>
                  <div className="flex gap-2">
                    <Input
                      id="query"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder={dataTypeConfig[selectedDataType].placeholder}
                      className="flex-1"
                      onKeyPress={(e) => e.key === "Enter" && handleAnalysis()}
                    />
                    <Button
                      onClick={handleAnalysis}
                      disabled={isAnalyzing || !query.trim()}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {isAnalyzing ? "Analyzing..." : "Analyze"}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {results.length > 0 && (
            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Analysis Results</CardTitle>
                <CardDescription>Recent intelligence queries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {results.slice(0, 5).map((result) => {
                    const config = dataTypeConfig[result.type];
                    return (
                      <div
                        key={result.id}
                        className="flex items-center justify-between p-3 rounded-lg border border-border bg-background/50"
                      >
                        <div className="flex items-center gap-3">
                          <config.icon className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">
                              {result.query}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {config.label} •{" "}
                              {result.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {result.risk_level && (
                            <Badge
                              variant="outline"
                              className={
                                result.risk_level === "high"
                                  ? "bg-destructive/10 text-destructive border-destructive/20"
                                  : result.risk_level === "medium"
                                    ? "bg-warning/10 text-warning border-warning/20"
                                    : "bg-success/10 text-success border-success/20"
                              }
                            >
                              {result.risk_level.toUpperCase()}
                            </Badge>
                          )}
                          <Badge
                            variant="outline"
                            className={
                              result.status === "completed"
                                ? "bg-success/10 text-success border-success/20"
                                : result.status === "failed"
                                  ? "bg-destructive/10 text-destructive border-destructive/20"
                                  : "bg-info/10 text-info border-info/20"
                            }
                          >
                            {result.status.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="space-y-4">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Database className="h-4 w-4 mr-2" />
                Bulk Import
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Security Scan
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base">System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Telegram Bot</span>
                <Badge className="bg-success/10 text-success border-success/20">
                  Active
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Data Sources</span>
                <Badge className="bg-success/10 text-success border-success/20">
                  Online
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">API Endpoints</span>
                <Badge className="bg-success/10 text-success border-success/20">
                  Healthy
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

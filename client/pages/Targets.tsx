import { useState, useEffect } from "react";
import {
  Users,
  User,
  AlertTriangle,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Search,
  Plus,
  Eye,
  Edit,
  FileText,
  Shield,
  Globe,
  Camera,
  Clock,
  TrendingUp,
  Filter,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Target {
  id: string;
  name: string;
  aliases: string[];
  type: "person" | "organization" | "location" | "vehicle" | "device";
  status: "active" | "inactive" | "archived" | "high_priority";
  risk_level: "low" | "medium" | "high" | "critical";
  created_date: Date;
  last_activity: Date;
  location?: string;
  description: string;
  tags: string[];
  contact_info: {
    phones: string[];
    emails: string[];
    addresses: string[];
  };
  intelligence_summary: string;
  related_cases: number;
  profile_image?: string;
  classification: "unclassified" | "confidential" | "secret" | "top_secret";
  source_reliability: number;
}

export default function Targets() {
  const [targets, setTargets] = useState<Target[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [riskFilter, setRiskFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [selectedTarget, setSelectedTarget] = useState<Target | null>(null);

  // Mock data
  useEffect(() => {
    const mockTargets: Target[] = [
      {
        id: "TGT001",
        name: "Viktor Petrov",
        aliases: ["V. Petrov", "Viktor P.", "VikP"],
        type: "person",
        status: "high_priority",
        risk_level: "critical",
        created_date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        last_activity: new Date(Date.now() - 2 * 60 * 60 * 1000),
        location: "Moscow, Russia",
        description:
          "Suspected cybercriminal involved in international financial fraud schemes",
        tags: ["Cybercrime", "Financial Fraud", "International", "Hacker"],
        contact_info: {
          phones: ["+7-495-xxx-xxxx", "+7-921-xxx-xxxx"],
          emails: ["v.petrov@suspicious-domain.com", "viktor.p@gmail.com"],
          addresses: ["Moscow, Tverskaya St. 15, Apt 42"],
        },
        intelligence_summary:
          "High-value target with connections to major cybercriminal organizations. Suspected of orchestrating ransomware attacks against US infrastructure.",
        related_cases: 8,
        classification: "secret",
        source_reliability: 85,
      },
      {
        id: "TGT002",
        name: "Dark Phoenix Organization",
        aliases: ["Phoenix Group", "DP Org", "Dark Phoenix Collective"],
        type: "organization",
        status: "active",
        risk_level: "high",
        created_date: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000),
        last_activity: new Date(Date.now() - 6 * 60 * 60 * 1000),
        location: "Multiple Locations",
        description:
          "Criminal organization specializing in data breaches and corporate espionage",
        tags: ["Organization", "Data Breach", "Corporate Espionage", "APT"],
        contact_info: {
          phones: [],
          emails: ["contact@darkphoenix.onion"],
          addresses: ["Various dark web locations"],
        },
        intelligence_summary:
          "Advanced persistent threat group targeting Fortune 500 companies. Known for sophisticated social engineering attacks.",
        related_cases: 15,
        classification: "confidential",
        source_reliability: 78,
      },
      {
        id: "TGT003",
        name: "Sarah Chen",
        aliases: ["S. Chen", "Sarah C.", "SC"],
        type: "person",
        status: "active",
        risk_level: "medium",
        created_date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
        last_activity: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        location: "San Francisco, CA",
        description:
          "Person of interest in corporate insider trading investigation",
        tags: ["Insider Trading", "Corporate", "Financial Crime"],
        contact_info: {
          phones: ["+1-415-xxx-xxxx"],
          emails: ["s.chen@techcorp.com"],
          addresses: ["123 Market St, San Francisco, CA 94105"],
        },
        intelligence_summary:
          "Tech executive with unusual trading patterns preceding major announcements. Under surveillance for potential insider trading.",
        related_cases: 3,
        classification: "confidential",
        source_reliability: 92,
      },
      {
        id: "TGT004",
        name: "Suspicious Vehicle - BMW X5",
        aliases: ["Black BMW", "License ABC-123"],
        type: "vehicle",
        status: "active",
        risk_level: "medium",
        created_date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        last_activity: new Date(Date.now() - 4 * 60 * 60 * 1000),
        location: "Downtown Metro Area",
        description:
          "Vehicle spotted at multiple crime scenes, license plate ABC-123",
        tags: ["Vehicle Surveillance", "Crime Scene", "Surveillance"],
        contact_info: {
          phones: [],
          emails: [],
          addresses: ["Last seen: Downtown Financial District"],
        },
        intelligence_summary:
          "Black BMW X5 with tinted windows observed at three separate incidents. Vehicle registered to shell company.",
        related_cases: 4,
        classification: "unclassified",
        source_reliability: 65,
      },
    ];
    setTargets(mockTargets);
  }, []);

  const filteredTargets = targets.filter((target) => {
    const matchesSearch =
      target.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      target.aliases.some((alias) =>
        alias.toLowerCase().includes(searchTerm.toLowerCase()),
      ) ||
      target.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesStatus =
      statusFilter === "all" || target.status === statusFilter;
    const matchesRisk =
      riskFilter === "all" || target.risk_level === riskFilter;
    const matchesType = typeFilter === "all" || target.type === typeFilter;
    return matchesSearch && matchesStatus && matchesRisk && matchesType;
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "bg-success/10 text-success border-success/20",
      inactive: "bg-muted/10 text-muted-foreground border-muted/20",
      archived: "bg-muted/10 text-muted-foreground border-muted/20",
      high_priority:
        "bg-destructive/10 text-destructive border-destructive/20 animate-pulse",
    };
    return (
      <Badge
        variant="outline"
        className={variants[status as keyof typeof variants]}
      >
        {status.replace("_", " ").toUpperCase()}
      </Badge>
    );
  };

  const getRiskBadge = (risk: string) => {
    const variants = {
      low: "bg-success/10 text-success border-success/20",
      medium: "bg-warning/10 text-warning border-warning/20",
      high: "bg-destructive/10 text-destructive border-destructive/20",
      critical:
        "bg-destructive/20 text-destructive border-destructive/40 animate-pulse",
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

  const getTypeIcon = (type: string) => {
    const icons = {
      person: User,
      organization: Users,
      location: MapPin,
      vehicle: Globe,
      device: Shield,
    };
    const Icon = icons[type as keyof typeof icons] || User;
    return <Icon className="h-4 w-4" />;
  };

  const criticalTargets = targets.filter(
    (t) => t.risk_level === "critical",
  ).length;
  const activeTargets = targets.filter((t) => t.status === "active").length;
  const totalCases = targets.reduce((sum, t) => sum + t.related_cases, 0);
  const avgReliability =
    targets.reduce((sum, t) => sum + t.source_reliability, 0) / targets.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Target Management</h1>
          <p className="text-muted-foreground">
            Track and monitor persons of interest and intelligence targets
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            Export List
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Target
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Target</DialogTitle>
                <DialogDescription>
                  Create a new intelligence target for monitoring and analysis
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Target creation form would be implemented here with fields for
                  personal information, risk assessment, and classification.
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
              Critical Targets
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {criticalTargets}
            </div>
            <p className="text-xs text-destructive">Immediate attention</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Targets
            </CardTitle>
            <Users className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              {activeTargets}
            </div>
            <p className="text-xs text-muted-foreground">Under surveillance</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Related Cases</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCases}</div>
            <p className="text-xs text-success">+5 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Reliability
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {avgReliability.toFixed(1)}%
            </div>
            <p className="text-xs text-muted-foreground">Source confidence</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-lg">Search & Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="space-y-2">
              <Label htmlFor="search">Search Targets</Label>
              <Input
                id="search"
                placeholder="Name, alias, or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="person">Person</SelectItem>
                  <SelectItem value="organization">Organization</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                  <SelectItem value="vehicle">Vehicle</SelectItem>
                  <SelectItem value="device">Device</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="high_priority">High Priority</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
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
            <div className="flex items-end">
              <Button variant="outline" className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                Advanced
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Targets Table */}
      <Card className="bg-card/50 backdrop-blur">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Intelligence Targets</CardTitle>
              <CardDescription>
                {filteredTargets.length} of {targets.length} targets
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Target</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Cases</TableHead>
                <TableHead>Last Activity</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTargets.map((target) => (
                <TableRow key={target.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={target.profile_image} />
                        <AvatarFallback>
                          {target.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{target.name}</div>
                        <div className="text-xs text-muted-foreground">
                          ID: {target.id}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getTypeIcon(target.type)}
                      <span className="capitalize">{target.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(target.status)}</TableCell>
                  <TableCell>{getRiskBadge(target.risk_level)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm">
                        {target.location || "Unknown"}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono">
                    {target.related_cases}
                  </TableCell>
                  <TableCell className="text-sm">
                    {target.last_activity.toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={() => setSelectedTarget(target)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Target
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText className="h-4 w-4 mr-2" />
                          Generate Report
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Archive Target
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Target Profile Dialog */}
      <Dialog
        open={!!selectedTarget}
        onOpenChange={() => setSelectedTarget(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={selectedTarget?.profile_image} />
                <AvatarFallback>
                  {selectedTarget?.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              {selectedTarget?.name}
              <Badge variant="outline" className="ml-2">
                {selectedTarget?.id}
              </Badge>
            </DialogTitle>
            <DialogDescription>
              Detailed intelligence profile and analysis
            </DialogDescription>
          </DialogHeader>

          {selectedTarget && (
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="intelligence">Intelligence</TabsTrigger>
                <TabsTrigger value="contacts">Contacts</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Basic Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type:</span>
                        <span className="capitalize">
                          {selectedTarget.type}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status:</span>
                        {getStatusBadge(selectedTarget.status)}
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Risk:</span>
                        {getRiskBadge(selectedTarget.risk_level)}
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span>{selectedTarget.location || "Unknown"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Reliability:
                        </span>
                        <span>{selectedTarget.source_reliability}%</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Timeline</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Created:</span>
                        <span>
                          {selectedTarget.created_date.toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Last Activity:
                        </span>
                        <span>
                          {selectedTarget.last_activity.toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Related Cases:
                        </span>
                        <span>{selectedTarget.related_cases}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{selectedTarget.description}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Tags & Aliases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          ALIASES
                        </Label>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedTarget.aliases.map((alias, index) => (
                            <Badge key={index} variant="outline">
                              {alias}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          TAGS
                        </Label>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedTarget.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="intelligence" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Intelligence Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">
                      {selectedTarget.intelligence_summary}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contacts" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Phone Numbers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {selectedTarget.contact_info.phones.map(
                          (phone, index) => (
                            <div
                              key={index}
                              className="font-mono text-sm bg-muted/50 p-2 rounded"
                            >
                              {phone}
                            </div>
                          ),
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email Addresses
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {selectedTarget.contact_info.emails.map(
                          (email, index) => (
                            <div
                              key={index}
                              className="font-mono text-sm bg-muted/50 p-2 rounded break-all"
                            >
                              {email}
                            </div>
                          ),
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Addresses
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {selectedTarget.contact_info.addresses.map(
                          (address, index) => (
                            <div
                              key={index}
                              className="text-sm bg-muted/50 p-2 rounded"
                            >
                              {address}
                            </div>
                          ),
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="activity" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">
                            Last intelligence update
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {selectedTarget.last_activity.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">
                            Report generated
                          </div>
                          <div className="text-xs text-muted-foreground">
                            2 hours ago
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <AlertTriangle className="h-4 w-4 text-warning" />
                        <div>
                          <div className="text-sm font-medium">
                            Risk level updated
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Yesterday
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

import { useState, useEffect } from "react";
import {
  FileText,
  Download,
  Calendar,
  Clock,
  Eye,
  Share,
  Filter,
  Plus,
  Search,
  BarChart3,
  PieChart,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Users,
  Shield,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

interface Report {
  id: string;
  title: string;
  type:
    | "intelligence_summary"
    | "threat_assessment"
    | "target_profile"
    | "operational_report"
    | "trend_analysis"
    | "incident_report";
  status: "draft" | "pending_review" | "approved" | "classified" | "archived";
  classification: "unclassified" | "confidential" | "secret" | "top_secret";
  created_date: Date;
  last_modified: Date;
  author: string;
  department: string;
  file_size: string;
  pages: number;
  tags: string[];
  summary: string;
  priority: "low" | "medium" | "high" | "critical";
  related_targets: string[];
  distribution_list: string[];
}

const reportTypeIcons = {
  intelligence_summary: BarChart3,
  threat_assessment: AlertTriangle,
  target_profile: Users,
  operational_report: Shield,
  trend_analysis: TrendingUp,
  incident_report: FileText,
};

export default function Reports() {
  const [reports, setReports] = useState<Report[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [classificationFilter, setClassificationFilter] =
    useState<string>("all");
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  // Mock data
  useEffect(() => {
    const mockReports: Report[] = [
      {
        id: "RPT001",
        title: "Cybersecurity Threat Assessment Q4 2024",
        type: "threat_assessment",
        status: "approved",
        classification: "secret",
        created_date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        last_modified: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        author: "Agent Sarah Mitchell",
        department: "Cybersecurity Division",
        file_size: "2.4 MB",
        pages: 47,
        tags: ["Cybersecurity", "Threat Assessment", "Q4 2024", "APT"],
        summary:
          "Comprehensive analysis of emerging cybersecurity threats and attack vectors observed in Q4 2024, including APT group activities and ransomware campaigns.",
        priority: "high",
        related_targets: ["TGT001", "TGT002"],
        distribution_list: ["DOD", "FBI", "NSA", "DHS"],
      },
      {
        id: "RPT002",
        title: "Target Profile: Viktor Petrov - Financial Crimes",
        type: "target_profile",
        status: "classified",
        classification: "top_secret",
        created_date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
        last_modified: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        author: "Agent Marcus Johnson",
        department: "Financial Crimes Unit",
        file_size: "1.8 MB",
        pages: 23,
        tags: ["Target Profile", "Financial Crimes", "International", "OSINT"],
        summary:
          "Detailed intelligence profile on Viktor Petrov, suspected leader of international cybercriminal organization specializing in financial fraud.",
        priority: "critical",
        related_targets: ["TGT001"],
        distribution_list: ["FBI", "Interpol", "FinCEN"],
      },
      {
        id: "RPT003",
        title: "Social Media Intelligence Trends - December 2024",
        type: "trend_analysis",
        status: "pending_review",
        classification: "confidential",
        created_date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        last_modified: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        author: "Dr. Emily Chen",
        department: "Intelligence Analysis",
        file_size: "3.1 MB",
        pages: 34,
        tags: ["Social Media", "Trends", "OSINT", "Analytics"],
        summary:
          "Analysis of social media intelligence patterns and emerging trends in online threat communications and coordination activities.",
        priority: "medium",
        related_targets: ["TGT002", "TGT003"],
        distribution_list: ["CIA", "FBI", "DHS"],
      },
      {
        id: "RPT004",
        title: "Operational Summary: Dark Phoenix Investigation",
        type: "operational_report",
        status: "approved",
        classification: "secret",
        created_date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
        last_modified: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        author: "Special Agent Robert Taylor",
        department: "Organized Crime Task Force",
        file_size: "4.2 MB",
        pages: 67,
        tags: ["Operation", "Dark Phoenix", "Organized Crime", "Investigation"],
        summary:
          "Comprehensive operational report on the Dark Phoenix criminal organization investigation, including methodology, findings, and recommendations.",
        priority: "high",
        related_targets: ["TGT002"],
        distribution_list: ["FBI", "DEA", "Interpol"],
      },
      {
        id: "RPT005",
        title: "Incident Report: Data Breach at TechCorp",
        type: "incident_report",
        status: "draft",
        classification: "confidential",
        created_date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        last_modified: new Date(Date.now() - 6 * 60 * 60 * 1000),
        author: "Agent Lisa Wong",
        department: "Cyber Incident Response",
        file_size: "0.9 MB",
        pages: 12,
        tags: ["Incident", "Data Breach", "TechCorp", "Cybersecurity"],
        summary:
          "Initial incident report documenting the data breach at TechCorp, including timeline, impact assessment, and preliminary findings.",
        priority: "medium",
        related_targets: ["TGT003"],
        distribution_list: ["FBI", "DHS"],
      },
    ];
    setReports(mockReports);
  }, []);

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesType = typeFilter === "all" || report.type === typeFilter;
    const matchesStatus =
      statusFilter === "all" || report.status === statusFilter;
    const matchesClassification =
      classificationFilter === "all" ||
      report.classification === classificationFilter;
    return (
      matchesSearch && matchesType && matchesStatus && matchesClassification
    );
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      draft: "bg-muted/10 text-muted-foreground border-muted/20",
      pending_review: "bg-warning/10 text-warning border-warning/20",
      approved: "bg-success/10 text-success border-success/20",
      classified: "bg-destructive/10 text-destructive border-destructive/20",
      archived: "bg-muted/10 text-muted-foreground border-muted/20",
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
        {classification.replace("_", " ").toUpperCase()}
      </Badge>
    );
  };

  const getPriorityBadge = (priority: string) => {
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
        className={variants[priority as keyof typeof variants]}
      >
        {priority.toUpperCase()}
      </Badge>
    );
  };

  const totalReports = reports.length;
  const approvedReports = reports.filter((r) => r.status === "approved").length;
  const pendingReports = reports.filter(
    (r) => r.status === "pending_review",
  ).length;
  const classifiedReports = reports.filter(
    (r) => r.status === "classified",
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Intelligence Reports</h1>
          <p className="text-muted-foreground">
            Generate, manage, and distribute intelligence reports and analysis
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Archive
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Report
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Intelligence Report</DialogTitle>
                <DialogDescription>
                  Generate a new intelligence report from analysis data
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="report-type">Report Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="intelligence_summary">
                          Intelligence Summary
                        </SelectItem>
                        <SelectItem value="threat_assessment">
                          Threat Assessment
                        </SelectItem>
                        <SelectItem value="target_profile">
                          Target Profile
                        </SelectItem>
                        <SelectItem value="operational_report">
                          Operational Report
                        </SelectItem>
                        <SelectItem value="trend_analysis">
                          Trend Analysis
                        </SelectItem>
                        <SelectItem value="incident_report">
                          Incident Report
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="classification">Classification</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select classification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="unclassified">
                          Unclassified
                        </SelectItem>
                        <SelectItem value="confidential">
                          Confidential
                        </SelectItem>
                        <SelectItem value="secret">Secret</SelectItem>
                        <SelectItem value="top_secret">Top Secret</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Report Title</Label>
                  <Input id="title" placeholder="Enter report title..." />
                </div>
                <p className="text-sm text-muted-foreground">
                  Report generation interface would be implemented here with
                  templates, data source selection, and automated analysis
                  integration.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalReports}</div>
            <p className="text-xs text-success">+3 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Approved Reports
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              {approvedReports}
            </div>
            <p className="text-xs text-muted-foreground">
              Ready for distribution
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Review
            </CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">
              {pendingReports}
            </div>
            <p className="text-xs text-warning">Awaiting approval</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Classified Reports
            </CardTitle>
            <Shield className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {classifiedReports}
            </div>
            <p className="text-xs text-destructive">Restricted access</p>
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
              <Label htmlFor="search">Search Reports</Label>
              <Input
                id="search"
                placeholder="Title, author, or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Report Type</Label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="intelligence_summary">
                    Intelligence Summary
                  </SelectItem>
                  <SelectItem value="threat_assessment">
                    Threat Assessment
                  </SelectItem>
                  <SelectItem value="target_profile">Target Profile</SelectItem>
                  <SelectItem value="operational_report">
                    Operational Report
                  </SelectItem>
                  <SelectItem value="trend_analysis">Trend Analysis</SelectItem>
                  <SelectItem value="incident_report">
                    Incident Report
                  </SelectItem>
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
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="pending_review">Pending Review</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="classified">Classified</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="classification">Classification</Label>
              <Select
                value={classificationFilter}
                onValueChange={setClassificationFilter}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Classifications</SelectItem>
                  <SelectItem value="unclassified">Unclassified</SelectItem>
                  <SelectItem value="confidential">Confidential</SelectItem>
                  <SelectItem value="secret">Secret</SelectItem>
                  <SelectItem value="top_secret">Top Secret</SelectItem>
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

      {/* Reports Table */}
      <Card className="bg-card/50 backdrop-blur">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Intelligence Reports</CardTitle>
              <CardDescription>
                {filteredReports.length} of {reports.length} reports
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Classification</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Modified</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.map((report) => {
                const TypeIcon = reportTypeIcons[report.type];
                return (
                  <TableRow key={report.id}>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{report.title}</div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{report.pages} pages</span>
                          <span>•</span>
                          <span>{report.file_size}</span>
                          <span>•</span>
                          <span>ID: {report.id}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <TypeIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="capitalize">
                          {report.type.replace("_", " ")}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(report.status)}</TableCell>
                    <TableCell>
                      {getClassificationBadge(report.classification)}
                    </TableCell>
                    <TableCell>{getPriorityBadge(report.priority)}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-sm">
                          {report.author}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {report.department}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {report.last_modified.toLocaleDateString()}
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
                            onClick={() => setSelectedReport(report)}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Report
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share className="h-4 w-4 mr-2" />
                            Share Report
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            Archive Report
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

      {/* Report Details Dialog */}
      <Dialog
        open={!!selectedReport}
        onOpenChange={() => setSelectedReport(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedReport && (
                <>
                  {(() => {
                    const TypeIcon = reportTypeIcons[selectedReport.type];
                    return <TypeIcon className="h-5 w-5" />;
                  })()}
                  {selectedReport.title}
                </>
              )}
            </DialogTitle>
            <DialogDescription>
              Detailed report information and metadata
            </DialogDescription>
          </DialogHeader>

          {selectedReport && (
            <div className="space-y-6">
              {/* Report Header */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Report Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ID:</span>
                      <span className="font-mono">{selectedReport.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type:</span>
                      <span className="capitalize">
                        {selectedReport.type.replace("_", " ")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      {getStatusBadge(selectedReport.status)}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Classification:
                      </span>
                      {getClassificationBadge(selectedReport.classification)}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Priority:</span>
                      {getPriorityBadge(selectedReport.priority)}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pages:</span>
                      <span>{selectedReport.pages}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">File Size:</span>
                      <span>{selectedReport.file_size}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      Authorship & Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Author:</span>
                      <span>{selectedReport.author}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Department:</span>
                      <span>{selectedReport.department}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Created:</span>
                      <span>
                        {selectedReport.created_date.toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Modified:</span>
                      <span>
                        {selectedReport.last_modified.toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Executive Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">
                    {selectedReport.summary}
                  </p>
                </CardContent>
              </Card>

              {/* Tags and Related Info */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {selectedReport.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Related Targets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedReport.related_targets.map((targetId, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-2 border rounded"
                        >
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="font-mono text-sm">{targetId}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Distribution List */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Distribution List</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {selectedReport.distribution_list.map((agency, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-success/10 text-success border-success/20"
                      >
                        {agency}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t">
                <Button className="flex-1">
                  <Eye className="h-4 w-4 mr-2" />
                  Read Full Report
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

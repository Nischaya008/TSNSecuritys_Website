import {
  Shield,
  Eye,
  Lock,
  Network,
  Zap,
  Users,
  Database,
  Globe,
  Target,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Award,
  Activity,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TSNServices() {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive cybersecurity services including VAPT designed for government agencies and critical infrastructure protection.",
      pricing: "Contact for Quote",
      features: [
        "24/7 Security Operations Center",
        "VAPT (Vulnerability Assessment & Penetration Testing)",
        "Advanced Threat Detection",
        "Incident Response & Recovery",
        "Security Architecture Design",
        "Compliance & Risk Management",
      ],
      benefits: [
        "99.9% Uptime Guarantee",
        "Mean Response Time: < 15 minutes",
        "Government-grade Security",
        "Top Secret Facility Clearance",
      ],
    },
    {
      icon: Eye,
      title: "OSINT & Intelligence Services",
      description:
        "MRM Intelligence platform running on Telegram Bot (Live), WhatsApp Bot (Launching), and Web Platform (Launching).",
      pricing: "Starting from $50,000/month",
      features: [
        "Telegram Bot - Live & Operational",
        "WhatsApp Bot - Launching Soon",
        "Web Platform - Launching Soon",
        "Multi-Platform Data Collection",
        "Real-time Intelligence Analysis",
        "Threat Actor Profiling",
      ],
      benefits: [
        "3 Platform Integration",
        "95% Accuracy Rate",
        "Real-time Processing",
        "Custom Intelligence Reports",
      ],
    },
    {
      icon: Lock,
      title: "Government Solutions",
      description:
        "Specialized security and intelligence solutions tailored for government agencies and law enforcement.",
      pricing: "Enterprise Pricing",
      features: [
        "Classified System Integration",
        "Custom Tool Development",
        "Personnel Security Clearances",
        "Compliance & Audit Support",
        "Training & Certification",
        "24/7 Government Support",
      ],
      benefits: [
        "FedRAMP Authorized",
        "FISMA Compliant",
        "NIST Framework Aligned",
        "Dedicated Government Team",
      ],
    },
    {
      icon: Network,
      title: "Digital Forensics",
      description:
        "Expert digital forensics and cyber investigation services for legal proceedings and security incidents.",
      pricing: "Contact for Quote",
      features: [
        "Evidence Collection & Preservation",
        "Digital Device Analysis",
        "Network Traffic Analysis",
        "Malware Reverse Engineering",
        "Expert Witness Testimony",
        "Chain of Custody Management",
      ],
      benefits: [
        "Court-Admissible Evidence",
        "Certified Forensic Experts",
        "ISO 27037 Compliant",
        "Rapid Response Available",
      ],
    },
  ];

  const addOnServices = [
    {
      name: "Security Training",
      description: "Cybersecurity awareness and technical training programs",
      price: "$5,000/session",
    },
    {
      name: "Penetration Testing",
      description:
        "Comprehensive security testing and vulnerability assessment",
      price: "$25,000/engagement",
    },
    {
      name: "Compliance Audit",
      description: "FISMA, FedRAMP, and NIST compliance auditing services",
      price: "$15,000/audit",
    },
    {
      name: "Emergency Response",
      description: "24/7 emergency cybersecurity incident response",
      price: "$2,000/hour",
    },
  ];

  const industryExpertise = [
    {
      sector: "Defense & Military",
      description: "Specialized solutions for DoD and military operations",
      experience: "15+ years",
      clients: "50+ agencies",
    },
    {
      sector: "Intelligence Agencies",
      description:
        "Custom OSINT and analysis tools for intelligence operations",
      experience: "10+ years",
      clients: "25+ agencies",
    },
    {
      sector: "Law Enforcement",
      description: "Digital forensics and investigation support services",
      experience: "12+ years",
      clients: "200+ departments",
    },
    {
      sector: "Critical Infrastructure",
      description: "Protection of power grids, transportation, and utilities",
      experience: "8+ years",
      clients: "100+ facilities",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold">TSN Security</h1>
                <p className="text-xs text-muted-foreground">
                  Cybersecurity & Intelligence
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="/services"
                className="text-primary border-b-2 border-primary"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>

            <Button size="sm">Get Quote</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <Badge
              variant="outline"
              className="bg-primary/10 text-primary border-primary/20 mb-6"
            >
              🔧 Our Services
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Comprehensive Security
              <br />
              <span className="text-primary">& Intelligence Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From cybersecurity infrastructure to advanced OSINT capabilities,
              we provide the complete spectrum of security services for
              government agencies and critical organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur hover:bg-card/70 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <service.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                      <div>
                        <CardTitle className="text-2xl">
                          {service.title}
                        </CardTitle>
                        <Badge
                          variant="outline"
                          className="bg-success/10 text-success border-success/20 mt-2"
                        >
                          {service.pricing}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">
                      Service Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="justify-center text-xs"
                        >
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Tabs */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Detailed Service Information
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our comprehensive service offerings and capabilities
            </p>
          </div>

          <Tabs defaultValue="cybersecurity" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="cybersecurity">Cybersecurity</TabsTrigger>
              <TabsTrigger value="osint">OSINT</TabsTrigger>
              <TabsTrigger value="government">Government</TabsTrigger>
              <TabsTrigger value="forensics">Forensics</TabsTrigger>
            </TabsList>

            <TabsContent value="cybersecurity" className="space-y-8">
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Shield className="h-6 w-6 text-primary" />
                    Cybersecurity Solutions
                  </CardTitle>
                  <CardDescription>
                    Enterprise-grade cybersecurity infrastructure and services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">
                        VAPT Services
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Vulnerability Assessment</li>
                        <li>• Penetration Testing</li>
                        <li>• Network Security Testing</li>
                        <li>• Web Application Testing</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">
                        Threat Detection
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• AI-powered threat analysis</li>
                        <li>• Real-time monitoring</li>
                        <li>• Behavioral analytics</li>
                        <li>• Zero-day protection</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">Compliance</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• FISMA compliance</li>
                        <li>• NIST framework</li>
                        <li>• FedRAMP authorization</li>
                        <li>• Continuous monitoring</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="osint" className="space-y-8">
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Eye className="h-6 w-6 text-primary" />
                    MRM Intelligence Platform
                  </CardTitle>
                  <CardDescription>
                    Multi-platform OSINT solution running on Telegram, WhatsApp,
                    and Web
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">
                        Platform Status
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Telegram Bot - Live ✅</li>
                        <li>• WhatsApp Bot - Launching 🚀</li>
                        <li>• Web Platform - Launching 🚀</li>
                        <li>• Multi-channel access</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">
                        Analysis & Processing
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Pattern recognition</li>
                        <li>• Relationship mapping</li>
                        <li>• Threat assessment</li>
                        <li>• Predictive analytics</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">Features</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Real-time intelligence</li>
                        <li>• Multi-source data</li>
                        <li>• Secure communications</li>
                        <li>• Government compliance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="government" className="space-y-8">
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Lock className="h-6 w-6 text-primary" />
                    Government Solutions
                  </CardTitle>
                  <CardDescription>
                    Specialized services for government agencies and defense
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">
                        Classified Systems
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Top Secret clearance</li>
                        <li>• SCIF-ready solutions</li>
                        <li>• Air-gapped networks</li>
                        <li>• Secure communications</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">
                        Custom Development
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Bespoke security tools</li>
                        <li>• Agency-specific features</li>
                        <li>• Legacy system integration</li>
                        <li>• Scalable architecture</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">
                        Support & Training
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 24/7 government support</li>
                        <li>• Personnel training</li>
                        <li>• Security clearances</li>
                        <li>• Ongoing maintenance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="forensics" className="space-y-8">
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Network className="h-6 w-6 text-primary" />
                    Digital Forensics
                  </CardTitle>
                  <CardDescription>
                    Expert digital investigation and forensic analysis services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">
                        Evidence Collection
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Digital device imaging</li>
                        <li>• Network traffic capture</li>
                        <li>• Memory acquisition</li>
                        <li>• Chain of custody</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">
                        Analysis & Recovery
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Deleted file recovery</li>
                        <li>• Malware analysis</li>
                        <li>• Timeline reconstruction</li>
                        <li>• Artifact extraction</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">
                        Legal Support
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Expert testimony</li>
                        <li>• Court reports</li>
                        <li>• Case documentation</li>
                        <li>• Legal consultation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Specialized knowledge across critical sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryExpertise.map((industry, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur text-center"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{industry.sector}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-muted-foreground">Experience</div>
                      <div className="font-semibold text-primary">
                        {industry.experience}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Clients</div>
                      <div className="font-semibold text-success">
                        {industry.clients}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Supplementary services to enhance your security posture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((addon, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <Badge
                    variant="outline"
                    className="bg-warning/10 text-warning border-warning/20 w-fit"
                  >
                    {addon.price}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {addon.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    Add to Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-primary/10 border-primary/20 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-3xl">Ready to Get Started?</CardTitle>
              <CardDescription className="text-lg">
                Contact our team to discuss your specific security requirements
                and get a customized solution proposal.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Shield className="mr-2 h-4 w-4" />
                  Request Quote
                </Button>
                <Button variant="outline" size="lg">
                  <Clock className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                <p>
                  🔒 All consultations are confidential and conducted by
                  security-cleared professionals
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-semibold">TSN Security</span>
            </div>
            <div className="flex items-center gap-4">
              <Badge
                variant="outline"
                className="bg-success/10 text-success border-success/20"
              >
                🔒 Secure Site
              </Badge>
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary border-primary/20"
              >
                Government Trusted
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

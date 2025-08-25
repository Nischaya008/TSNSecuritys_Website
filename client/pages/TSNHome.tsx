import { useState, useEffect } from "react";
import {
  Shield,
  Lock,
  Eye,
  Zap,
  Globe,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Database,
  Network,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertTriangle,
  MessageSquare,
  MonitorSpeaker,
  Bot,
  Smartphone,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function TSNHome() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description:
        "Advanced threat detection, incident response, VAPT, and security infrastructure protection for critical systems.",
      features: [
        "24/7 SOC Monitoring",
        "VAPT Services",
        "Incident Response",
        "Threat Intelligence",
        "Security Architecture",
      ],
    },
    {
      icon: Eye,
      title: "OSINT & Intelligence",
      description:
        "MRM Intelligence platform running on Web, WhatsApp Bot, and Telegram Bot for comprehensive intelligence gathering.",
      features: [
        "Multi-Platform OSINT",
        "Real-time Analysis",
        "Telegram Bot (Live)",
        "WhatsApp Bot (Launching)",
        "Web Platform (Launching)",
      ],
    },
    {
      icon: Lock,
      title: "Government Solutions",
      description:
        "Specialized security and intelligence solutions designed for government agencies and law enforcement.",
      features: [
        "Classified Systems",
        "Compliance Ready",
        "Custom OSINT Tools",
        "Government Integration",
      ],
    },
    {
      icon: Network,
      title: "Digital Forensics",
      description:
        "Expert digital forensics and cyber investigation services for legal and security purposes.",
      features: [
        "Evidence Recovery",
        "Chain of Custody",
        "Expert Testimony",
        "Malware Analysis",
      ],
    },
  ];

  const stats = [
    { value: "500+", label: "Government Clients", icon: Users },
    { value: "99.9%", label: "Uptime Guarantee", icon: Zap },
    { value: "24/7", label: "Security Monitoring", icon: Globe },
    { value: "10+", label: "Years Experience", icon: Award },
  ];

  const testimonials = [
    {
      name: "Director, National Security Agency",
      role: "Government Official",
      content:
        "TSN Security's MRM Intelligence platform has revolutionized our OSINT capabilities across multiple channels.",
      rating: 5,
    },
    {
      name: "Chief Information Officer",
      role: "Defense Department",
      content:
        "Outstanding cybersecurity solutions with VAPT services. Their multi-platform approach is exactly what we needed.",
      rating: 5,
    },
    {
      name: "Intelligence Analyst",
      role: "Federal Law Enforcement",
      content:
        "The MRM Intelligence Telegram bot is incredible. Looking forward to the WhatsApp and Web platforms.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Professional Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-card/90 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="relative card-3d hover-lift">
                {/* Custom Shield with Integrated Fingerprint Pattern */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-primary hover:scale-110 transition-transform duration-500"
                >
                  {/* Shield outline */}
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    fill="currentColor"
                    fillOpacity="0.1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  {/* Fingerprint ridges inside shield */}
                  <g
                    stroke="currentColor"
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.8"
                  >
                    {/* Center fingerprint whorl */}
                    <ellipse cx="12" cy="11" rx="1.5" ry="1" />
                    <ellipse cx="12" cy="11" rx="2.5" ry="1.8" />
                    <ellipse cx="12" cy="11" rx="3.5" ry="2.6" />
                    <ellipse cx="12" cy="11.5" rx="4.2" ry="3.2" />

                    {/* Side ridges */}
                    <path d="M8 9.5c0.5-0.8 1.2-1.5 2-2" />
                    <path d="M8.2 11c0.3-1 0.8-1.8 1.5-2.5" />
                    <path d="M8.5 12.5c0.2-1.2 0.6-2.2 1.2-3" />
                    <path d="M9 14c0.1-1.3 0.4-2.5 0.9-3.5" />

                    <path d="M16 9.5c-0.5-0.8-1.2-1.5-2-2" />
                    <path d="M15.8 11c-0.3-1-0.8-1.8-1.5-2.5" />
                    <path d="M15.5 12.5c-0.2-1.2-0.6-2.2-1.2-3" />
                    <path d="M15 14c-0.1-1.3-0.4-2.5-0.9-3.5" />

                    {/* Bottom ridges */}
                    <path d="M10 15.5c0.6-0.3 1.2-0.7 1.8-1.2" />
                    <path d="M14 15.5c-0.6-0.3-1.2-0.7-1.8-1.2" />
                    <path d="M11 17c0.3-0.4 0.6-0.8 0.9-1.3" />
                    <path d="M13 17c-0.3-0.4-0.6-0.8-0.9-1.3" />
                  </g>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-3d">TSN Security</h1>
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
                href="/services"
                className="text-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="/about"
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-success/10 text-success border-success/20 hidden md:flex"
              >
                Secure Connection
              </Badge>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Professional Hero Section with 3D Effects */}
      <section
        id="home"
        className="relative pt-20 pb-16 overflow-hidden perspective-1000"
      >
        {/* Enhanced 3D Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card/30 gradient-bg animate-gradient" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-spin-slow" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-warning/5 rounded-full blur-2xl animate-tilt" />

          {/* 3D Floating Particles */}
          <div
            className="particle w-2 h-2 top-20 left-20 animate-float"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="particle w-3 h-3 top-40 right-32 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="particle w-1 h-1 bottom-40 left-1/4 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="particle w-2 h-2 top-60 right-20 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="particle w-1 h-1 bottom-60 right-1/3 animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            {/* Professional Badge */}
            <div className="flex justify-center mb-8">
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary border-primary/20 px-6 py-3 text-sm font-semibold
                           shadow-lg backdrop-blur-md transform hover:scale-105 transition-all duration-300"
              >
                <span className="mr-2">🏛️</span>
                Trusted by Government Agencies
              </Badge>
            </div>

            {/* Professional Title */}
            <div className="relative mb-8">
              <h1
                className="text-6xl md:text-7xl font-bold mb-6 relative z-10
                           bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent
                           transform hover:scale-105 transition-all duration-500"
              >
                <span className="block">Securing Digital</span>
                <span className="block text-foreground mt-2">Frontiers</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
              TSN Security delivers cutting-edge cybersecurity, intelligence,
              and{" "}
              <span className="text-accent font-semibold">
                investigation solutions
              </span>{" "}
              for government agencies, police departments, enterprises, and
              critical infrastructure. Our{" "}
              <span className="text-primary font-semibold">
                MRM Intelligence platform
              </span>{" "}
              operates across multiple channels for comprehensive OSINT and
              investigation operations.
            </p>

            {/* Enhanced 3D Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90
                           shadow-lg hover:shadow-2xl btn-3d glass relative overflow-hidden
                           px-8 py-4 text-lg font-semibold group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Shield className="mr-3 h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Explore Solutions</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/30 hover:border-primary glass relative overflow-hidden
                           shadow-lg hover:shadow-2xl btn-3d group
                           px-8 py-4 text-lg font-semibold hover:bg-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Eye className="mr-3 h-5 w-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">
                  View Investigation Platform
                </span>
              </Button>
            </div>

            {/* Security Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
              <div
                className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-4
                            transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-warning text-2xl mb-2">🔒</div>
                <div className="text-sm font-semibold">Security Clearance</div>
                <div className="text-xs text-muted-foreground">TOP SECRET</div>
              </div>

              <div
                className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-4
                            transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-success text-2xl mb-2">🛡️</div>
                <div className="text-sm font-semibold">SOC 2 Certified</div>
                <div className="text-xs text-muted-foreground">Type II</div>
              </div>

              <div
                className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-4
                            transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-primary text-2xl mb-2">📋</div>
                <div className="text-sm font-semibold">FedRAMP</div>
                <div className="text-xs text-muted-foreground">Authorized</div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Last Security Audit:{" "}
              <span className="text-success font-mono">
                {currentTime.toLocaleDateString()}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Professional Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-card/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div
                  className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-8 text-center
                              shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105
                              relative overflow-hidden"
                >
                  <div className="relative z-10 mb-6">
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl
                                  group-hover:bg-primary/20 transition-all duration-500 shadow-lg"
                    >
                      <stat.icon className="h-8 w-8 text-primary group-hover:scale-125 transition-transform duration-500" />
                    </div>
                  </div>

                  <div className="relative z-10 mb-3">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">
                      {stat.value}
                    </div>
                  </div>

                  <div className="relative z-10 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced MRM Intelligence Platform Section with 3D Design */}
      <section className="py-20 relative overflow-hidden perspective-1000">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background gradient-bg animate-gradient" />

        {/* 3D Floating Elements */}
        <div className="absolute inset-0">
          <div
            className="particle w-3 h-3 top-10 left-10 animate-float"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="particle w-2 h-2 top-32 right-20 animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="particle w-1 h-1 bottom-20 left-1/3 animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6 hover-lift">
              <Badge
                variant="outline"
                className="bg-warning/10 text-warning border-warning/20 px-6 py-3 text-lg font-semibold
                         glass animate-glow btn-3d"
              >
                <span className="mr-2">🚀</span>
                Featured Product
              </Badge>
            </div>

            <h2
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-warning to-accent
                         bg-clip-text text-transparent text-3d card-3d"
            >
              MRM Intelligence
              <span className="block text-4xl md:text-5xl mt-2 text-muted-foreground">
                Platform
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our flagship OSINT platform designed exclusively for government
              agencies and law enforcement. Advanced{" "}
              <span className="text-warning font-semibold">
                multi-platform intelligence gathering
              </span>{" "}
              with cutting-edge features.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Enhanced Platform Details */}
            <div className="transform-3d">
              <Card className="glass card-3d hover-lift border-primary/20 animate-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-3d">
                    <Target className="h-6 w-6 text-primary animate-spin-slow" />
                    MRM Intelligence Platform
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Multi-Platform Advanced OSINT Solution
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Platform Status with 3D Effects */}
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-success/5 card-3d hover-lift group">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="h-5 w-5 text-success group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium">Telegram Bot</span>
                      </div>
                      <Badge className="bg-success/20 text-success hover:bg-success/30 transition-colors duration-300">
                        LIVE ✅
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-warning/5 card-3d hover-lift group">
                      <div className="flex items-center gap-3">
                        <Smartphone className="h-5 w-5 text-warning group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium">WhatsApp Bot</span>
                      </div>
                      <Badge className="bg-warning/20 text-warning hover:bg-warning/30 transition-colors duration-300">
                        Launching Soon 🚀
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-primary/5 card-3d hover-lift group">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium">Web Platform</span>
                      </div>
                      <Badge className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors duration-300">
                        Advanced Features Coming 🚀
                      </Badge>
                    </div>
                  </div>

                  {/* Detailed OSINT Features */}
                  <div>
                    <h4 className="font-semibold mb-4 text-primary text-lg">
                      🔍 Advanced OSINT Features (Telegram & WhatsApp Bots)
                    </h4>
                    <div className="grid gap-3">
                      {[
                        "📱 Advanced OSINT for Phone Numbers & Emails",
                        "🌐 Domain Intelligence & Analysis",
                        "🌍 International Number Intelligence",
                        "🚗 Vehicle Search & Registration Data",
                        "📡 Cell ID Decoder & Location Mapping",
                        "🔍 IP Investigation & Geolocation",
                        "₿ Crypto Investigation & Blockchain Analysis",
                        "🔗 Nodal Lookup & Network Analysis",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-card/40 transition-all duration-300 hover-lift group"
                        >
                          <CheckCircle className="h-4 w-4 text-success group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-info/10 rounded-lg border border-info/20 card-3d">
                    <p className="text-sm text-info font-medium mb-2">
                      🔮 Future Web Platform Features
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Our web platform will feature even more advanced OSINT
                      capabilities with enhanced AI processing, real-time
                      collaboration tools, and enterprise-grade analytics. Stay
                      tuned for the reveal!
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-muted-foreground font-medium">
                        Security Classification
                      </span>
                      <Badge
                        variant="outline"
                        className="bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20 transition-colors duration-300"
                      >
                        TOP SECRET 🔒
                      </Badge>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 btn-3d hover-lift">
                      <Shield className="mr-2 h-4 w-4" />
                      Request Platform Access
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced 3D Feature Cards */}
            <div className="space-y-6">
              <div className="grid gap-6">
                <Card className="glass card-3d hover-lift p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center animate-float">
                      <Database className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-3d">
                        Multi-Source OSINT
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Telegram & WhatsApp bots with 8 core intelligence
                        features
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="glass card-3d hover-lift p-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 bg-success/20 rounded-2xl flex items-center justify-center animate-float"
                      style={{ animationDelay: "1s" }}
                    >
                      <Zap className="h-8 w-8 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-3d">
                        Real-Time Intelligence
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Instant OSINT processing across multiple data sources
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="glass card-3d hover-lift p-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 bg-warning/20 rounded-2xl flex items-center justify-center animate-float"
                      style={{ animationDelay: "2s" }}
                    >
                      <TrendingUp className="h-8 w-8 text-warning" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-3d">
                        Advanced Analytics
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        AI-powered pattern recognition and threat prediction
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="glass card-3d hover-lift p-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center animate-float"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <Network className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-3d">
                        Government Ready
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Classified-grade security with multi-platform deployment
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-card/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent
                         bg-clip-text text-transparent"
            >
              Our Services
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive cybersecurity and intelligence solutions tailored
              for government agencies and enterprise clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card/40 backdrop-blur-lg border border-border/50 rounded-2xl
                         shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105
                         relative overflow-hidden h-full group"
              >
                <CardHeader className="relative z-10 pb-4">
                  <div className="relative mb-6">
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl
                                  group-hover:bg-primary/20 transition-all duration-500 shadow-lg"
                    >
                      <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm group-hover:text-foreground transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent
                             group-hover:text-white border-2 border-primary/20 group-hover:border-primary/40
                             shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Agencies</h2>
            <p className="text-xl text-muted-foreground">
              See what government officials say about our solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur p-6 relative transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-warning fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-foreground mb-4">
                  "{testimonial.content}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-card/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="relative">
              <h2
                className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-accent
                           bg-clip-text text-transparent"
              >
                Get in Touch
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Ready to secure your digital infrastructure? Contact our team of
                <span className="text-primary font-semibold">
                  {" "}
                  certified experts
                </span>{" "}
                for a consultation.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+1 (555) 123-4567",
                    subtitle: "24/7 Emergency Hotline",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "contact@tsnsecurity.com",
                    subtitle: "Secure Encrypted Communication",
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "123 Security Boulevard",
                    subtitle: "Cyber City, DC 20001",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-6 p-6 rounded-2xl bg-card/40 backdrop-blur-md
                             border border-border/50 hover:border-primary/30 transition-all duration-500
                             hover:bg-card/60 transform hover:scale-105"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center
                                    group-hover:bg-primary/20 transition-all duration-500 shadow-lg"
                      >
                        <item.icon className="h-8 w-8 text-primary group-hover:scale-125 transition-transform duration-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </div>
                      <div className="text-foreground font-semibold mb-1">
                        {item.content}
                      </div>
                      <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8">
                <div className="flex flex-wrap gap-4">
                  <Badge
                    variant="outline"
                    className="bg-success/10 text-success border-success/20 px-4 py-2 text-sm
                             hover:bg-success/20 hover:scale-110 transition-all duration-300"
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    24/7 Support
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-destructive/10 text-destructive border-destructive/20 px-4 py-2 text-sm
                             hover:bg-destructive/20 hover:scale-110 transition-all duration-300"
                  >
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Emergency Response
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm
                             hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Secure Communications
                  </Badge>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <Card
                className="bg-card/50 backdrop-blur-lg border border-border/50 shadow-xl
                             rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <CardHeader className="relative z-10 pb-6">
                  <CardTitle
                    className="text-2xl font-bold bg-gradient-to-r from-primary to-accent
                                     bg-clip-text text-transparent"
                  >
                    Request Consultation
                  </CardTitle>
                  <CardDescription className="text-base">
                    Get a personalized security assessment for your organization
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-semibold"
                      >
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-background/50 backdrop-blur-sm border-border/50
                                 focus:border-primary/50 focus:bg-background/70 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-semibold"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-background/50 backdrop-blur-sm border-border/50
                                 focus:border-primary/50 focus:bg-background/70 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@agency.gov"
                      className="bg-background/50 backdrop-blur-sm border-border/50
                               focus:border-primary/50 focus:bg-background/70 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="organization"
                      className="text-sm font-semibold"
                    >
                      Organization
                    </Label>
                    <Input
                      id="organization"
                      placeholder="Department of Defense"
                      className="bg-background/50 backdrop-blur-sm border-border/50
                               focus:border-primary/50 focus:bg-background/70 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your security requirements..."
                      rows={4}
                      className="bg-background/50 backdrop-blur-sm border-border/50
                               focus:border-primary/50 focus:bg-background/70 transition-all duration-300"
                    />
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90
                                   shadow-lg hover:shadow-xl transform hover:scale-105
                                   transition-all duration-300 py-3 text-lg font-semibold"
                  >
                    <Shield className="mr-3 h-5 w-5" />
                    Submit Secure Request
                  </Button>

                  <div className="text-center space-y-2">
                    <p className="text-xs text-muted-foreground">
                      🔒 All communications are encrypted and handled with
                      strict confidentiality
                    </p>
                    <div className="flex justify-center gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs bg-success/10 text-success border-success/20"
                      >
                        256-bit Encryption
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs bg-warning/10 text-warning border-warning/20"
                      >
                        FISMA Compliant
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative card-3d hover-lift">
                  {/* Custom Shield with Integrated Fingerprint Pattern */}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="text-primary hover:scale-110 transition-transform duration-500"
                  >
                    {/* Shield outline */}
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      fill="currentColor"
                      fillOpacity="0.1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    {/* Fingerprint ridges inside shield */}
                    <g
                      stroke="currentColor"
                      strokeWidth="0.5"
                      fill="none"
                      opacity="0.8"
                    >
                      {/* Center fingerprint whorl */}
                      <ellipse cx="12" cy="11" rx="1.5" ry="1" />
                      <ellipse cx="12" cy="11" rx="2.5" ry="1.8" />
                      <ellipse cx="12" cy="11" rx="3.5" ry="2.6" />
                      <ellipse cx="12" cy="11.5" rx="4.2" ry="3.2" />

                      {/* Side ridges */}
                      <path d="M8 9.5c0.5-0.8 1.2-1.5 2-2" />
                      <path d="M8.2 11c0.3-1 0.8-1.8 1.5-2.5" />
                      <path d="M8.5 12.5c0.2-1.2 0.6-2.2 1.2-3" />
                      <path d="M9 14c0.1-1.3 0.4-2.5 0.9-3.5" />

                      <path d="M16 9.5c-0.5-0.8-1.2-1.5-2-2" />
                      <path d="M15.8 11c-0.3-1-0.8-1.8-1.5-2.5" />
                      <path d="M15.5 12.5c-0.2-1.2-0.6-2.2-1.2-3" />
                      <path d="M15 14c-0.1-1.3-0.4-2.5-0.9-3.5" />

                      {/* Bottom ridges */}
                      <path d="M10 15.5c0.6-0.3 1.2-0.7 1.8-1.2" />
                      <path d="M14 15.5c-0.6-0.3-1.2-0.7-1.8-1.2" />
                      <path d="M11 17c0.3-0.4 0.6-0.8 0.9-1.3" />
                      <path d="M13 17c-0.3-0.4-0.6-0.8-0.9-1.3" />
                    </g>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-3d">TSN Security</h3>
                  <p className="text-xs text-muted-foreground">
                    Cybersecurity & Intelligence
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Leading provider of cybersecurity and intelligence solutions for
                government agencies and critical infrastructure.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Cybersecurity Solutions</li>
                <li>VAPT Services</li>
                <li>OSINT & Intelligence</li>
                <li>Government Solutions</li>
                <li>Digital Forensics</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">MRM Intelligence</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Telegram Bot (Live)</li>
                <li>WhatsApp Bot (Soon)</li>
                <li>Web Platform (Soon)</li>
                <li>Multi-Platform OSINT</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Security Clearances</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 TSN Security. All rights reserved. | Security Clearance:
              TOP SECRET | SOC 2 Certified
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
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
                FedRAMP Authorized
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

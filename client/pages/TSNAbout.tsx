import {
  Shield,
  Users,
  Award,
  Globe,
  Target,
  Zap,
  Lock,
  Eye,
  CheckCircle,
  Calendar,
  MapPin,
  Star,
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

export default function TSNAbout() {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      specialization: "Cybersecurity Strategy",
      experience: "15+ years",
      clearance: "Top Secret",
      image: "/api/placeholder/150/150",
      bio: "Former NSA cybersecurity director with extensive experience in government intelligence operations and cyber defense strategies.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      specialization: "OSINT & Intelligence",
      experience: "12+ years",
      clearance: "Secret",
      image: "/api/placeholder/150/150",
      bio: "Ex-military intelligence officer specializing in open source intelligence gathering and advanced analytics platforms.",
    },
    {
      name: "Dr. James Thompson",
      role: "Head of Research",
      specialization: "AI & Machine Learning",
      experience: "10+ years",
      clearance: "Top Secret",
      image: "/api/placeholder/150/150",
      bio: "PhD in Computer Science with focus on artificial intelligence applications in cybersecurity and threat detection.",
    },
    {
      name: "Emily Watson",
      role: "Director of Operations",
      specialization: "Government Relations",
      experience: "8+ years",
      clearance: "Secret",
      image: "/api/placeholder/150/150",
      bio: "Former Department of Defense liaison with expertise in government procurement and compliance requirements.",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "TSN Security Founded",
      description:
        "Established with mission to provide advanced cybersecurity solutions for government agencies.",
    },
    {
      year: "2020",
      title: "First Government Contract",
      description:
        "Secured first major contract with Department of Defense for cybersecurity consulting.",
    },
    {
      year: "2021",
      title: "MRM Intelligence Development",
      description:
        "Began development of proprietary OSINT platform for intelligence agencies.",
    },
    {
      year: "2022",
      title: "Security Clearances Obtained",
      description:
        "Achieved Top Secret facility clearance and SOC 2 Type II certification.",
    },
    {
      year: "2023",
      title: "MRM Intelligence Deployed",
      description:
        "Successfully deployed MRM Intelligence platform to multiple government agencies.",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description:
        "Recognized as leading cybersecurity firm in government sector with 500+ agency clients.",
    },
  ];

  const certifications = [
    { name: "SOC 2 Type II", status: "Certified", expiry: "2025" },
    { name: "FedRAMP Authorized", status: "Active", expiry: "2026" },
    { name: "ISO 27001", status: "Certified", expiry: "2025" },
    {
      name: "NIST Cybersecurity Framework",
      status: "Compliant",
      expiry: "2024",
    },
    { name: "CMMC Level 3", status: "Certified", expiry: "2026" },
    { name: "Top Secret Facility", status: "Cleared", expiry: "2027" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "Every solution we develop prioritizes security and compliance with the highest government standards.",
    },
    {
      icon: Eye,
      title: "Intelligence Excellence",
      description:
        "We strive for precision and accuracy in all intelligence gathering and analysis operations.",
    },
    {
      icon: Users,
      title: "Trusted Partnerships",
      description:
        "Building long-term relationships with government agencies based on reliability and results.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Continuously advancing cybersecurity and intelligence capabilities through cutting-edge technology.",
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
                className="text-primary border-b-2 border-primary"
              >
                About
              </a>
              <a
                href="/services"
                className="text-foreground hover:text-primary transition-colors"
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

            <Button size="sm">Dashboard Login</Button>
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
              🏛️ About TSN Security
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Protecting Digital Assets,
              <br />
              <span className="text-primary">Securing the Future</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              TSN Security is a leading cybersecurity and intelligence firm
              specializing in government-grade solutions. Founded by former
              intelligence professionals, we bring unparalleled expertise to
              critical security challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-6 w-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  To provide cutting-edge cybersecurity and intelligence
                  solutions that protect national security interests, critical
                  infrastructure, and sensitive government operations. We are
                  committed to excellence, innovation, and maintaining the
                  highest standards of security and compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Eye className="h-6 w-6 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  To be the most trusted and innovative cybersecurity partner
                  for government agencies worldwide. We envision a future where
                  advanced intelligence capabilities and robust security
                  frameworks work together to create an impenetrable digital
                  defense ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur text-center hover:bg-card/70 transition-all duration-300"
              >
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Industry veterans with extensive government and intelligence
              experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur hover:bg-card/70 transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Specialization:
                      </span>
                      <span>{member.specialization}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Experience:</span>
                      <span>{member.experience}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Clearance:</span>
                      <Badge
                        variant="outline"
                        className="bg-destructive/10 text-destructive border-destructive/20"
                      >
                        {member.clearance}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in TSN Security's growth and development
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <Card
                      className={`bg-card/50 backdrop-blur max-w-md ${
                        index % 2 === 0 ? "ml-auto mr-8" : "mr-auto ml-8"
                      }`}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Badge
                            variant="outline"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {milestone.year}
                          </Badge>
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <CardTitle>{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-muted-foreground">
              Meeting the highest standards for government security requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CheckCircle className="h-6 w-6 text-success" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge
                        variant="outline"
                        className="bg-success/10 text-success border-success/20"
                      >
                        {cert.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Valid Until:
                      </span>
                      <span>{cert.expiry}</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      Compliance maintained at 85%+ above requirements
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-primary/10 border-primary/20 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-3xl">Ready to Work With Us?</CardTitle>
              <CardDescription className="text-lg">
                Join the 500+ government agencies that trust TSN Security with
                their most critical security challenges.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Shield className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg">
                  <Eye className="mr-2 h-4 w-4" />
                  View Case Studies
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-warning" />
                  <span>Top Secret Cleared</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>FedRAMP Authorized</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>SOC 2 Certified</span>
                </div>
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

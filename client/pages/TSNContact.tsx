import { useState } from "react";
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Users,
  CheckCircle,
  Send,
  Award,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TSNContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
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
      subtitle: "Response within 2 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Security Boulevard",
      subtitle: "Cyber City, DC 20001",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "24/7 Operations",
      subtitle: "Emergency response available",
    },
  ];

  const officeLocations = [
    {
      city: "Washington, DC",
      type: "Headquarters",
      address: "123 Security Boulevard, Cyber City, DC 20001",
      clearance: "Top Secret Facility",
    },
    {
      city: "Virginia Beach, VA",
      type: "Operations Center",
      address: "456 Intelligence Ave, Virginia Beach, VA 23451",
      clearance: "Secret Facility",
    },
    {
      city: "San Antonio, TX",
      type: "Regional Office",
      address: "789 Cyber Defense St, San Antonio, TX 78201",
      clearance: "Confidential Facility",
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
                className="text-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-primary border-b-2 border-primary"
              >
                Contact
              </a>
            </div>

            <Button size="sm">Emergency Response</Button>
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
              📞 Contact TSN Security
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Get in Touch with
              <br />
              <span className="text-primary">Security Experts</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to secure your digital infrastructure? Our team of certified
              security professionals is available 24/7 to assist with your
              cybersecurity and intelligence needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur text-center hover:bg-card/70 transition-all duration-300"
              >
                <CardHeader>
                  <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">
                    {info.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Request Security Consultation
                </CardTitle>
                <CardDescription>
                  Fill out this form and our security experts will contact you
                  within 2 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="john.doe@agency.gov"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization *</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) =>
                        handleInputChange("organization", e.target.value)
                      }
                      placeholder="Department of Defense"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Interest</Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) =>
                        handleInputChange("serviceType", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cybersecurity">
                          Cybersecurity Solutions
                        </SelectItem>
                        <SelectItem value="osint">
                          OSINT & Intelligence
                        </SelectItem>
                        <SelectItem value="government">
                          Government Solutions
                        </SelectItem>
                        <SelectItem value="forensics">
                          Digital Forensics
                        </SelectItem>
                        <SelectItem value="emergency">
                          Emergency Response
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Describe your security requirements and any specific concerns..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    size="lg"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Submit Secure Request
                  </Button>

                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      🔒 All communications are encrypted and handled with
                      strict confidentiality
                    </p>
                    <div className="flex justify-center gap-2 mt-2">
                      <Badge
                        variant="outline"
                        className="bg-success/10 text-success border-success/20 text-xs"
                      >
                        256-bit Encryption
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/20 text-xs"
                      >
                        FISMA Compliant
                      </Badge>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-6">
              {/* Emergency Contact */}
              <Card className="bg-destructive/10 border-destructive/20 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">
                    🚨 Emergency Security Incident?
                  </CardTitle>
                  <CardDescription>
                    For immediate security threats or active incidents
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-destructive mb-2">
                      +1 (555) 911-CYBER
                    </p>
                    <p className="text-sm text-muted-foreground">
                      24/7 Emergency Hotline
                    </p>
                  </div>
                  <Button variant="destructive" className="w-full" size="lg">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Emergency Line
                  </Button>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg">Office Locations</CardTitle>
                  <CardDescription>
                    Secure facilities across the United States
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {officeLocations.map((office, index) => (
                    <div
                      key={index}
                      className="p-4 border border-border rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{office.city}</h4>
                        <Badge variant="outline" className="text-xs">
                          {office.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {office.address}
                      </p>
                      <Badge
                        variant="outline"
                        className="bg-warning/10 text-warning border-warning/20 text-xs"
                      >
                        {office.clearance}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Response Time Guarantee */}
              <Card className="bg-success/10 border-success/20 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg text-success">
                    Response Time Guarantee
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">General Inquiries</span>
                    <Badge className="bg-success/20 text-success">
                      2 hours
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Security Assessments</span>
                    <Badge className="bg-success/20 text-success">
                      4 hours
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Emergency Incidents</span>
                    <Badge className="bg-destructive/20 text-destructive">
                      15 minutes
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security Certifications */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Trusted Security Partner
            </h2>
            <p className="text-lg text-muted-foreground">
              Certified and compliant with government security standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-warning mx-auto mb-4" />
                <CardTitle>Security Clearances</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className="bg-destructive/10 text-destructive border-destructive/20"
                  >
                    Top Secret Facility
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-warning/10 text-warning border-warning/20"
                  >
                    Secret Cleared Personnel
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                <CardTitle>Compliance Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className="bg-success/10 text-success border-success/20"
                  >
                    FedRAMP Authorized
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    SOC 2 Type II
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur text-center">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Industry Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className="bg-warning/10 text-warning border-warning/20"
                  >
                    NIST Framework
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-info/10 text-info border-info/20"
                  >
                    ISO 27001
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-bold">TSN Security</h3>
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
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Cybersecurity Solutions</li>
                <li>OSINT & Intelligence</li>
                <li>Government Solutions</li>
                <li>Digital Forensics</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+1 (555) 123-4567</li>
                <li>contact@tsnsecurity.com</li>
                <li>123 Security Boulevard</li>
                <li>Cyber City, DC 20001</li>
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

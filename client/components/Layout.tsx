import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Activity,
  Search,
  Database,
  Users,
  TrendingUp,
  Shield,
  Network,
  Globe,
} from "lucide-react";

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { icon: Activity, label: "Dashboard", path: "/" },
    { icon: Search, label: "Analysis", path: "/analysis" },
    { icon: Database, label: "Data Sources", path: "/data-sources" },
    { icon: Users, label: "Targets", path: "/targets" },
    { icon: Network, label: "Investigation Map", path: "/investigation-map" },
    { icon: TrendingUp, label: "Reports", path: "/reports" },
    { icon: Shield, label: "Security", path: "/security" },
    { icon: Globe, label: "TSN Website", path: "/tsn", external: true },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarProvider>
        <Sidebar className="border-r border-border">
          <SidebarHeader className="border-b border-border p-4">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-lg font-semibold">NEXUS OSINT</h2>
                <p className="text-sm text-muted-foreground">
                  Government Intelligence Platform
                </p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent className="p-2">
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    isActive={location.pathname === item.path}
                    className="w-full justify-start"
                    onClick={() => {
                      if (item.external) {
                        window.location.href = item.path;
                      } else {
                        navigate(item.path);
                      }
                    }}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border bg-card/50 px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1">
              <h1 className="text-xl font-semibold">Intelligence Dashboard</h1>
              <p className="text-xs text-muted-foreground font-mono">
                {currentTime.toLocaleString()} UTC
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-warning/10 text-warning border-warning/20 font-mono text-xs"
              >
                CLASSIFIED
              </Badge>
              <Badge
                variant="outline"
                className="bg-success/10 text-success border-success/20"
              >
                System Online
              </Badge>
            </div>
          </header>

          <main className="flex-1 p-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

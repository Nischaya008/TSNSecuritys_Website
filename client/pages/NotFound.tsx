import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card/50 backdrop-blur">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-2xl">Access Denied</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-4xl font-bold text-destructive">404</div>
          <p className="text-muted-foreground">
            The requested intelligence resource could not be located in our
            secure database.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Route: {location.pathname}
          </p>
          <Button
            onClick={() => (window.location.href = "/")}
            className="w-full bg-primary hover:bg-primary/90"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Command Center
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;

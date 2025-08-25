import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TSNHome from "./pages/TSNHome";
import TSNAbout from "./pages/TSNAbout";
import TSNServices from "./pages/TSNServices";
import TSNContact from "./pages/TSNContact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* TSN Security Website */}
          <Route path="/" element={<TSNHome />} />
          <Route path="/about" element={<TSNAbout />} />
          <Route path="/services" element={<TSNServices />} />
          <Route path="/contact" element={<TSNContact />} />
          {/* Fallback route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

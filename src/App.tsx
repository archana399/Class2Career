import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Existing pages
import Index from "./pages/Index";
import Academic from "./pages/Academic";
import Career from "./pages/Career";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";

// 🔐 Auth & Dashboard pages (NEW)
import Login from "./pages/login";
import Register from "./pages/register";
import ResumeBuilder from "./pages/career/ResumeBuilder";
import CareerPaths from "./pages/career/CareerPaths";
import PlacementGuide from "./pages/career/PlacementGuide";
import InterviewPrep from "./pages/career/InterviewPrep";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          {/* MAIN PAGES */}
          <Route path="/" element={<Index />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/career" element={<Career />} />
          <Route path="/chat" element={<Chat />} />

          {/* AUTH PAGES */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* CAREER SUB PAGES */}
          <Route path="/career/resume" element={<ResumeBuilder />} />
          <Route path="/career/paths" element={<CareerPaths />} />
          <Route path="/career/placements" element={<PlacementGuide />} />
          <Route path="/career/interview" element={<InterviewPrep />} />



          {/* 404 — ALWAYS LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


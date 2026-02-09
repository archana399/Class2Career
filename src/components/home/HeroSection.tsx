import { ArrowRight, Sparkles, BookOpen, Brain, Target, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center animated-bg overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl float-animation" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "-3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Your Journey from Classroom to Career
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Learn. Prepare. <span className="gradient-text">Succeed.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            One unified platform for academic excellence and career preparation.
            Access resources, get AI-powered help, and build your future.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link to="/academic">
              <Button className="btn-hero group">
                Start Learning
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/career">
              <Button className="btn-hero-accent group">
                Explore Careers
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {[
              {
                icon: BookOpen,
                title: "Structured answers",
                desc: "Exam-ready study sheets",
              },
              {
                icon: Brain,
                title: "AI Guidance",
                desc: "Smart study & career help",
              },
              {
                icon: Target,
                title: "Career Ready",
                desc: "Skills & roadmap support",
              },
              {
                icon: ShieldCheck,
                title: "Secure Access",
                desc: "Personal dashboards",
              },
            ].map((stat, idx) => (
              <div key={idx} className="glass-card p-4 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="font-display text-lg font-semibold">
                  {stat.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


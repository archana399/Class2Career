import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white/90">Start Your Journey Today</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your <span className="gradient-text-accent">Future?</span>
          </h2>

          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
            Join thousands of students who are already using Class2Career to excel in academics and land their dream jobs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/academic">
              <Button className="btn-hero group">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/chat">
              <Button variant="outline" className="px-8 py-4 rounded-xl border-white/30 text-white hover:bg-white/10 transition-all">
                Try AI Assistant
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

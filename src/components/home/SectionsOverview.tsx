import { ArrowRight, GraduationCap, Briefcase, BookOpen, FileCheck, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function SectionsOverview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Two Paths, One <span className="gradient-text-accent">Destination</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're focused on academics or preparing for your career, we have dedicated sections for every stage of your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Academic Section Card */}
          <div className="section-card-academic group cursor-pointer hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary-foreground">Academic Section</h3>
                  <p className="text-primary-foreground/80 text-sm">For UG & Diploma Students</p>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                {[
                  { icon: BookOpen, text: "Stream-wise subject resources" },
                  { icon: FileCheck, text: "Notes, assignments & question banks" },
                  { icon: Lightbulb, text: "AI-powered doubt solving" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-primary-foreground/90">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link to="/academic" className="mt-6">
                <Button variant="secondary" className="w-full group-hover:bg-white group-hover:text-primary transition-colors">
                  Explore Academic Resources
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Career Section Card */}
          <div className="section-card-career group cursor-pointer hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-accent-foreground">Career Section</h3>
                  <p className="text-accent-foreground/80 text-sm">For PG & Job Seekers</p>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                {[
                  { icon: FileCheck, text: "Professional resume builder" },
                  { icon: Users, text: "Interview preparation (HR + Tech)" },
                  { icon: Lightbulb, text: "Career paths & skill guidance" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-accent-foreground/90">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link to="/career" className="mt-6">
                <Button variant="secondary" className="w-full group-hover:bg-white group-hover:text-accent transition-colors">
                  Start Career Prep
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

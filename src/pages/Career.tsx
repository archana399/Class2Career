import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileText, Users, Target, Award, ChevronRight, Briefcase, GraduationCap, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const careerTools = [
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create professional resumes with industry-standard templates",
    features: ["ATS-friendly templates", "Multiple formats", "Easy export"],
    color: "from-primary to-primary/60",
    badge: "Popular",
    link: "/career/resume",
  },
  {
    icon: Users,
    title: "Interview Prep",
    description: "Practice HR and technical interview questions",
    features: ["HR questions", "Technical rounds", "Mock interviews"],
    color: "from-accent to-accent/60",
    badge: "Essential",
    link: "/career/interview",
    
  },
  {
    icon: Target,
    title: "Career Paths",
    description: "Explore job roles and required skills",
    features: ["Role descriptions", "Skill mapping", "Growth paths"],
    color: "from-warning to-warning/60",
    badge: "Guidance",
    link: "/career/paths",
  },
  {
    icon: Award,
    title: "Placement Guide",
    description: "Expert advice for placements and higher studies",
    features: ["Company insights", "Eligibility criteria", "Tips & tricks"],
    color: "from-success to-success/60",
    badge: "Pro Tips",
    link: "/career/placements",
  },
];

const jobRoles = [
  { title: "Software Developer", demand: "High", avgSalary: "₹6-15 LPA", skills: ["DSA", "System Design", "Programming"] },
  { title: "Data Analyst", demand: "High", avgSalary: "₹5-12 LPA", skills: ["SQL", "Python", "Visualization"] },
  { title: "Product Manager", demand: "Medium", avgSalary: "₹12-25 LPA", skills: ["Strategy", "Communication", "Analytics"] },
  { title: "UI/UX Designer", demand: "High", avgSalary: "₹4-10 LPA", skills: ["Figma", "Research", "Prototyping"] },
  { title: "DevOps Engineer", demand: "High", avgSalary: "₹8-18 LPA", skills: ["AWS", "Docker", "CI/CD"] },
  { title: "Business Analyst", demand: "Medium", avgSalary: "₹6-14 LPA", skills: ["Requirements", "SQL", "Agile"] },
];

const faqs = [
  { question: "When should I start preparing for placements?", answer: "Start at least 6-8 months before your placement season." },
  { question: "How important is a good resume?", answer: "Extremely important! It's your first impression to recruiters." },
  { question: "Should I focus on DSA or projects?", answer: "Both are important. Balance your preparation accordingly." },
];

const Career = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              💼 Career Preparation
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Launch Your <span className="gradient-text-accent">Career</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Everything you need to transition from academics to professional success. Build your resume, ace interviews, and land your dream job.
            </p>
          </div>

          {/* Career Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {careerTools.map((tool, idx) => (
              <Card key={idx} className="feature-card group cursor-pointer overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={cn("w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center", tool.color)}>
                      <tool.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <Badge variant="outline">{tool.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl mt-4">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {tool.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link to={tool.link}>
                      Explore
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>

                </CardContent>
              </Card>
            ))}
          </div>

          {/* Job Roles Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold mb-2">
                Popular Job <span className="gradient-text">Roles</span>
              </h2>
              <p className="text-muted-foreground">Explore in-demand careers and what it takes to get there</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {jobRoles.map((role, idx) => (
                <Card key={idx} className="glass-card hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <Badge variant={role.demand === "High" ? "default" : "secondary"} className="text-xs">
                        {role.demand} Demand
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{role.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{role.avgSalary}</p>
                    <div className="flex flex-wrap gap-1">
                      {role.skills.map((skill, sidx) => (
                        <Badge key={sidx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="rounded-2xl p-8 mb-16" style={{ background: "var(--gradient-dark)" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: GraduationCap, value: "100%", label: "Best for students" },
                { icon: Briefcase, value: "99%", label: "Get placed in your Dream Company" },
                { icon: TrendingUp, value: "90%", label: "Demanded roles roadmap" },
                { icon: Award, value: "95%", label: "Brings you success" },
              ].map((stat, idx) => (
                <div key={idx} className="text-white">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <div className="font-display text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold mb-2">
                Frequently Asked <span className="gradient-text-accent">Questions</span>
              </h2>
              <p className="text-muted-foreground">Quick answers to common career queries</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="glass-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Career;

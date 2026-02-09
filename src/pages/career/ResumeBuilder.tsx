import { Link } from "react-router-dom";

<Link to="/career/resume">
  <button className="explore-btn">Explore →</button>
</Link>
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  FileText, 
  User, 
  Target, 
  GraduationCap, 
  Code, 
  FolderOpen, 
  Briefcase, 
  Award, 
  Trophy, 
  Heart, 
  AlertTriangle, 
  Star,
  CheckCircle,
  ChevronDown,
  ExternalLink,
  AlertCircle,
  XCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";

const resumeGuide = [
  {
    icon: FileText,
    title: "Resume Basics",
    important: true,
    content: [
      "Length: 1 page (for freshers)",
      "Font: Calibri / Arial / Times New Roman",
      "Font size: 10.5–11.5",
      "Format: PDF",
      "No colors, no designs, no photos"
    ]
  },
  {
    icon: User,
    title: "Header (Top Section)",
    content: [
      "Include: Full Name, Phone Number, Professional Email",
      "LinkedIn | GitHub | Portfolio (if any)",
      "City, State",
      "",
      "Do NOT include: Photo, DOB, Full address, Father's name",
      "",
      "Email example: firstname.lastname@gmail.com"
    ]
  },
  {
    icon: Target,
    title: "Career Objective",
    content: [
      "Write 3–4 lines tailored to the role you're applying for.",
      "",
      "Example:",
      '"Motivated B.Tech student with strong fundamentals in programming and problem-solving, seeking an entry-level role where I can apply my technical skills, learn continuously, and contribute to real-world projects."',
      "",
      'Avoid generic lines like: "I want a job in a reputed company."'
    ]
  },
  {
    icon: GraduationCap,
    title: "Education",
    content: [
      "Write in reverse chronological order.",
      "",
      "Format:",
      "B.Tech in Computer Science (Cybersecurity / AI / Data Science)",
      "College Name, University | 2023–2027 | CGPA: 8.1",
      "",
      "Intermediate / Diploma",
      "College Name | Year | Percentage",
      "",
      "SSC",
      "School Name | Year | Percentage",
      "",
      "If CGPA < 7 → optional to include"
    ]
  },
  {
    icon: Code,
    title: "Skills",
    important: true,
    content: [
      "Group your skills properly:",
      "",
      "Programming: Python, C, Java",
      "Databases: SQL, MySQL",
      "Tools: Git, Linux, VS Code",
      "Core Concepts: DSA, OOP, DBMS, Networking",
      "",
      'Do NOT write: MS Word, MS Paint, "Expert in everything"'
    ]
  },
  {
    icon: FolderOpen,
    title: "Projects",
    important: true,
    content: [
      "Academic or self-learning projects are OK.",
      "",
      "Project format:",
      "• Project Title",
      "• Problem statement (1 line)",
      "• Tools / technologies used",
      "• What you implemented",
      "• Outcome or result",
      "",
      "Example:",
      "Phishing Detection System",
      "Built a machine learning model to detect phishing websites.",
      "Used Python, Pandas, Scikit-learn.",
      "Achieved 92% accuracy.",
      "",
      "2–3 projects are enough."
    ]
  },
  {
    icon: Briefcase,
    title: "Internships / Training",
    content: [
      "Example:",
      "Cybersecurity Intern – Company Name",
      "• Learned vulnerability assessment and basic penetration testing",
      "• Worked with Nmap and Linux tools",
      "",
      "Do NOT add fake internships."
    ]
  },
  {
    icon: Award,
    title: "Certifications",
    content: [
      "Add only relevant ones:",
      "",
      "• Google Cybersecurity Certificate",
      "• Python for Data Science – Coursera",
      "• AWS Cloud Practitioner",
      "",
      "Optional but useful for standing out."
    ]
  },
  {
    icon: Trophy,
    title: "Achievements / Activities",
    content: [
      "• Participated in Hackathon 2024",
      "• Solved 200+ coding problems on HackerRank",
      "• Member of college tech club",
      "• Won coding competition at college fest"
    ]
  },
  {
    icon: Heart,
    title: "Personal Details",
    content: [
      "Languages: English, Telugu, Hindi",
      "",
      "Do NOT add: Religion, Marital status, Caste"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Common Resume Mistakes",
    warning: true,
    content: [
      "❌ Grammar and spelling mistakes",
      "❌ Long paragraphs (use bullet points)",
      "❌ Copy-paste templates without customization",
      "❌ Irrelevant skills (MS Paint, etc.)",
      "❌ Fake projects or internships",
      "❌ Unprofessional email addresses"
    ]
  },
  {
    icon: Star,
    title: "ATS-Friendly Resume Tips",
    content: [
      "✓ Use keywords from the job description",
      "✓ Simple text formatting, no tables",
      "✓ Standard section headings",
      "✓ No graphics, images, or icons",
      "✓ Save as PDF with readable text"
    ]
  }
];

const platforms = [
  {
    name: "Overleaf",
    badge: "BEST CHOICE",
    badgeColor: "bg-success text-success-foreground",
    website: "overleaf.com",
    description: "LaTeX-based resume builder, perfect for professional resumes",
    tips: [
      "ATS-friendly output",
      "Very clean and professional",
      "Used by IIT/NIT students",
      'Use "Simple Resume" or "Deedy CV" templates'
    ]
  },
  {
    name: "Canva",
    badge: "Use Carefully",
    badgeColor: "bg-warning text-warning-foreground",
    website: "canva.com",
    description: "Visual design platform with resume templates",
    tips: [
      "Easy to use",
      "Many templates are NOT ATS-friendly",
      "Avoid heavy colors, icons, columns for IT jobs",
      "Choose simple, single-column templates only"
    ]
  },
  {
    name: "Resume Worded",
    website: "resumeworded.com",
    description: "AI-powered resume analysis and improvement",
    tips: [
      "ATS score checking",
      "Keyword improvement suggestions",
      "Great for optimizing existing resumes"
    ]
  },
  {
    name: "Novorésumé",
    website: "novoresume.com",
    description: "Modern resume builder with clean layouts",
    tips: [
      "Clean layouts",
      "Limited free version",
      "Good for beginners"
    ]
  },
  {
    name: "FlowCV",
    website: "flowcv.com",
    description: "Free modern resume builder",
    tips: [
      "Completely free",
      "Modern and clean templates",
      "Good for beginners"
    ]
  },
  {
    name: "Google Docs",
    badge: "Recommended",
    badgeColor: "bg-primary text-primary-foreground",
    website: "docs.google.com",
    description: "Simple, accessible, and widely accepted",
    tips: [
      "Simple and free",
      "ATS-friendly",
      "Easy editing and sharing",
      "Use built-in resume templates"
    ]
  },
  {
    name: "MS Word",
    badge: "Recommended",
    badgeColor: "bg-primary text-primary-foreground",
    website: "microsoft.com",
    description: "Classic document editor, offline and online",
    tips: [
      "Still widely accepted",
      "Good for campus placements",
      "Use simple formatting"
    ]
  }
];

const ResumeBuilder = () => {
  const [openGuide, setOpenGuide] = useState<number | null>(null);
  const [openPlatform, setOpenPlatform] = useState<number | null>(null);

  const toggleGuide = (idx: number) => {
    setOpenGuide(openGuide === idx ? null : idx);
  };

  const togglePlatform = (idx: number) => {
    setOpenPlatform(openPlatform === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              📄 Career Preparation
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Resume <span className="gradient-text">Builder</span>
            </h1>
            <div className="bg-secondary/50 rounded-2xl p-6 mt-6">
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-2">
                How to Build a Strong Resume
              </h2>
              <p className="text-muted-foreground">
                Your resume is your first impression. Make it count with these expert guidelines.
              </p>
            </div>
          </div>

          {/* Resume Guide Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-2xl font-bold mb-6 text-center">
              📝 Resume Guide
            </h2>
            <div className="space-y-3">
              {resumeGuide.map((item, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "rounded-xl border transition-all duration-300 overflow-hidden",
                    item.important && "border-l-4 border-l-primary",
                    item.warning && "border-l-4 border-l-destructive",
                    openGuide === idx 
                      ? "bg-card shadow-lg" 
                      : "bg-card/50 hover:bg-card hover:shadow-md"
                  )}
                  style={{
                    animation: `fadeInUp 0.4s ease-out ${idx * 0.05}s both`
                  }}
                >
                  <button
                    onClick={() => toggleGuide(idx)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        item.important ? "bg-primary/10" : item.warning ? "bg-destructive/10" : "bg-muted"
                      )}>
                        <item.icon className={cn(
                          "w-5 h-5",
                          item.important ? "text-primary" : item.warning ? "text-destructive" : "text-muted-foreground"
                        )} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{item.title}</span>
                        {item.important && (
                          <Badge className="bg-primary/10 text-primary text-xs">Important</Badge>
                        )}
                        {item.warning && (
                          <Badge variant="destructive" className="text-xs">Avoid</Badge>
                        )}
                      </div>
                    </div>
                    <ChevronDown className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform duration-300",
                      openGuide === idx && "rotate-180"
                    )} />
                  </button>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    openGuide === idx ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="px-4 pb-4 pt-0">
                      <div className={cn(
                        "rounded-lg p-4",
                        item.warning ? "bg-destructive/5" : "bg-muted/50"
                      )}>
                        {item.content.map((line, lineIdx) => (
                          <p 
                            key={lineIdx} 
                            className={cn(
                              "text-sm leading-relaxed",
                              line === "" ? "h-2" : "text-muted-foreground",
                              line.startsWith("Example:") || line.startsWith("Format:") ? "font-medium text-foreground mt-2" : "",
                              line.startsWith('"') && "italic text-primary/80 pl-4 border-l-2 border-primary/30",
                              line.startsWith("•") && "pl-2",
                              (line.startsWith("❌") || line.startsWith("✓")) && "py-0.5"
                            )}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Resume Checklist */}
          <div className="max-w-3xl mx-auto mb-16">
            <Card className="glass-card overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6">
                <h3 className="font-display text-xl font-bold text-center mb-4">
                  🧠 Final Resume Checklist
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "1 page maximum",
                    "Clean, simple format",
                    "Real skills only",
                    "Projects included",
                    "No lies or exaggerations",
                    "Proofread for errors"
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 bg-card/80 rounded-lg p-3"
                    >
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Resume Building Platforms */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-2xl font-bold mb-2 text-center">
              🛠️ Resume Building Platforms
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Which platforms can we use to build a resume?
            </p>
            <div className="space-y-3">
              {platforms.map((platform, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "rounded-xl border transition-all duration-300 overflow-hidden",
                    platform.badge === "BEST CHOICE" && "border-l-4 border-l-success",
                    platform.badge === "Recommended" && "border-l-4 border-l-primary",
                    platform.badge === "Use Carefully" && "border-l-4 border-l-warning",
                    openPlatform === idx 
                      ? "bg-card shadow-lg" 
                      : "bg-card/50 hover:bg-card hover:shadow-md"
                  )}
                  style={{
                    animation: `fadeInUp 0.4s ease-out ${idx * 0.05}s both`
                  }}
                >
                  <button
                    onClick={() => togglePlatform(idx)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <FileText className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-foreground">{platform.name}</span>
                          {platform.badge && (
                            <Badge className={cn("text-xs", platform.badgeColor)}>
                              {platform.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{platform.website}</p>
                      </div>
                    </div>
                    <ChevronDown className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform duration-300",
                      openPlatform === idx && "rotate-180"
                    )} />
                  </button>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    openPlatform === idx ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="px-4 pb-4 pt-0">
                      <div className="rounded-lg bg-muted/50 p-4">
                        <p className="text-sm text-muted-foreground mb-3">{platform.description}</p>
                        <ul className="space-y-2">
                          {platform.tips.map((tip, tipIdx) => (
                            <li key={tipIdx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{tip}</span>
                            </li>
                          ))}
                        </ul>
                        <a 
                          href={`https://${platform.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3"
                        >
                          Visit {platform.name} <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Warning / Best Choice Section */}
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden border-2 border-primary/30 shadow-xl">
              <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 p-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-xl font-bold text-center">
                    Final Recommendation
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Best Choice */}
                  <div className="bg-success/10 border border-success/30 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <h4 className="font-semibold text-success">BEST CHOICE</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 bg-card/80 rounded-lg p-3">
                        <Badge className="bg-success text-success-foreground">🥇</Badge>
                        <span className="font-medium">Overleaf</span>
                      </div>
                      <div className="flex items-center gap-3 bg-card/80 rounded-lg p-3">
                        <Badge className="bg-primary text-primary-foreground">🥈</Badge>
                        <span className="font-medium">Google Docs / MS Word</span>
                      </div>
                    </div>
                  </div>

                  {/* Avoid */}
                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <XCircle className="w-5 h-5 text-destructive" />
                      <h4 className="font-semibold text-destructive">AVOID STRICTLY</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <XCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                        <span className="text-muted-foreground">Fancy Canva templates</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <XCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                        <span className="text-muted-foreground">Infographic resumes</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <XCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                        <span className="text-muted-foreground">Photo resumes</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <XCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                        <span className="text-muted-foreground">Multi-column layouts</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <Badge variant="outline" className="text-xs">
                    💡 Simple = ATS-Friendly = More Interview Calls
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeBuilder;


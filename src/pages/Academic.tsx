import { useState, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Brain, Shield, BarChart3, GraduationCap, Layers, Info, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const domains = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    icon: Brain,
    gradient: "from-[hsl(234,89%,54%)] to-[hsl(262,83%,58%)]",
    bgSoft: "bg-[hsl(234,89%,94%)]",
    subjects: [
      { name: "Python Programming", purpose: "Foundation for AI, automation & scripting – asked in every tech interview", pdf: "https://learnengineering.in/Notes/PSPP/Problem-Solving-and-Python-Programming.pdf" },
      { name: "DBMS", purpose: "Core subject for data handling – frequently asked in placements", pdf: "https://learnengineering.in/Notes/DBMS/Database-Management-Systems.pdf" },
      { name: "Data Structures & Algorithms", purpose: "Most tested topic in coding rounds & technical interviews", pdf: "https://www.jsscacs.edu.in/sites/default/files/Department%20Files/Data%20Structures%20Full%20Notes.pdf" },
      { name: "Operating Systems", purpose: "Key for system-level understanding – common in technical rounds", pdf: "https://sriindu.ac.in/wp-content/uploads/2023/10/R20CSE2202-OPERATING-SYSTEMS.pdf" },
      { name: "Computer Networks", purpose: "Essential for networking roles & frequently asked in interviews", pdf: "https://www.technicalsymposium.com/notes/Computer-Networks-Notes.pdf" },
      { name: "Artificial Intelligence", purpose: "Core domain subject – covers search, logic & intelligent agents", pdf: "https://people.cs.vt.edu/~cs4824/Fall2020/AI.pdf" },
      { name: "Machine Learning", purpose: "High-demand skill for AI/ML roles – covers algorithms & models", pdf: "https://arxiv.org/pdf/2505.03861.pdf" },
      { name: "Deep Learning Basics", purpose: "Neural networks & advanced AI – growing demand in industry", pdf: "https://arxiv.org/pdf/2301.00942.pdf" },
    ],
  },
  {
    id: "cyber",
    name: "Cybersecurity",
    icon: Shield,
    gradient: "from-[hsl(174,72%,46%)] to-[hsl(196,80%,50%)]",
    bgSoft: "bg-[hsl(174,72%,92%)]",
    subjects: [
      { name: "Python Basics", purpose: "Scripting language used in security tools & automation", pdf: "https://learnengineering.in/Notes/PSPP/Problem-Solving-and-Python-Programming.pdf" },
      { name: "Data Structures", purpose: "Foundation for problem-solving in technical interviews", pdf: "https://www.jsscacs.edu.in/sites/default/files/Department%20Files/Data%20Structures%20Full%20Notes.pdf" },
      { name: "Computer Networks", purpose: "Core for understanding network security & protocols", pdf: "https://www.technicalsymposium.com/notes/Computer-Networks-Notes.pdf" },
      { name: "Operating Systems", purpose: "Essential for understanding system vulnerabilities", pdf: "https://sriindu.ac.in/wp-content/uploads/2023/10/R20CSE2202-OPERATING-SYSTEMS.pdf" },
      { name: "DBMS", purpose: "Important for SQL injection understanding & data security", pdf: "https://pdfstore.in/dbms-notes-pdf/" },
      { name: "Introduction to Cybersecurity", purpose: "Overview of threats, attacks & defense mechanisms", pdf: "https://www.geektonight.com/cyber-security-pdf/" },
      { name: "Cryptography", purpose: "Encryption & decryption – core of secure communication", pdf: "https://learnengineering.in/Notes/CS/AES-RSA-Cryptography.pdf" },
      { name: "Web Security (OWASP)", purpose: "Top 10 web vulnerabilities – critical for security roles", pdf: "https://www.geektonight.com/web-application-security-pdf/" },
      { name: "Linux Basics", purpose: "Essential OS for cybersecurity tools & penetration testing", pdf: "https://learnengineering.in/Notes/CS/Linux-Commands-Cheatsheet.pdf" },
    ],
  },
  {
    id: "ds",
    name: "Data Science",
    icon: BarChart3,
    gradient: "from-[hsl(38,92%,50%)] to-[hsl(22,93%,55%)]",
    bgSoft: "bg-[hsl(38,92%,92%)]",
    subjects: [
      { name: "Python for Data Science", purpose: "Primary language for data analysis & ML pipelines", pdf: "https://learnengineering.in/Notes/PSPP/Problem-Solving-and-Python-Programming.pdf" },
      { name: "Statistics & Probability", purpose: "Foundation for data analysis & model evaluation", pdf: "https://people.sc.fsu.edu/~jburkardt/pdf/probability_distributions.pdf" },
      { name: "SQL", purpose: "Must-know for querying databases – asked in every data role", pdf: "https://www.sqltutorial.org/wp-content/uploads/SQL-Tutorial.pdf" },
      { name: "Data Structures", purpose: "Key for efficient data processing & coding rounds", pdf: "https://www.jsscacs.edu.in/sites/default/files/Department%20Files/Data%20Structures%20Full%20Notes.pdf" },
      { name: "Machine Learning", purpose: "Core skill for data science – algorithms & predictions", pdf: "https://arxiv.org/pdf/2505.03861.pdf" },
      { name: "Stanford ML Notes", purpose: "World-class reference for ML theory & math", pdf: "https://see.stanford.edu/Course/CS229/cs229-notes1.pdf" },
      { name: "Data Visualization", purpose: "Presenting insights clearly – important for analyst roles", pdf: "https://sites.google.com/site/datavisualizationnotes/DataVisualizationNotes.pdf" },
      { name: "Linear Algebra", purpose: "Mathematical backbone of ML & deep learning models", pdf: "https://web.mit.edu/18.06/www/LinearAlgebra.pdf" },
    ],
  },
  {
    id: "diploma",
    name: "Diploma",
    icon: GraduationCap,
    gradient: "from-[hsl(152,69%,45%)] to-[hsl(174,72%,46%)]",
    bgSoft: "bg-[hsl(152,69%,92%)]",
    subjects: [
      { name: "Probability & Statistics", purpose: "Essential math for engineering & data-related roles", pdf: "https://people.sc.fsu.edu/~jburkardt/pdf/probability_distributions.pdf" },
      { name: "Applied Physics", purpose: "Core science subject for diploma engineering", pdf: "https://www.gapnotes.in/kitap/Applied_Physics_Notes.pdf" },
      { name: "Engineering Drawing", purpose: "Fundamental for mechanical & civil diploma students", pdf: "https://learndrawing.org/engineeringdrawing/Engineering-Graphics-Notes-PDF.pdf" },
      { name: "Basic Electronics", purpose: "Core for ECE & EEE diploma streams", pdf: "https://www.electronicsandcommunications.com/uploads/notes/Electronic_Devices_and_Circuits.pdf" },
      { name: "Electrical Engineering", purpose: "Foundation for power & electrical diploma roles", pdf: "https://www.learnengineering.in/Notes/Electrical-Engineering.pdf" },
      { name: "Computer Fundamentals", purpose: "Basics of computing for all diploma branches", pdf: "https://learncomputers.org/wp-content/uploads/Computer-Fundamentals-Notes.pdf" },
      { name: "Python Basics", purpose: "Programming fundamentals for technical placements", pdf: "https://learnengineering.in/Notes/PSPP/Problem-Solving-and-Python-Programming.pdf" },
      { name: "Workshop Practice", purpose: "Hands-on skills for practical engineering knowledge", pdf: "https://learndrawing.org/engineeringdrawing/Workshop-Practice-Notes.pdf" },
    ],
  },
  {
    id: "others",
    name: "Others",
    icon: Layers,
    gradient: "from-[hsl(262,83%,58%)] to-[hsl(234,89%,54%)]",
    bgSoft: "bg-[hsl(262,83%,92%)]",
    subjects: [
      { name: "Python", purpose: "Versatile language – must-know for any tech role", pdf: "https://learnengineering.in/Notes/PSPP/Problem-Solving-and-Python-Programming.pdf" },
      { name: "DSA", purpose: "Top priority for coding interviews at any company", pdf: "https://www.jsscacs.edu.in/sites/default/files/Department%20Files/Data%20Structures%20Full%20Notes.pdf" },
      { name: "SQL", purpose: "Database querying – essential for backend & data roles", pdf: "https://www.sqltutorial.org/wp-content/uploads/SQL-Tutorial.pdf" },
      { name: "Operating Systems", purpose: "System-level concepts asked in technical interviews", pdf: "https://sriindu.ac.in/wp-content/uploads/2023/10/R20CSE2202-OPERATING-SYSTEMS.pdf" },
      { name: "Computer Networks", purpose: "Networking fundamentals for IT & infrastructure roles", pdf: "https://www.technicalsymposium.com/notes/Computer-Networks-Notes.pdf" },
      { name: "Software Engineering", purpose: "SDLC, Agile & design patterns – common interview topic", pdf: "https://learnengineering.in/Notes/Software-Engineering.pdf" },
      { name: "Logical Reasoning", purpose: "Key for aptitude rounds in campus & off-campus drives", pdf: "https://pdfnotes.org/pdf/Logical-Reasoning.pdf" },
    ],
  },
];

const Academic = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>("ai");
  const subjectsRef = useRef<HTMLDivElement>(null);

  const handleDomainClick = (id: string) => {
    setSelectedDomain(id);
    setTimeout(() => {
      subjectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const activeDomain = domains.find((d) => d.id === selectedDomain)!;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">📚 Academic Resources</Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Academic <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Choose your domain and access trusted academic notes that actually help in placements.
            </p>
          </div>

          {/* Branch Selection - Horizontal */}
          <div className="flex gap-3 overflow-x-auto pb-4 mb-10 scrollbar-hide snap-x snap-mandatory">
            {domains.map((domain) => {
              const Icon = domain.icon;
              const isActive = selectedDomain === domain.id;
              return (
                <button
                  key={domain.id}
                  onClick={() => handleDomainClick(domain.id)}
                  className={cn(
                    "group flex-shrink-0 snap-start flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 border-2 min-w-[200px]",
                    isActive
                      ? `bg-gradient-to-r ${domain.gradient} text-white border-transparent shadow-lg scale-[1.03]`
                      : "bg-card border-border hover:border-primary/30 hover:shadow-md hover:scale-[1.03] text-foreground"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300",
                      isActive ? "bg-white/20" : domain.bgSoft
                    )}
                  >
                    <Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-foreground")} />
                  </div>
                  <span className="whitespace-nowrap text-sm sm:text-base">{domain.name}</span>
                </button>
              );
            })}
          </div>

          {/* Subject Cards - Horizontal Scroll */}
          <div ref={subjectsRef} className="mb-16 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
              <activeDomain.icon className="w-6 h-6 text-primary" />
              {activeDomain.name}
              <Badge variant="outline" className="ml-2 font-normal">{activeDomain.subjects.length} subjects</Badge>
            </h2>

            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {activeDomain.subjects.map((subject, idx) => (
                <div
                  key={`${selectedDomain}-${idx}`}
                  className={cn(
                    "flex-shrink-0 snap-start w-[280px] sm:w-[300px] rounded-2xl border border-border/50 p-5 flex flex-col justify-between gap-4",
                    "bg-card/80 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                    "animate-fade-in"
                  )}
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <div>
                    <h3 className="font-bold text-base mb-2 leading-snug">{subject.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{subject.purpose}</p>
                  </div>
                  <Button
                    className="w-full gap-2 bg-gradient-to-r from-primary to-[hsl(262,83%,58%)] hover:opacity-90 text-primary-foreground"
                    onClick={() => window.open(subject.pdf, "_blank", "noopener,noreferrer")}
                  >
                    <Download className="w-4 h-4" />
                    Download pdf
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[hsl(38,92%,90%)] to-[hsl(196,80%,90%)] border border-[hsl(38,92%,80%)]">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center shrink-0">
                <Info className="w-5 h-5 text-[hsl(38,92%,40%)]" />
              </div>
              <div className="text-sm sm:text-base space-y-1.5">
                <p className="font-bold text-foreground text-base sm:text-lg">📌 Note:</p>
                <p className="text-foreground/80">All study materials provided here are publicly available educational resources. We do not host or claim ownership of these PDFs.</p>
                <p className="text-foreground/80">Links are shared only for learning and academic guidance purposes. If a link stops working, users can search the document title on the official source website.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Academic;

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { 
  Brain, 
  Shield, 
  BarChart3, 
  MoreHorizontal,
  Target,
  BookOpen,
  Code,
  Wrench,
  Award,
  CheckCircle,
  Briefcase
} from "lucide-react";

type ProfessionKey = "ai" | "cybersecurity" | "datascience" | "others" | null;

const professions = [
  {
    id: "ai" as const,
    title: "AI",
    icon: Brain,
    color: "from-primary to-primary/60",
    description: "Artificial Intelligence & Machine Learning",
  },
  {
    id: "cybersecurity" as const,
    title: "Cybersecurity",
    icon: Shield,
    color: "from-accent to-accent/60",
    description: "Security & Ethical Hacking",
  },
  {
    id: "datascience" as const,
    title: "Data Science",
    icon: BarChart3,
    color: "from-warning to-warning/60",
    description: "Analytics & Data Engineering",
  },
  {
    id: "others" as const,
    title: "Others",
    icon: MoreHorizontal,
    color: "from-success to-success/60",
    description: "Explore More Career Options",
  },
];

// AI Roadmap Content
const aiRoadmap = {
  title: "🧠 AI Student Placement Roadmap",
  years: [
    {
      year: "First Year",
      icon: BookOpen,
      goal: "Build strong fundamentals in programming and mathematics.",
      academics: [
        "Focus on Mathematics (Linear Algebra, Calculus, Probability & Statistics)",
        "Learn basic programming concepts",
        "Understand data structures fundamentals",
      ],
      skills: [
        "Python basics (variables, loops, functions, OOP)",
        "Mathematics for ML (matrices, derivatives, probability)",
        "Basic problem-solving on platforms like HackerRank/LeetCode",
      ],
      tools: ["Python", "Jupyter Notebook", "Google Colab", "Git basics"],
    },
    {
      year: "Second Year",
      icon: Code,
      goal: "Dive into core ML concepts and start building small projects.",
      academics: [
        "Data Structures & Algorithms (DSA)",
        "Database Management Systems (DBMS)",
        "Object-Oriented Programming",
      ],
      skills: [
        "Advanced Python (NumPy, Pandas, Matplotlib)",
        "Supervised Learning (Linear Regression, Logistic Regression, Decision Trees)",
        "Unsupervised Learning (Clustering, PCA)",
        "Model evaluation metrics",
      ],
      tools: ["Scikit-learn", "Kaggle", "SQL", "Tableau/Power BI basics"],
      projects: [
        "House Price Prediction",
        "Customer Segmentation",
        "Sentiment Analysis (basic)",
      ],
    },
    {
      year: "Third Year",
      icon: Wrench,
      goal: "Specialize in Deep Learning, NLP, or Computer Vision. Build portfolio projects.",
      academics: [
        "Machine Learning (formal course)",
        "Artificial Intelligence",
        "Big Data Analytics (if available)",
      ],
      skills: [
        "Deep Learning (Neural Networks, CNNs, RNNs, Transformers)",
        "NLP or Computer Vision specialization",
        "Model deployment basics",
        "MLOps introduction",
      ],
      tools: ["TensorFlow", "PyTorch", "Hugging Face", "Docker basics", "AWS/GCP basics"],
      projects: [
        "Image Classification (CNN)",
        "Chatbot / Text Summarizer (NLP)",
        "Recommendation System",
        "End-to-end ML pipeline",
      ],
      certifications: [
        "TensorFlow Developer Certificate",
        "AWS ML Specialty (optional)",
        "Coursera/DeepLearning.AI courses",
      ],
    },
    {
      year: "Final Year",
      icon: Award,
      goal: "Crack placements, build an impressive portfolio, and prepare for interviews.",
      academics: [
        "Major Project / Capstone (AI-based)",
        "Research paper (optional but valuable)",
      ],
      skills: [
        "System Design for ML",
        "Advanced MLOps (CI/CD for ML)",
        "Model optimization and scaling",
        "Interview preparation (DSA + ML theory + projects)",
      ],
      tools: ["MLflow", "Kubernetes basics", "FastAPI/Flask", "GitHub Portfolio"],
      interviewPrep: [
        "DSA: 150-200 LeetCode problems (Medium level)",
        "ML Theory: Andrew Ng's course revision",
        "Projects: Be ready to explain architecture, challenges, results",
        "Mock interviews: Practice with peers or platforms like Pramp",
      ],
    },
  ],
  mustHaveSkills: [
    "Python + Libraries (NumPy, Pandas, Scikit-learn)",
    "Mathematics (Linear Algebra, Calculus, Statistics)",
    "Machine Learning Algorithms",
    "Deep Learning Frameworks (TensorFlow/PyTorch)",
    "SQL + Data Handling",
    "Model Deployment Basics",
    "DSA (for coding rounds)",
    "Communication & Project Presentation",
  ],
};

// Cybersecurity Roadmap Content
const cybersecurityRoadmap = {
  title: "🛡️ Cybersecurity Placement Roadmap",
  years: [
    {
      year: "First Year",
      icon: BookOpen,
      goal: "Build strong foundations in networking and operating systems.",
      academics: [
        "Computer Networks fundamentals",
        "Operating Systems (Linux & Windows)",
        "Basic programming concepts",
      ],
      skills: [
        "Linux command line proficiency",
        "Networking basics (TCP/IP, DNS, HTTP/HTTPS)",
        "Basic scripting (Bash, Python)",
        "Understanding of CIA Triad",
      ],
      tools: ["Linux (Ubuntu/Kali)", "Wireshark", "VirtualBox/VMware", "Python basics"],
    },
    {
      year: "Second Year",
      icon: Code,
      goal: "Learn security fundamentals and start hands-on practice.",
      academics: [
        "Cryptography and Network Security",
        "Database Security",
        "Web Technologies",
      ],
      skills: [
        "Web Application Security (OWASP Top 10)",
        "Network Security fundamentals",
        "Vulnerability Assessment basics",
        "Security tools usage",
      ],
      tools: ["Burp Suite", "Nmap", "Metasploit basics", "OWASP ZAP"],
      projects: [
        "Set up a home lab",
        "Practice on TryHackMe/HackTheBox",
        "Basic CTF participation",
      ],
    },
    {
      year: "Third Year",
      icon: Wrench,
      goal: "Specialize in a domain and earn certifications.",
      academics: [
        "Ethical Hacking (if available)",
        "Digital Forensics",
        "Cloud Security basics",
      ],
      skills: [
        "Penetration Testing",
        "Incident Response",
        "SIEM tools and log analysis",
        "Cloud Security (AWS/Azure)",
      ],
      tools: ["Splunk/ELK Stack", "Nessus", "Autopsy", "AWS Security tools"],
      certifications: [
        "CompTIA Security+",
        "CEH (Certified Ethical Hacker)",
        "eJPT (Junior Penetration Tester)",
      ],
      projects: [
        "Full penetration test report",
        "Security audit of a web application",
        "Incident response simulation",
      ],
    },
    {
      year: "Final Year",
      icon: Award,
      goal: "Crack placements with strong portfolio and interview preparation.",
      academics: [
        "Major Project (Security-focused)",
        "Research paper on emerging threats (optional)",
      ],
      skills: [
        "Advanced Penetration Testing",
        "Threat Hunting",
        "Security Architecture",
        "Interview preparation",
      ],
      tools: ["Cobalt Strike (concepts)", "Threat Intelligence platforms", "GitHub Portfolio"],
      interviewPrep: [
        "Security concepts and scenarios",
        "Hands-on CTF experience",
        "Project walkthrough preparation",
        "Current threat landscape awareness",
      ],
    },
  ],
  checklist: [
    "Linux proficiency",
    "Networking fundamentals",
    "OWASP Top 10 knowledge",
    "At least one certification",
    "Hands-on lab experience",
    "CTF participation",
    "Portfolio with write-ups",
    "Communication skills",
  ],
};

// Data Science Roadmap Content
const dataScienceRoadmap = {
  title: "📊 Data Science Placement Roadmap",
  years: [
    {
      year: "First Year",
      icon: BookOpen,
      goal: "Master programming fundamentals and statistics basics.",
      academics: [
        "Statistics and Probability",
        "Programming fundamentals",
        "Mathematics (Calculus, Linear Algebra)",
      ],
      skills: [
        "Python programming (core concepts)",
        "Descriptive Statistics",
        "Basic data manipulation",
        "Excel proficiency",
      ],
      tools: ["Python", "Excel", "Google Sheets", "Basic SQL"],
    },
    {
      year: "Second Year",
      icon: Code,
      goal: "Learn data analysis, visualization, and SQL mastery.",
      academics: [
        "Database Management Systems",
        "Data Structures & Algorithms",
        "Inferential Statistics",
      ],
      skills: [
        "Advanced Python (Pandas, NumPy, Matplotlib, Seaborn)",
        "SQL (complex queries, joins, subqueries)",
        "Data Cleaning and Preprocessing",
        "Exploratory Data Analysis (EDA)",
        "Data Visualization best practices",
      ],
      tools: ["Jupyter Notebook", "PostgreSQL/MySQL", "Tableau/Power BI", "Git"],
      projects: [
        "Exploratory Data Analysis on real datasets",
        "Dashboard creation",
        "Data cleaning project",
      ],
    },
    {
      year: "Third Year",
      icon: Wrench,
      goal: "Master Machine Learning and build impressive projects.",
      academics: [
        "Machine Learning",
        "Big Data Analytics",
        "Data Mining",
      ],
      skills: [
        "Supervised Learning algorithms",
        "Unsupervised Learning algorithms",
        "Feature Engineering",
        "Model Evaluation and Tuning",
        "Time Series Analysis",
      ],
      tools: ["Scikit-learn", "XGBoost/LightGBM", "Spark basics", "Kaggle"],
      certifications: [
        "Google Data Analytics Certificate",
        "IBM Data Science Professional",
        "Coursera ML Specialization",
      ],
      projects: [
        "End-to-end ML project",
        "Kaggle competition participation",
        "Business case study analysis",
      ],
    },
    {
      year: "Final Year",
      icon: Award,
      goal: "Prepare for placements with strong portfolio and interview skills.",
      academics: [
        "Major Project (Data Science focused)",
        "Advanced Analytics electives",
      ],
      skills: [
        "Deep Learning basics",
        "Model Deployment",
        "A/B Testing and Experimentation",
        "Business Communication",
      ],
      tools: ["TensorFlow/PyTorch basics", "Flask/Streamlit", "Docker basics", "GitHub Portfolio"],
      interviewPrep: [
        "Statistics & Probability questions",
        "SQL coding challenges",
        "Case study and guesstimates",
        "ML algorithm explanations",
        "Project deep-dives",
      ],
    },
  ],
  checklist: [
    "Strong Python skills",
    "SQL mastery",
    "Statistics fundamentals",
    "ML algorithms understanding",
    "3-4 portfolio projects",
    "Kaggle profile",
    "Business communication",
    "Problem-solving aptitude",
  ],
};

// Others - Career Options
const otherCareers = [
  {
    title: "SOC Analyst",
    description: "Security Operations Center Analyst",
    skills: ["SIEM tools (Splunk, QRadar)", "Log analysis", "Incident response", "Network monitoring", "Threat detection", "Security frameworks (NIST, ISO 27001)"],
  },
  {
    title: "Ethical Hacker",
    description: "Penetration Tester / Red Team",
    skills: ["Penetration testing", "Vulnerability assessment", "Web/Mobile/Network hacking", "Social engineering", "Report writing", "CEH/OSCP certification"],
  },
  {
    title: "Digital Forensics Analyst",
    description: "Cyber Forensics Investigator",
    skills: ["Forensic tools (Autopsy, FTK)", "Evidence collection", "Chain of custody", "Memory forensics", "Legal procedures", "Report documentation"],
  },
  {
    title: "Data Analyst",
    description: "Business Intelligence Analyst",
    skills: ["SQL & Excel", "Python/R for analysis", "Data visualization (Tableau, Power BI)", "Statistical analysis", "Business acumen", "Storytelling with data"],
  },
  {
    title: "Data Scientist",
    description: "ML & Analytics Specialist",
    skills: ["Python & ML libraries", "Statistics & Mathematics", "Machine Learning", "Deep Learning basics", "Big Data tools", "Communication skills"],
  },
  {
    title: "Machine Learning Engineer",
    description: "ML Systems Developer",
    skills: ["Python & ML frameworks", "Model deployment", "MLOps", "Cloud platforms", "Software engineering", "System design"],
  },
  {
    title: "Web Developer",
    description: "Frontend / Backend / Full Stack",
    skills: ["HTML, CSS, JavaScript", "React/Angular/Vue (Frontend)", "Node.js/Python/Java (Backend)", "Databases (SQL/NoSQL)", "REST APIs", "Version control (Git)"],
  },
  {
    title: "Cloud Engineer",
    description: "AWS / Azure / GCP Specialist",
    skills: ["Cloud platforms (AWS/Azure/GCP)", "Infrastructure as Code", "Networking & Security", "Containerization (Docker, K8s)", "CI/CD pipelines", "Cloud certifications"],
  },
  {
    title: "DevOps Engineer",
    description: "Development Operations Specialist",
    skills: ["CI/CD tools (Jenkins, GitLab)", "Containerization (Docker, Kubernetes)", "Infrastructure as Code (Terraform)", "Monitoring tools", "Scripting (Bash, Python)", "Cloud platforms"],
  },
  {
    title: "Software Tester / QA",
    description: "Quality Assurance Engineer",
    skills: ["Manual testing", "Automation testing (Selenium, Cypress)", "Test case design", "Bug tracking tools", "API testing", "Performance testing"],
  },
  {
    title: "NLP Engineer",
    description: "Natural Language Processing Specialist",
    skills: ["Python & NLP libraries", "Text preprocessing", "Language models (BERT, GPT)", "Sentiment analysis", "Named Entity Recognition", "Chatbot development"],
  },
  {
    title: "Computer Vision Engineer",
    description: "Image & Video AI Specialist",
    skills: ["Python & OpenCV", "Deep Learning (CNNs)", "Image processing", "Object detection (YOLO, SSD)", "Image segmentation", "Video analytics"],
  },
  {
    title: "Blockchain Developer",
    description: "Web3 & Smart Contract Developer",
    skills: ["Solidity", "Smart contracts", "Ethereum/Polygon", "Web3.js/Ethers.js", "DeFi concepts", "Security auditing"],
  },
  {
    title: "App Developer",
    description: "Mobile Application Developer",
    skills: ["React Native / Flutter", "iOS (Swift) / Android (Kotlin)", "REST APIs", "State management", "UI/UX principles", "App Store deployment"],
  },
  {
    title: "Product Manager",
    description: "Technical Product Manager",
    skills: ["Product strategy", "User research", "Agile/Scrum", "Data analysis", "Technical understanding", "Stakeholder management"],
  },
  {
    title: "Technical Support / Analyst",
    description: "IT Support Specialist",
    skills: ["Troubleshooting", "Customer communication", "Ticketing systems", "Basic networking", "Documentation", "ITIL framework"],
  },
];

const CareerPaths = () => {
  const [selectedProfession, setSelectedProfession] = useState<ProfessionKey>(null);

  const handleProfessionClick = (professionId: ProfessionKey) => {
    setSelectedProfession(professionId === selectedProfession ? null : professionId);
  };

  const renderRoadmapContent = (roadmap: typeof aiRoadmap | typeof cybersecurityRoadmap | typeof dataScienceRoadmap) => (
    <div className="mt-8 animate-fade-in">
      <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 text-center">
        {roadmap.title}
      </h2>
      
      <Accordion type="single" collapsible className="space-y-4">
        {roadmap.years.map((yearData, idx) => (
          <AccordionItem 
            key={idx} 
            value={`year-${idx}`}
            className="glass-card border-none rounded-xl overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center",
                  idx === 0 ? "bg-primary/10 text-primary" :
                  idx === 1 ? "bg-accent/10 text-accent" :
                  idx === 2 ? "bg-warning/10 text-warning" :
                  "bg-success/10 text-success"
                )}>
                  <yearData.icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="font-semibold text-lg">{yearData.year}</span>
                  <p className="text-sm text-muted-foreground font-normal">{yearData.goal}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-6 pt-4">
                {/* Academics */}
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Academics
                  </h4>
                  <ul className="space-y-2">
                    {yearData.academics.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" /> Skills to Develop
                  </h4>
                  <ol className="space-y-2 list-decimal list-inside">
                    {yearData.skills.map((skill, i) => (
                      <li key={i} className="text-sm">{skill}</li>
                    ))}
                  </ol>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3 flex items-center gap-2">
                    <Wrench className="w-4 h-4" /> Tools & Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {yearData.tools.map((tool, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Projects (if available) */}
                {'projects' in yearData && yearData.projects && (
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4" /> Projects
                    </h4>
                    <ul className="space-y-2">
                      {yearData.projects.map((project, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary">•</span>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Certifications (if available) */}
                {'certifications' in yearData && yearData.certifications && (
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4" /> Certifications
                    </h4>
                    <ul className="space-y-2">
                      {yearData.certifications.map((cert, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Award className="w-4 h-4 text-warning mt-0.5 shrink-0" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Interview Prep (if available) */}
                {'interviewPrep' in yearData && yearData.interviewPrep && (
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" /> Interview Preparation
                    </h4>
                    <ul className="space-y-2">
                      {yearData.interviewPrep.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Must-Have Skills / Checklist */}
      {'mustHaveSkills' in roadmap && (
        <div className="mt-10">
          <div className="text-center mb-8">
            <Badge className="mb-3 bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20">
              ⚠️ NON-NEGOTIABLE
            </Badge>
            <h3 className="font-display text-2xl font-bold flex items-center justify-center gap-3">
              <span className="text-2xl">✅</span> Must-Have Skills Checklist
            </h3>
            <p className="text-muted-foreground text-sm mt-2">
              These skills are essential for placement success
            </p>
          </div>
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            {roadmap.mustHaveSkills.map((skill, i) => (
              <div 
                key={i} 
                className="relative group animate-fade-in"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-4 p-4 rounded-xl border-l-4 border-l-primary bg-card shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-1">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-foreground">{skill}</span>
                  </div>
                  <Badge variant="outline" className="shrink-0 text-xs border-primary/30 text-primary bg-primary/5">
                    MUST-HAVE
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {'checklist' in roadmap && (
        <div className="mt-10">
          <div className="text-center mb-8">
            <Badge className="mb-3 bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20">
              ⚠️ NON-NEGOTIABLE
            </Badge>
            <h3 className="font-display text-2xl font-bold flex items-center justify-center gap-3">
              <span className="text-2xl">✅</span> Placement Readiness Checklist
            </h3>
            <p className="text-muted-foreground text-sm mt-2">
              These skills are essential for placement success
            </p>
          </div>
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            {roadmap.checklist.map((item, i) => (
              <div 
                key={i} 
                className="relative group animate-fade-in"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-4 p-4 rounded-xl border-l-4 border-l-primary bg-card shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-1">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                  <Badge variant="outline" className="shrink-0 text-xs border-primary/30 text-primary bg-primary/5">
                    MUST-HAVE
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderOthersContent = () => (
    <div className="mt-8 animate-fade-in">
      <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 text-center">
        🌐 Explore More Career Options
      </h2>
      
      <Accordion type="single" collapsible className="space-y-3">
        {otherCareers.map((career, idx) => (
          <AccordionItem 
            key={idx} 
            value={`career-${idx}`}
            className="glass-card border-none rounded-xl overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <span className="font-semibold">{career.title}</span>
                  <p className="text-sm text-muted-foreground font-normal">{career.description}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="pt-4">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                  Key Skills Required
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {career.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              🎯 Career Guidance
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Career <span className="gradient-text">Paths</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Which profession are you interested in?
            </p>
          </div>

          {/* Profession Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {professions.map((profession) => (
              <Card
                key={profession.id}
                onClick={() => handleProfessionClick(profession.id)}
                className={cn(
                  "cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
                  "feature-card overflow-hidden",
                  selectedProfession === profession.id && "ring-2 ring-primary ring-offset-2 ring-offset-background"
                )}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={cn(
                    "w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4",
                    profession.color
                  )}>
                    <profession.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{profession.title}</h3>
                  <p className="text-sm text-muted-foreground">{profession.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Roadmap Content */}
          {selectedProfession === "ai" && renderRoadmapContent(aiRoadmap)}
          {selectedProfession === "cybersecurity" && renderRoadmapContent(cybersecurityRoadmap)}
          {selectedProfession === "datascience" && renderRoadmapContent(dataScienceRoadmap)}
          {selectedProfession === "others" && renderOthersContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareerPaths;




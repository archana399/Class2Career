import { BookOpen, Brain, FileText, Users, Target, Award, MessageSquare, Download } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Subject-wise Resources",
    description: "Access comprehensive notes, assignments, and question banks organized by stream and subject.",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: Brain,
    title: "AI-Powered Doubt Solving",
    description: "Get instant, structured answers to your academic questions in a clear, sheet-style format.",
    gradient: "from-accent to-accent/60",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create professional resumes with industry-standard templates tailored to your field.",
    gradient: "from-warning to-warning/60",
  },
  {
    icon: Users,
    title: "Interview Preparation",
    description: "Practice with HR and technical interview questions with detailed guidance.",
    gradient: "from-success to-success/60",
  },
  {
    icon: Target,
    title: "Career Roadmaps",
    description: "Discover job roles, required skills, and clear paths to your dream career.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Award,
    title: "Placement Guidance",
    description: "Get expert advice on placements, higher studies, and industry expectations.",
    gradient: "from-accent to-primary",
  },
  {
    icon: MessageSquare,
    title: "Structured Explanations",
    description: "Receive answers with headings, bullet points, and step-by-step breakdowns.",
    gradient: "from-warning to-success",
  },
  {
    icon: Download,
    title: "Download & Save",
    description: "Export resources and AI answers in PDF format for offline study.",
    gradient: "from-success to-warning",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From academic resources to career preparation, we've got you covered with tools designed for student success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="feature-card group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

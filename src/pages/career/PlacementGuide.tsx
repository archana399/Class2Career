import { Link } from "react-router-dom";

<Link to="/career/placements">
  <button className="explore-btn">Explore →</button>
</Link>
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { 
  AlertTriangle, 
  ExternalLink, 
  Briefcase, 
  Instagram, 
  ChevronDown,
  Heart,
  Shield,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const jobPlatforms = [
  {
    name: "LinkedIn Jobs",
    tagline: "Best for professional networking + job search",
    description: [
      "Recruiters actively search for freshers",
      "You can message HRs directly and build connections",
      "Apply to roles and ask for referrals",
      "Also helps build personal brand"
    ],
    highlight: "📌 Most recommended for freshers"
  },
  {
    name: "Naukri.com",
    tagline: "One of India's biggest job portals",
    description: [
      "Filter jobs by 'Fresher'",
      "Many IT and engineering roles listed daily",
      "Create a strong profile for recruiter visibility"
    ]
  },
  {
    name: "Indeed India",
    tagline: "Global job aggregator",
    description: [
      "Tech, non-tech, remote & full-time opportunities",
      "Easy apply feature for quick applications",
      "Job alerts based on your preferences"
    ]
  },
  {
    name: "Freshersworld",
    tagline: "Focused on fresher & entry-level jobs",
    description: [
      "Campus drive info + off-campus roles",
      "Government job notifications",
      "Walk-in interview updates"
    ]
  },
  {
    name: "Internshala",
    tagline: "Internship-focused but also entry-level jobs",
    description: [
      "Great for students & recent graduates",
      "No fees to apply",
      "Free online courses with certificates"
    ]
  },
  {
    name: "Shine.com",
    tagline: "Good for fresher roles in software & analytics",
    description: [
      "Allows job alerts",
      "Resume builder tools",
      "Skill assessment tests"
    ]
  },
  {
    name: "Hirect",
    tagline: "Direct hiring platform",
    description: [
      "Chat directly with recruiters",
      "Good for startups & fast replies",
      "No middlemen - direct communication"
    ]
  },
  {
    name: "AngelList / Wellfound",
    tagline: "Startup-focused hiring",
    description: [
      "Good for freshers looking for fast growth",
      "Equity and salary transparency",
      "Direct founder connections"
    ]
  }
];

const instagramPages = [
  {
    handle: "@itfresherjobs",
    description: "Daily IT / software fresher job updates"
  },
  {
    handle: "@software_jobs_mnc",
    description: "MNC software jobs & hiring alerts (100K+ followers)"
  },
  {
    handle: "@nextgen_careers_hub_01",
    description: "Software job notifications with role details"
  },
  {
    handle: "@it_jobs_for_freshers",
    description: "Junior developer & trainee roles for fresh grads"
  },
  {
    handle: "@fresher_jobupdates",
    description: "Fresher jobs across multiple sectors"
  },
  {
    handle: "@job.for.fresher",
    description: "India job vacancies with apply info"
  },
  {
    handle: "@placementindia_",
    description: "Recruitment updates & opportunities in India"
  },
  {
    handle: "@jobalert.in",
    description: "Job alerts + career tips"
  },
  {
    handle: "@thefreshersdunia",
    description: "Job notifications + tech hiring news"
  }
];

const PlacementGuide = () => {
  const [expandedPlatform, setExpandedPlatform] = useState<number | null>(null);

  const togglePlatform = (index: number) => {
    setExpandedPlatform(expandedPlatform === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header with Warm Message */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-3 h-3 mr-1" />
              We're Here For You
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Placement <span className="gradient-text-accent">Guide</span>
            </h1>
          </div>

          {/* Warm Reassuring Message */}
          <div className="max-w-3xl mx-auto mb-12">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
              <CardContent className="p-8 text-center">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Don't worry if you didn't get placed through campus — we've got you covered 💙
                </p>
                <p className="text-lg md:text-xl text-muted-foreground mt-2 leading-relaxed">
                  Thousands of students land jobs off-campus, and you can too.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* SCAM WARNING - Prominent Section */}
          <div className="max-w-3xl mx-auto mb-12">
            <Card className="border-2 border-destructive/50 bg-destructive/5 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-xl font-bold text-destructive">Be Careful of Scams</h2>
                      <Badge variant="destructive" className="text-xs">
                        <Shield className="w-3 h-3 mr-1" />
                        IMPORTANT
                      </Badge>
                    </div>
                    <div className="space-y-2 text-muted-foreground">
                      <p>
                        Many fake internships and jobs ask for money or send WhatsApp / Google Form links.
                      </p>
                      <p className="font-semibold text-foreground">
                        ⚠️ Never pay to get a job or internship.
                      </p>
                      <p>
                        Always verify offers through official websites or trusted platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Section 1: Off-Campus Job Platforms */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/60 mb-4">
                <Briefcase className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-display text-3xl font-bold mb-2">
                Top Platforms to Find <span className="gradient-text">Jobs & Internships</span>
              </h2>
              <p className="text-muted-foreground">
                Click on any platform to learn how to use it effectively
              </p>
            </div>

            <div className="space-y-4">
              {jobPlatforms.map((platform, index) => (
                <Card 
                  key={index}
                  className={cn(
                    "glass-card transition-all duration-300 cursor-pointer overflow-hidden",
                    expandedPlatform === index 
                      ? "ring-2 ring-primary/30 shadow-lg" 
                      : "hover:shadow-md hover:border-primary/20"
                  )}
                  onClick={() => togglePlatform(index)}
                >
                  <CardContent className="p-0">
                    {/* Platform Header */}
                    <div className="p-5 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                          <ExternalLink className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{platform.name}</h3>
                          <p className="text-sm text-muted-foreground">{platform.tagline}</p>
                        </div>
                      </div>
                      <ChevronDown 
                        className={cn(
                          "w-5 h-5 text-muted-foreground transition-transform duration-300",
                          expandedPlatform === index && "rotate-180"
                        )} 
                      />
                    </div>

                    {/* Expanded Content */}
                    <div className={cn(
                      "overflow-hidden transition-all duration-300",
                      expandedPlatform === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <div className="px-5 pb-5 pt-0">
                        <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-l-primary">
                          <h4 className="font-medium text-sm text-primary mb-3">How to use this platform:</h4>
                          <ul className="space-y-2">
                            {platform.description.map((item, idx) => (
                              <li 
                                key={idx} 
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                                style={{ 
                                  animation: expandedPlatform === index ? `fade-in 0.3s ease-out ${idx * 0.1}s forwards` : 'none',
                                  opacity: expandedPlatform === index ? 1 : 0
                                }}
                              >
                                <span className="text-primary mt-0.5">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                          {platform.highlight && (
                            <div className="mt-3 pt-3 border-t border-border">
                              <Badge variant="secondary" className="text-xs">
                                {platform.highlight}
                              </Badge>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Section 2: Instagram Job Alert Pages */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/60 mb-4">
                <Instagram className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-display text-3xl font-bold mb-2">
                Instagram Pages to <span className="gradient-text-accent">Stay Updated</span>
              </h2>
              <p className="text-muted-foreground">
                Follow these pages for daily job alerts and fresher opportunities
              </p>
            </div>

            <div className="space-y-3">
              {instagramPages.map((page, index) => (
                <Card 
                  key={index}
                  className="glass-card hover:shadow-md hover:border-accent/20 transition-all duration-300"
                  style={{ 
                    animation: `fade-in 0.4s ease-out ${index * 0.05}s forwards`,
                    opacity: 0
                  }}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-primary">{page.handle}</h3>
                      <p className="text-sm text-muted-foreground truncate">{page.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom Encouragement */}
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-primary/10">
              <CardContent className="p-8">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">You've Got This! 💪</h3>
                <p className="text-muted-foreground">
                  Stay consistent, keep applying, and don't give up. Your dream job is waiting for you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlacementGuide;


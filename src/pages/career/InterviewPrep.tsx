import { Link } from "react-router-dom";

<Link to="/career/interview">
  <button className="explore-btn">Explore →</button>
</Link>
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChevronDown, 
  ChevronRight, 
  Brain, 
  Code, 
  Users, 
  Briefcase, 
  MessageSquare,
  CheckCircle,
  XCircle,
  AlertTriangle
} from "lucide-react";
import { cn } from "@/lib/utils";

// Interview round data
const interviewRounds = [
  {
    id: 1,
    title: "Aptitude / Online Test",
    icon: Brain,
    color: "bg-primary/10 text-primary border-primary/20",
    questions: [
      {
        q: "What topics are covered in aptitude tests?",
        a: "Quantitative Aptitude (Percentages, Profit & Loss, Time & Work, Time & Distance), Logical Reasoning (Puzzles, Seating Arrangement, Blood Relations, Syllogisms), Verbal Ability (Reading Comprehension, Para Jumbles, Sentence Correction, Vocabulary)."
      },
      {
        q: "How should I prepare for online aptitude tests?",
        a: "Practice daily with apps like IndiaBix, PrepInsta, or GeeksforGeeks. Focus on speed and accuracy. Take timed mock tests weekly. Learn shortcut methods for calculations."
      },
      {
        q: "What is a good score in aptitude rounds?",
        a: "Aim for 80%+ accuracy. Most companies have sectional cutoffs, so balance your preparation across all sections. Time management is crucial - don't spend more than 1-2 minutes per question."
      },
      {
        q: "Are there negative markings in aptitude tests?",
        a: "Yes, most company tests have negative marking (usually -0.25 for each wrong answer). Attempt only questions you're confident about. Skip and revisit difficult ones if time permits."
      },
      {
        q: "How long are aptitude tests typically?",
        a: "Usually 60-90 minutes with 50-100 questions. Practice with timer to improve speed. Sections are often individually timed, so you can't switch between them."
      }
    ]
  },
  {
    id: 2,
    title: "Coding / Written Test",
    icon: Code,
    color: "bg-accent/10 text-accent border-accent/20",
    questions: [
      {
        q: "What programming languages should I know?",
        a: "Master at least one language completely - C++, Java, or Python are preferred. Know syntax, built-in functions, and standard libraries. C++ is fastest for competitive programming, Python for readability."
      },
      {
        q: "What topics are most important for coding rounds?",
        a: "Arrays, Strings, Linked Lists, Trees, Graphs, Dynamic Programming, Sorting & Searching, Recursion, Stack & Queue, Hash Maps. Focus on patterns like Two Pointers, Sliding Window, BFS/DFS."
      },
      {
        q: "How do I improve my problem-solving speed?",
        a: "Solve at least 2-3 problems daily on LeetCode, HackerRank, or CodeChef. Start with Easy problems, then Medium. Understand the pattern, not just the solution. Time yourself while practicing."
      },
      {
        q: "What if I can't solve a problem during the test?",
        a: "Write pseudocode or brute force approach first - partial solutions get partial marks. Add comments explaining your logic. Show your thought process even if the solution isn't optimal."
      },
      {
        q: "How many DSA problems should I solve before placements?",
        a: "Aim for 300-400 quality problems covering all topics. Focus on understanding patterns rather than memorizing solutions. Revise solved problems periodically."
      },
      {
        q: "Are coding tests conducted online or on paper?",
        a: "Most are online using platforms like HackerRank, Codility, or custom company platforms. Some companies have pen-paper coding rounds. Practice both - typing code and writing on paper."
      }
    ]
  },
  {
    id: 3,
    title: "Technical Interview",
    icon: Users,
    color: "bg-warning/10 text-warning border-warning/20",
    questions: [
      {
        q: "What is Object-Oriented Programming (OOP)?",
        a: "OOP is a programming paradigm based on objects containing data (attributes) and code (methods). Four pillars: Encapsulation (data hiding), Inheritance (code reuse), Polymorphism (many forms), Abstraction (hiding complexity). Give real-world examples like 'Car is a class, your car is an object'."
      },
      {
        q: "Explain the difference between Stack and Heap memory.",
        a: "Stack: Static memory allocation, stores local variables and function calls, LIFO structure, faster access, limited size. Heap: Dynamic memory allocation, stores objects and global variables, slower access, larger size, manual memory management needed."
      },
      {
        q: "What is the difference between SQL and NoSQL databases?",
        a: "SQL: Structured, table-based, fixed schema, ACID compliant, vertical scaling (MySQL, PostgreSQL). NoSQL: Unstructured, flexible schema, BASE properties, horizontal scaling, types include Document (MongoDB), Key-Value (Redis), Graph (Neo4j)."
      },
      {
        q: "Explain your final year project in detail.",
        a: "Use STAR method: Situation (problem statement), Task (your role), Action (technologies used, challenges faced), Result (outcome, learnings). Know every line of code you wrote. Be ready for deep-dive questions on your tech stack."
      },
      {
        q: "What is DBMS normalization?",
        a: "Process of organizing database to reduce redundancy. 1NF: Atomic values. 2NF: Remove partial dependencies. 3NF: Remove transitive dependencies. BCNF: Every determinant is a candidate key. Know when to denormalize for performance."
      },
      {
        q: "What are the different types of joins in SQL?",
        a: "INNER JOIN: Only matching rows. LEFT JOIN: All from left + matching from right. RIGHT JOIN: All from right + matching from left. FULL OUTER JOIN: All rows from both tables. CROSS JOIN: Cartesian product."
      },
      {
        q: "Explain Time and Space Complexity.",
        a: "Time Complexity: How runtime grows with input size. Space Complexity: Memory usage growth. Big O notation: O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n²) quadratic, O(2^n) exponential. Always aim for optimal complexity."
      }
    ]
  },
  {
    id: 4,
    title: "Managerial / Behavioral",
    icon: Briefcase,
    color: "bg-success/10 text-success border-success/20",
    questions: [
      {
        q: "Tell me about a time you faced a conflict in a team.",
        a: "Use STAR format. Describe the situation objectively, your specific role, actions you took to resolve it (active listening, finding common ground, compromise), and positive outcome. Show maturity and conflict resolution skills. Never blame others."
      },
      {
        q: "Describe a challenging project and how you handled it.",
        a: "Pick a project with genuine challenges. Explain obstacles (technical, time constraints, team issues), your problem-solving approach, resources you utilized, outcome and learnings. Show resilience and growth mindset."
      },
      {
        q: "Where do you see yourself in 5 years?",
        a: "Show ambition aligned with the company's growth. Mention skill development, leadership aspirations, and contribution to the organization. Avoid unrealistic goals or mentioning competitor companies. Research the company's career paths beforehand."
      },
      {
        q: "Why should we hire you?",
        a: "Highlight unique combination of skills, relevant experience, cultural fit, and enthusiasm. Connect your strengths to job requirements. Give specific examples. Show how you'll add value from day one. Be confident, not arrogant."
      },
      {
        q: "How do you handle pressure and tight deadlines?",
        a: "Share specific examples. Mention prioritization, breaking tasks into smaller chunks, seeking help when needed, staying calm. Show you've delivered under pressure before. Discuss work-life balance awareness."
      },
      {
        q: "What is your biggest weakness?",
        a: "Be genuine but strategic. Choose a real weakness that's not critical for the role. More importantly, explain what you're doing to improve it. Example: 'I used to struggle with public speaking, so I joined a speaking club and now present in team meetings regularly.'"
      }
    ]
  },
  {
    id: 5,
    title: "HR Interview",
    icon: MessageSquare,
    color: "bg-primary/10 text-primary border-primary/20",
    questions: [
      {
        q: "Tell me about yourself.",
        a: "Structure: Present (current role/studies), Past (relevant background), Future (career goals). Keep it 2-3 minutes. Focus on professional aspects. Mention key achievements. End with why you're excited about this opportunity."
      },
      {
        q: "Why do you want to join our company?",
        a: "Research the company thoroughly - products, culture, recent news, values. Connect your goals with their mission. Be specific about what excites you. Mention growth opportunities. Show genuine interest, not generic answers."
      },
      {
        q: "What are your salary expectations?",
        a: "Research market rates for the role and your experience level. Give a range, not a fixed number. Say 'Based on my research and skills, I expect X-Y range, but I'm open to discussion.' Don't undersell yourself."
      },
      {
        q: "Are you willing to relocate?",
        a: "Be honest but flexible. If yes, show enthusiasm for new experiences. If no, explain politely and ask about remote options. Research company locations beforehand. Don't commit to something you can't follow through."
      },
      {
        q: "Do you have any questions for us?",
        a: "Always ask 2-3 thoughtful questions! About the role: 'What does a typical day look like?' About growth: 'What are the learning opportunities?' About culture: 'How would you describe the team dynamics?' Avoid asking about leaves or salary in first round."
      },
      {
        q: "What do you know about our company?",
        a: "Mention company's products/services, founding year, key achievements, recent news, company values, and market position. Show you've done your homework. Connect your knowledge to why you want to work there."
      },
      {
        q: "When can you join?",
        a: "Be realistic about your notice period or availability. If you're a fresher, you can say 'immediately' or mention your semester end date. Don't commit to a date you can't meet. Ask about their expected joining timeline."
      }
    ]
  }
];

// DO's and DON'Ts data
const dosAndDonts = {
  dos: [
    "Arrive 15-20 minutes early for offline interviews",
    "Dress formally in clean, ironed clothes",
    "Maintain eye contact and confident body language",
    "Listen carefully before answering - take a moment to think",
    "Use the STAR method for behavioral questions",
    "Carry multiple copies of your resume",
    "Research the company thoroughly before the interview",
    "Ask thoughtful questions at the end",
    "Send a thank-you email within 24 hours",
    "Be honest about what you don't know - offer to learn",
    "Speak clearly and at a moderate pace",
    "Show enthusiasm and genuine interest in the role"
  ],
  donts: [
    "Don't badmouth previous employers or colleagues",
    "Don't lie about your skills or experience",
    "Don't interrupt the interviewer",
    "Don't give one-word answers - elaborate with examples",
    "Don't check your phone during the interview",
    "Don't be overconfident or arrogant",
    "Don't discuss salary in the first round (unless asked)",
    "Don't speak negatively about your college or professors",
    "Don't give memorized, robotic answers",
    "Don't be late - it creates a terrible first impression",
    "Don't forget to prepare questions for the interviewer",
    "Don't panic if you don't know an answer - stay calm"
  ]
};

const InterviewPrep = () => {
  const [activeRound, setActiveRound] = useState<number | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<{ [key: number]: number | null }>({});

  const toggleRound = (roundId: number) => {
    setActiveRound(activeRound === roundId ? null : roundId);
  };

  const toggleQuestion = (roundId: number, questionIdx: number) => {
    setActiveQuestions(prev => ({
      ...prev,
      [roundId]: prev[roundId] === questionIdx ? null : questionIdx
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              🎯 Step-by-Step Preparation
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Interview <span className="gradient-text">Preparation</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Master each interview round with structured questions and expert answers. Click on a round to explore common questions.
            </p>
          </div>

          {/* Interview Rounds Section */}
          <div className="max-w-4xl mx-auto mb-16 space-y-4">
            {interviewRounds.map((round) => (
              <div 
                key={round.id}
                className="rounded-xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* Round Header */}
                <button
                  onClick={() => toggleRound(round.id)}
                  className={cn(
                    "w-full flex items-center justify-between p-5 transition-all duration-300",
                    activeRound === round.id ? "bg-secondary/50" : "hover:bg-secondary/30"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center border", round.color)}>
                      <round.icon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <Badge variant="outline" className="mb-1 text-xs">
                        Round {round.id}
                      </Badge>
                      <h3 className="font-display text-lg font-semibold">{round.title}</h3>
                    </div>
                  </div>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform duration-300",
                      activeRound === round.id && "rotate-180"
                    )}
                  />
                </button>

                {/* Questions Section */}
                {activeRound === round.id && (
                  <div className="border-t border-border/50 bg-secondary/20">
                    <div className="p-4 space-y-2">
                      {round.questions.map((item, idx) => (
                        <div 
                          key={idx}
                          className="rounded-lg overflow-hidden border border-border/30 bg-card/80"
                          style={{
                            animation: `fadeIn 0.3s ease-out forwards`,
                            animationDelay: `${idx * 0.05}s`,
                            opacity: 0
                          }}
                        >
                          {/* Question */}
                          <button
                            onClick={() => toggleQuestion(round.id, idx)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/30 transition-colors"
                          >
                            <span className="font-medium text-sm pr-4">{item.q}</span>
                            <ChevronRight 
                              className={cn(
                                "w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200",
                                activeQuestions[round.id] === idx && "rotate-90"
                              )}
                            />
                          </button>

                          {/* Answer */}
                          {activeQuestions[round.id] === idx && (
                            <div className="px-4 pb-4">
                              <div className="p-4 rounded-lg bg-primary/5 border-l-4 border-primary text-sm text-muted-foreground leading-relaxed">
                                {item.a}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* DO's and DON'Ts Section */}
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8">
              <Badge 
                className="mb-4 bg-destructive/10 text-destructive border-destructive/30 hover:bg-destructive/20"
                variant="outline"
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
                MANDATORY FOR PLACEMENTS
              </Badge>
              <h2 className="font-display text-3xl font-bold mb-2">
                Interview Rules You <span className="text-destructive">MUST</span> Follow
              </h2>
              <p className="text-muted-foreground">
                Ignoring these rules is the fastest way to fail interviews. Read carefully!
              </p>
            </div>

            {/* DO's and DON'Ts Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* DO's Card */}
              <Card className="border-2 border-success/30 bg-success/5 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-success" />
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-success" />
                    </div>
                    <CardTitle className="text-2xl text-success">DO's</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {dosAndDonts.dos.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg bg-card/80 border border-success/20 hover:border-success/40 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* DON'Ts Card */}
              <Card className="border-2 border-destructive/30 bg-destructive/5 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-destructive" />
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                      <XCircle className="w-6 h-6 text-destructive" />
                    </div>
                    <CardTitle className="text-2xl text-destructive">DON'Ts</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {dosAndDonts.donts.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg bg-card/80 border border-destructive/20 hover:border-destructive/40 transition-colors"
                    >
                      <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Bottom Warning */}
            <div className="mt-8 p-4 rounded-xl bg-warning/10 border border-warning/30 flex items-center gap-4">
              <AlertTriangle className="w-8 h-8 text-warning shrink-0" />
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Pro Tip:</span> Print this checklist and review it before every interview. 
                Companies reject candidates for behavioral red flags more often than technical mistakes. Your attitude matters as much as your skills!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
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

export default InterviewPrep;


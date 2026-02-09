import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Send, Bot, User, Sparkles, BookOpen, Download, Copy, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  "Explain the difference between stack and queue with examples",
  "What are the ACID properties in database management?",
  "Derive the equation for simple harmonic motion",
  "Explain OSI model layers with their functions",
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: generateMockResponse(userMessage.content),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleCopy = async (content: string, id: string) => {
    await navigator.clipboard.writeText(content);
    setCopiedId(id);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 pb-4 flex flex-col">
        <div className="container mx-auto px-4 flex-1 flex flex-col max-w-4xl">
          {/* Header */}
          <div className="text-center py-6 border-b border-border mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Doubt Solving</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold mb-2">
              Ask Your Academic <span className="gradient-text">Doubts</span>
            </h1>
            <p className="text-muted-foreground text-sm">
              Get structured, detailed explanations for any academic question
            </p>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-4 min-h-[300px]">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center py-12">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <BookOpen className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Start a Conversation</h3>
                <p className="text-muted-foreground text-center max-w-md mb-8">
                  Ask any academic question and get a structured, easy-to-understand explanation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                  {suggestedQuestions.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="text-left p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors text-sm"
                    >
                      <span className="text-muted-foreground">{question}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl p-4",
                      message.role === "user"
                        ? "chat-bubble-user text-primary-foreground"
                        : "chat-bubble-ai"
                    )}
                  >
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">
                      {message.content}
                    </div>
                    {message.role === "assistant" && (
                      <div className="flex gap-2 mt-3 pt-3 border-t border-border/50">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-3 text-xs"
                          onClick={() => handleCopy(message.content, message.id)}
                        >
                          {copiedId === message.id ? (
                            <Check className="w-3 h-3 mr-1" />
                          ) : (
                            <Copy className="w-3 h-3 mr-1" />
                          )}
                          Copy
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-3 text-xs">
                          <Download className="w-3 h-3 mr-1" />
                          Save PDF
                        </Button>
                      </div>
                    )}
                  </div>
                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-accent" />
                    </div>
                  )}
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div className="chat-bubble-ai flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm text-muted-foreground">Generating response...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-border pt-4">
            <div className="glass-card p-3">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your academic question here..."
                className="min-h-[80px] resize-none border-0 focus-visible:ring-0 bg-transparent"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">
                    Press Enter to send
                  </Badge>
                </div>
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="btn-hero py-2 px-4"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Mock response generator (replace with actual AI integration)
function generateMockResponse(question: string): string {
  return `## Answer to Your Question

**Topic:** ${question.slice(0, 50)}...

### Key Points:

1. **Definition:** This concept refers to a fundamental principle in computer science/mathematics that helps us understand how data is organized and processed.

2. **Main Characteristics:**
   • Organized structure for efficient data handling
   • Follows specific rules and constraints
   • Enables faster operations and retrieval

3. **Example:**
   \`\`\`
   Step 1: Initialize the structure
   Step 2: Apply the operation
   Step 3: Verify the result
   \`\`\`

### Important Notes:
- This is a foundational concept that appears frequently in examinations
- Understanding this will help in solving related problems
- Practice with multiple examples for better clarity

### Quick Summary:
The concept involves systematic organization and manipulation of data following specific principles. It's essential for building efficient algorithms and solving complex problems.

---
*💡 Tip: Try solving practice problems to reinforce your understanding!*`;
}

export default Chat;

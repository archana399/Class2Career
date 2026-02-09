import { Link } from "react-router-dom";
import { GraduationCap, Mail, Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  Platform: [
    { name: "Academic Resources", href: "/academic" },
    { name: "Career Preparation", href: "/career" },
    { name: "AI Assistant", href: "/chat" },
  ],
  Resources: [
    { name: "Notes & Materials", href: "/academic" },
    { name: "Resume Builder", href: "/career" },
    { name: "Interview Prep", href: "/career" },
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Github, href: "#" },
  { icon: Mail, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                Class<span className="gradient-text">2</span>Career
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              Your unified platform for academic excellence and career success. From classroom learning to professional readiness.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Class2Career. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with ❤️ for students everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, BookOpen, Award, Zap } from "lucide-react";
import { useState } from "react";

/**
 * BlendedSkill Home Page
 * Design: Modern Minimalist with Gradient Accents
 * Color Palette: Navy (#0f172a), Teal (#06b6d4), Off-white (#f8fafc)
 * Typography: Poppins for headings, Inter for body
 * Key Features: Asymmetric layout, smooth interactions, accessibility-first
 */

const tracks = [
  {
    title: "Process Improvement Essentials",
    level: "Beginner → Intermediate",
    description: "Master the fundamentals of process mapping and optimization.",
    outcome: "Produce a process map and an improvement proposal suitable for interviews.",
    icon: "📊",
  },
  {
    title: "Operations Automation Fundamentals",
    level: "Intermediate",
    description: "Learn to identify and implement automation opportunities.",
    outcome: "Create an automation backlog and ROI prioritization model.",
    icon: "⚙️",
  },
  {
    title: "Payments & Financial Operations",
    level: "Intermediate",
    description: "Understand complex financial workflows and settlement models.",
    outcome: "Explain money movement flows, settlement models, and control points.",
    icon: "💳",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Choose a Track",
    description: "Select the skill aligned to your career goal and learning pace.",
    icon: "🎯",
  },
  {
    step: 2,
    title: "Learn + Apply",
    description: "Complete structured lessons paired with hands-on projects.",
    icon: "📚",
  },
  {
    step: 3,
    title: "Earn Proof",
    description: "Graduate with certificates and portfolio-ready deliverables.",
    icon: "🏆",
  },
];

const benefits = [
  {
    title: "Outcome Driven",
    description: "Finish with real deliverables you can showcase to employers.",
  },
  {
    title: "Practice First",
    description: "Apply skills through guided tasks and real-world scenarios.",
  },
  {
    title: "Structured Paths",
    description: "Know exactly what comes next at every step of your journey.",
  },
  {
    title: "Career Aligned",
    description: "Built specifically for interviews and career advancement.",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Accessibility: Skip to content link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <nav className="container flex items-center justify-between py-4">
     <div className="flex items-center">
  <img
    src="/blendedskill-logo.jpg"
    alt="BlendedSkill"
    className="h-10 md:h-12 w-auto object-contain"
  />
</div>
          
          <div className="flex items-center gap-4">
            <a href="#tracks" className="text-sm font-medium hover:text-accent transition-colors">
              Tracks
            </a>
            <a href="#how" className="text-sm font-medium hover:text-accent transition-colors">
              How It Works
            </a>
            <Button
              variant="default"
              size="sm"
              className="bg-accent text-accent-foreground hover:shadow-lg"
              onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="hero relative">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div className="badge">Professional certificates • Career-focused learning</div>

                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
                  Build job-ready skills with proof employers respect.
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  BlendedSkill delivers structured learning tracks, applied projects, and certificates designed to help you stand out in hiring conversations and advance your career.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:shadow-lg hover:bg-opacity-90"
                  >
                    Explore Learning Tracks <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-border"
                  >
                    Join Early Access
                  </Button>
                </div>
              </div>

              {/* Right: Visual Element */}
              <div className="relative h-96 lg:h-full hidden lg:flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl blur-3xl" />
                <div className="relative z-10 text-center space-y-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-accent/10 rounded-full border-2 border-accent/30">
                    <BookOpen className="w-12 h-12 text-accent" />
                  </div>
                  <p className="text-sm font-semibold text-accent">Structured Learning Paths</p>
                </div>
              </div>
            </div>

            {/* KPI Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 pt-16 border-t border-border">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="space-y-2 text-center">
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="divider-diagonal" />

        {/* Featured Tracks Section */}
        <section id="tracks" className="section bg-gradient-to-b from-secondary/5 to-background">
          <div className="container">
            <div className="space-y-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Featured Learning Tracks
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Each track is designed around real workplace scenarios and produces portfolio-ready outputs you can share with employers.
              </p>
            </div>

            <div className="grid-3">
              {tracks.map((track, idx) => (
                <Card
                  key={idx}
                  className="feature-card group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/50"
                >
                  <div className="text-4xl mb-4">{track.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{track.title}</h3>
                  <div className="badge mb-4">{track.level}</div>
                  <p className="text-sm text-muted-foreground mb-4">{track.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm">
                      <strong className="text-foreground">Outcome:</strong>{" "}
                      <span className="text-muted-foreground">{track.outcome}</span>
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="divider-diagonal" />

        {/* How It Works Section */}
        <section id="how" className="section">
          <div className="container">
            <div className="space-y-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                How BlendedSkill Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A simple, career-aligned loop designed to move learners from curiosity to proof.
              </p>
            </div>

            <div className="grid-3">
              {howItWorks.map((item) => (
                <div
                  key={item.step}
                  className="feature-card relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="divider-diagonal" />

        {/* CTA Section */}
        <section id="cta" className="section">
          <div className="container">
            <div className="cta-section">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Ready to Build Your Skills?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Join our early access program and be among the first to experience structured, career-focused learning.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <Button
                    type="submit"
                    className="bg-accent text-accent-foreground hover:shadow-lg"
                  >
                    Join Now
                  </Button>
                </form>

                {submitted && (
                  <div className="flex items-center justify-center gap-2 text-accent font-medium">
                    <CheckCircle2 className="w-5 h-5" />
                    Thanks for signing up! We'll be in touch soon.
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a href="#tracks" className="text-accent font-medium hover:underline flex items-center justify-center gap-2">
                    View Courses <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="mailto:hello@blendedskill.com" className="text-accent font-medium hover:underline flex items-center justify-center gap-2">
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card text-card-foreground border-t border-border">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">B</span>
                </div>
                <span className="font-bold">BlendedSkill</span>
              </div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} BlendedSkill. All rights reserved.
              </p>
            </div>

            <nav className="flex gap-8">
              <a href="#tracks" className="text-sm font-medium hover:text-accent transition-colors">
                Tracks
              </a>
              <a href="#how" className="text-sm font-medium hover:text-accent transition-colors">
                How It Works
              </a>
              <a href="#cta" className="text-sm font-medium hover:text-accent transition-colors">
                Get Started
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

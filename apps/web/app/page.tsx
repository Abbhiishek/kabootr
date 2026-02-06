import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/navigation";
import {
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  BarChart3,
  Shield,
  Github,
  Twitter,
  MessageCircle,
  Check,
  Star,
  Mail,
  Users,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Noise Overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation with Mobile Menu */}
      <Navigation />

      {/* Hero Section - Copywriting: Clear value prop, specific benefits */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/20 rounded-full blur-[128px] animate-float delay-700" />

        <div className="container relative z-10 text-center py-20 md:py-32">
          {/* Marketing Psychology: Social proof badge */}
          <Badge variant="accent" className="mb-6 animate-fade-up">
            <Sparkles className="w-3 h-3 mr-1" />
            Trusted by 50,000+ marketers worldwide
          </Badge>

          {/* Copywriting: Headline with clear outcome */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-up delay-100">
            Stop Losing Leads to
            <br />
            <span className="text-gradient">Bounced Emails</span>
          </h1>

          {/* Copywriting: Subheadline with specific benefit */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up delay-200">
            Create entire email campaigns with a single prompt. Our AI writes,
            validates, and sends your emails with{" "}
            <span className="text-primary font-semibold">
              99.9% deliverability
            </span>{" "}
            — so every message reaches real inboxes.
          </p>

          {/* CTAs - Copywriting: Action-oriented, clear value */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up delay-300">
            <Button size="xl" asChild className="w-full sm:w-auto">
              <Link href="/register">
                Create Your First Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="w-full sm:w-auto"
            >
              <Link href="https://github.com/kabootr">
                <Github className="mr-2 h-5 w-5" />
                Star on GitHub
              </Link>
            </Button>
          </div>

          {/* Marketing Psychology: Social proof with numbers */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 pt-8 border-t border-border/50 animate-fade-up delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-mono text-gradient">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">
                Deliverability Rate
              </div>
            </div>
            <Separator
              orientation="vertical"
              className="h-12 hidden md:block"
            />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-mono text-gradient">
                10M+
              </div>
              <div className="text-sm text-muted-foreground">
                Emails Delivered
              </div>
            </div>
            <Separator
              orientation="vertical"
              className="h-12 hidden md:block"
            />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-mono text-gradient">
                0
              </div>
              <div className="text-sm text-muted-foreground">
                Bounced Messages
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section - Marketing Psychology: Show, don't tell */}
      <section className="section bg-secondary/30">
        <div className="container">
          <Card className="max-w-4xl mx-auto overflow-hidden border-primary/20">
            <div className="flex items-center gap-2 px-4 py-3 bg-card/50 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">
                kabootr-campaign.ai
              </span>
            </div>
            <CardContent className="p-6 space-y-6">
              {/* User prompt */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center text-sm font-bold text-primary-foreground">
                  You
                </div>
                <div className="flex-1 p-4 rounded-lg bg-muted/50 border border-border">
                  <p className="text-sm">
                    Create a 5-email welcome sequence for new SaaS signups.
                    Include onboarding tips, feature highlights, and a 30%
                    discount offer on day 7.
                  </p>
                </div>
              </div>

              {/* AI response */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-primary/50 bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 space-y-3">
                  {[
                    { day: "Instant", title: "Welcome & Quick Start Guide" },
                    { day: "Day 2", title: "Your First 3 Quick Wins" },
                    { day: "Day 5", title: "Advanced Features Deep Dive" },
                    { day: "Day 7", title: "Exclusive 30% Off — Limited Time" },
                    { day: "Day 14", title: "Success Story + Next Steps" },
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20 animate-slide-in-right"
                      style={{ animationDelay: `${i * 150}ms` }}
                    >
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                        {step.day}
                      </span>
                      <span className="flex-1 text-sm">{step.title}</span>
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section - Copywriting: Benefits over features */}
      <section id="features" className="section">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Features
            </Badge>
            {/* Copywriting: Problem-focused headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Everything you need to stop wasting time on emails
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Spend 5 minutes instead of 5 hours. Let AI handle the writing
              while you focus on strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature cards with benefits-focused copy */}
            {[
              {
                icon: Sparkles,
                title: "Describe It, Done",
                description:
                  "Tell the AI what you want in plain English. It generates complete email sequences with subject lines, body copy, and CTAs — ready to send.",
              },
              {
                icon: Shield,
                title: "Zero Bounces, Zero Stress",
                description:
                  "Every email is validated before sending. Your sender reputation stays protected, and every message reaches a real inbox.",
              },
              {
                icon: Target,
                title: "Send to the Right People",
                description:
                  "AI automatically segments your audience based on behavior. The right message reaches the right person at the right time.",
              },
              {
                icon: Zap,
                title: "Set It and Forget It",
                description:
                  "Build automation workflows visually. Trigger emails based on user actions, delays, or custom conditions — no code required.",
              },
              {
                icon: BarChart3,
                title: "Know What's Working",
                description:
                  "Track opens, clicks, and conversions in real-time. AI suggests improvements based on what's actually driving results.",
              },
              {
                icon: Github,
                title: "Own Your Platform",
                description:
                  "Fully open source and self-hostable. No vendor lock-in, no surprise pricing changes. Your data, your rules.",
              },
            ].map((feature, i) => (
              <Card key={i} className="card-hover group">
                <CardContent className="p-6">
                  <div className="mb-4 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Marketing Psychology: Reduce perceived complexity */}
      <section id="how-it-works" className="section bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              From idea to inbox in 4 simple steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No more staring at blank templates. Just describe what you want.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: "01",
                title: "Describe your campaign",
                description:
                  "Tell Kabootr your goal, audience, and tone. 'Create a welcome series for new users' is all it takes.",
              },
              {
                step: "02",
                title: "Review the AI draft",
                description:
                  "AI generates complete emails with subject lines, content, and CTAs. Edit anything or regenerate with new instructions.",
              },
              {
                step: "03",
                title: "Set your triggers",
                description:
                  "Define when emails send: immediately, after delays, or based on user actions. Visual builder, no code needed.",
              },
              {
                step: "04",
                title: "Launch and optimize",
                description:
                  "Hit send. AI monitors performance and suggests improvements based on what's driving opens and clicks.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-primary bg-background flex items-center justify-center font-mono font-bold text-primary">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Marketing Psychology: Specific numbers build trust */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "99.9%", label: "Deliverability Rate", icon: Mail },
              { value: "3.2x", label: "Higher Open Rates", icon: TrendingUp },
              { value: "85%", label: "Time Saved", icon: Zap },
              { value: "50K+", label: "Happy Users", icon: Users },
            ].map((stat, i) => (
              <Card key={i} className="text-center card-hover">
                <CardContent className="p-8">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold font-mono text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Marketing Psychology: Social proof, authority */}
      <section id="testimonials" className="section bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Marketers are shipping faster with Kabootr
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands who switched from hours of work to minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "We went from 4 hours per campaign to 15 minutes. The AI gets our brand voice right every time.",
                author: "Sarah Kim",
                role: "Head of Marketing, TechFlow",
                initials: "SK",
              },
              {
                quote:
                  "Our deliverability jumped from 87% to 99.9%. The zero-bounce feature alone paid for itself 10x over.",
                author: "Marcus Rodriguez",
                role: "Founder, GrowthLab",
                initials: "MR",
              },
              {
                quote:
                  "Finally an email tool that's open source. Self-hosting took 10 minutes and the AI rivals enterprise tools.",
                author: "James Park",
                role: "CTO, StartupHQ",
                initials: "JP",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4 text-yellow-500">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-sm font-bold text-primary-foreground">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Marketing Psychology: Urgency, loss aversion, low commitment */}
      <section className="section">
        <div className="container">
          <Card className="relative overflow-hidden border-primary/30">
            <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
            <CardContent className="relative z-10 p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Stop losing leads to bounced emails
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Join 50,000+ marketers who ship campaigns in minutes, not hours.
                Free forever for up to 1,000 contacts.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="xl" asChild>
                  <Link href="/register">
                    Start Free — No Credit Card
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#">Book a Demo</Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Free plan includes 1,000 contacts • No credit card required •
                Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-sm font-bold text-primary-foreground">
                  K
                </div>
                <span className="text-xl font-bold">Kabootr</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                AI-powered email marketing that actually delivers. Open source,
                zero bounce, infinite possibilities.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Product</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Resources</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Kabootr. Open source under MIT License.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/kabootr"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/kabootr"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://discord.gg/kabootr"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

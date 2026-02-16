import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Globe, Zap, BarChart3, Layers, Brain, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-background">
      {/* Background Gradients & Patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-200 h-200 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-accent/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" /> */}
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Content */}
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
              Trusted Salesforce Partner Since 2012
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground text-balance">
              Empowering Growth Through <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-300%">
                Innovation, Integration, and Talent
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              From high-impact Salesforce and AI integrations to bespoke enterprise architecture and strategic talent acquisition, we provide the vision, technical depth, and elite personnel to accelerate your digital evolution. Bring us your most complex challenges; we’ll provide the solution.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact" className="inline-flex">
                <Button
                  size="lg"
                  className="bg-(--main-charcoal) h-12 px-8 text-base shadow-lg shadow-primary/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  Start Transformation
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="/case-studies" className="inline-flex">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-base border-primary/20 hover:bg-primary/5 transition-all"
                >
                  View Success Stories
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm font-medium text-muted-foreground mb-4">Trusted by industry leaders in:</p>
              <div className="grid grid-cols-3 gap-y-2 gap-x-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Finance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Banking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Utilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Public Sector</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Health</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Retail</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Insurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Telecom</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Automotive</span>
                </div>
                {/* <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Defence</span>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Elements */}
          <div className="relative hidden lg:block h-full">
            {/* Abstract Dashboard/Glass Card Composition */}
            <div className="relative mx-auto w-full max-w-md xl:max-w-xl 2xl:max-w-160 aspect-square perspective-1000">

              {/* Card 1: Scalable Architecture (Top Right) */}
              <div className="absolute top-8 right-1 lg:w-52 xl:w-64 p-4 rounded-2xl bg-card/80 backdrop-blur-xl border border-white/20 shadow-2xl z-20 animate-float-slow xl:top-12 xl:-right-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Layers className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Scalable Architecture</div>
                    <div className="text-xs text-muted-foreground">up to 60% Reduction</div>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-blue-500 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Card 2: Strategic Predictive Intelligence (Bottom Left) */}
              <div className="absolute bottom-8 left-0 lg:w-56 xl:w-72 p-4 rounded-2xl bg-card/80 backdrop-blur-xl border border-white/20 shadow-2xl z-30 animate-float-delayed xl:bottom-16 xl:-left-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <Zap className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Strategic Predictive Intelligence</div>
                    <div className="text-xs text-muted-foreground">Data insights for your next big move</div>
                  </div>
                </div>
                <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden mt-2">
                  <div className="h-full w-[90%] bg-linear-to-r from-amber-500 to-amber-400 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Card 3: Growth via Agentic AI (Center - Anchored) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-52 xl:w-64 p-4 rounded-2xl bg-card/80 backdrop-blur-xl border border-white/20 shadow-2xl z-10 animate-float-slow animation-delay-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-pink-500/10">
                    <Bot className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Growth via Agentic AI</div>
                    <div className="text-xs text-muted-foreground">Using latest AI tools</div>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-pink-500 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Card 4: Global Ecosystem Orchestration (Top Left) */}
              <div className="absolute top-2 left-1 lg:w-56 xl:w-72 p-5 rounded-2xl bg-card/90 backdrop-blur-xl border border-white/20 shadow-2xl z-40 animate-float-slow animation-delay-700 xl:top-8 xl:left-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Globe className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Global Ecosystem</div>
                    <div className="text-xs text-muted-foreground">Handling complex setups</div>
                  </div>
                </div>
                <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden mt-1">
                  <div className="h-full w-[95%] bg-linear-to-r from-emerald-500 to-emerald-400 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Decorative Blobs behind cards */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-accent/30 rounded-full blur-[80px] -z-10" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

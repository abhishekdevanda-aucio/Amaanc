import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Globe, Zap, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Background Gradients & Patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-200 h-200 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-accent/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Content */}
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
              Trusted Salesforce Partner Since 2012
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground text-balance">
              Empowering <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-300%">
                Digital Enterprise
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              We architect scalable Salesforce solutions and AI integrations that drive operational excellence for Fortune 500 companies.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25 transition-all hover:scale-105" asChild>
                <Link href="/contact">
                  Start Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/20 hover:bg-primary/5 transition-all" asChild>
                <Link href="/case-studies">
                  View Success Stories
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm font-medium text-muted-foreground mb-4">Trusted by industry leaders in:</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-foreground/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Financial Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Healthcare</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Manufacturing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Elements */}
          <div className="relative hidden lg:block">
            {/* Abstract Dashboard/Glass Card Composition */}
            <div className="relative w-full aspect-square max-w-150 mx-auto perspective-1000">

              {/* Floating Cards */}
              <div className="absolute top-10 right-10 w-64 p-4 rounded-2xl bg-card/80 backdrop-blur-xl border border-white/20 shadow-2xl z-20 animate-float-slow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Globe className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Global Scale</div>
                    <div className="text-xs text-muted-foreground">Multi-region Rollout</div>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-blue-500 rounded-full" />
                </div>
              </div>

              <div className="absolute bottom-20 left-10 w-72 p-4 rounded-2xl bg-card/80 backdrop-blur-xl border border-white/20 shadow-2xl z-30 animate-float-delayed">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Zap className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">AI Integration</div>
                    <div className="text-xs text-muted-foreground">Predictive Analytics</div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 bg-purple-500/10 rounded-md" />
                  ))}
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 p-5 rounded-2xl bg-card/90 backdrop-blur-xl border border-white/20 shadow-2xl z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-500/10">
                      <BarChart3 className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Growth Metric</div>
                      <div className="text-xs text-muted-foreground">+45% Efficiency</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-green-600 bg-green-50 border-green-200">
                    +24.5%
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-muted rounded-full" />
                  <div className="h-2 w-3/4 bg-muted rounded-full" />
                  <div className="h-2 w-1/2 bg-muted rounded-full" />
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

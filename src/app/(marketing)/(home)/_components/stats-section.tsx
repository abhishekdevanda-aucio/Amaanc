import Link from "next/link";
import { ArrowRight, Trophy, CheckCircle2, Code2, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    value: "85+",
    label: "Enterprise Solutions",
    icon: <CheckCircle2 className="w-5 h-5 text-accent" />
  },
  {
    value: "50+",
    label: "Custom API Integrations",
    icon: <Code2 className="w-5 h-5 text-accent" />
  },
  {
    value: "20+",
    label: "AI-Driven Automations",
    icon: <Bot className="w-5 h-5 text-accent" />
  },
  {
    value: "15+",
    label: "Years of Mastery",
    icon: <Trophy className="w-5 h-5 text-accent" />
  },
];

export function StatsSection() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="relative rounded-[2.5rem] overflow-hidden bg-primary text-primary-foreground shadow-2xl">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[250%_250%] animate-gradient-slow" />
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl mix-blend-overlay" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl mix-blend-overlay" />

        {/* Grid Pattern overlay */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" /> */}

        <div className="relative z-10 grid md:grid-cols-2 gap-12 p-8 md:p-16 items-center">

          {/* Left Column: CTA */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
              Enterprise-Grade <br />
              <span className="text-primary-foreground">Salesforce Solutions</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Excellence is not an act, but a habit formed over 13 years of delivery. We specialize in transforming your most intricate business requirements into scalable, future-proof architectures that drive measurable ROI.            </p>
            <Link href="/contact" className="inline-flex">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 group inline-flex items-center gap-2"
              >
                Book a Consultation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

          </div>

          {/* Right Column: Stats Display */}
          <div className="relative">
            {/* Glassmorphism Card for Stats */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-inner">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-0 lg:divide-y lg:divide-white/10">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-6 py-4 first:pt-0 last:pb-0">
                    <div className="hidden lg:flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-white/5 shadow-sm">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-white tracking-tight mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative floaters */}
            <div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

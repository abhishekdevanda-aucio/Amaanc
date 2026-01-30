"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/layout/logo"

const services = [
  {
    title: "Salesforce Solutions",
    href: "/services/salesforce",
    description: "Sales Cloud, Service Cloud, Marketing Cloud implementations",
  },
  {
    title: "AI & Analytics",
    href: "/services/ai-analytics",
    description: "Predictive analytics, machine learning, and AI integration",
  },
  {
    title: "System Integration",
    href: "/services/integration",
    description: "API development, middleware, and data synchronization",
  },
  {
    title: "Custom Development",
    href: "/services/custom-development",
    description: "Bespoke solutions tailored to your business needs",
  },
]

const industries = [
  { title: "Financial Services", href: "/industries/financial-services" },
  { title: "Healthcare", href: "/industries/healthcare" },
  { title: "Manufacturing", href: "/industries/manufacturing" },
  { title: "Retail & E-commerce", href: "/industries/retail" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <Logo />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <p className="text-sm font-medium leading-none">{service.title}</p>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground hover:text-muted">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-50 gap-2 p-4">
                    {industries.map((industry) => (
                      <li key={industry.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={industry.href}
                            className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            {industry.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/case-studies" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Case Studies
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/blogs" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Insights
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* <Button variant="ghost" asChild>
              <Link href="/contact">Contact</Link>
            </Button> */}
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 sm:w-100">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                <MobileNavSection title="Services" items={services} setOpen={setMobileMenuOpen} />
                <MobileNavSection title="Industries" items={industries} setOpen={setMobileMenuOpen} />
                <Link
                  href="/case-studies"
                  className="text-lg font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link href="/about" className="text-lg font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
                <Link href="/blog" className="text-lg font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Insights
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  {/* <Button variant="outline" asChild>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Contact
                    </Link>
                  </Button> */}
                  <Button asChild>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MobileNavSection({
  title,
  items,
  setOpen,
}: {
  title: string
  items: { title: string; href: string; description?: string }[]
  setOpen: (open: boolean) => void
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-lg font-medium py-2"
      >
        {title}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
      </button>
      {isExpanded && (
        <div className="pl-4 flex flex-col gap-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground py-1"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

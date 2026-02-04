"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/layout/logo"
import { navigationData } from "@/lib/navigation"
import type { NavigationItem } from "@/lib/navigation"
import type { IndustryNavItem } from "@/lib/data/get-industries-nav"

interface HeaderProps {
  industries: IndustryNavItem[]
}

export function Header({ industries }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Build navigation with dynamic industries
  const navData = useMemo(() => {
    return navigationData.map((item) => {
      if (item.title === "Industries") {
        return {
          ...item,
          items: industries.map((ind) => ({
            title: ind.name,
            href: `/industries/${ind.slug}`,
            description: ind.description
          }))
        }
      }
      return item
    })
  }, [industries])

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
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navData.map((item) => {
                // Mega Menu for grouped items (Services)
                if (item.groupedItems) {
                  return (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger className="bg-transparent">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-150 gap-3 p-4 md:w-190 lg:w-200 grid-cols-3">
                          <div className="col-span-3 grid grid-cols-3 gap-4">
                            {item.groupedItems.map((group) => (
                              <div key={group.category} className="space-y-2">
                                <h4 className="font-medium leading-none text-primary">{group.category}</h4>
                                <ul className="space-y-1">
                                  {group.items.map((subItem) => (
                                    <li key={subItem.title}>
                                      <NavigationMenuLink href={subItem.href} className="block select-none rounded-sm p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                        {subItem.title}
                                      </NavigationMenuLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                }

                // Dropdown for regular items (Industries, Engage)
                if (item.items) {
                  return (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger className="bg-transparent">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink href={subItem.href} className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                {subItem.description && (
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-primary-foreground">
                                    {subItem.description}
                                  </p>
                                )}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                }
                return (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink href={item.href} className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact-us">
              <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger className="lg:hidden" render={<Button variant="ghost" size="icon" />}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[400px] flex flex-col p-0">
              <div className="p-6 border-b border-border/10">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>
                <div className="flex items-center justify-between">
                  <Logo />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4">
                <nav className="flex flex-col gap-0">
                  {navData.map((item) => (
                    <MobileNavSection key={item.title} item={item} setOpen={setMobileMenuOpen} />
                  ))}
                </nav>
              </div>

              <div className="p-6 border-t border-border/10">
                <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full text-base font-semibold py-6 shadow-lg" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MobileNavSection({
  item,
  setOpen,
}: {
  item: NavigationItem
  setOpen: (open: boolean) => void
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isExpandable = item.groupedItems || item.items

  if (!isExpandable) {
    return (
      <Link
        href={item.href}
        className="block w-full text-lg font-semibold py-4 text-foreground/80 hover:text-primary transition-colors border-b border-border/5"
        onClick={() => setOpen(false)}
      >
        {item.title}
      </Link>
    )
  }

  return (
    <div className="border-b border-border/5">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-lg font-semibold py-4 text-foreground/80 hover:text-primary transition-colors"
      >
        {item.title}
        <ChevronDown
          className={cn("h-5 w-5 transition-transform duration-200 text-muted-foreground", isExpanded && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out overflow-hidden",
          isExpanded ? "grid-rows-[1fr] opacity-100 mb-4" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0 pl-4 border-l-2 border-border/40 ml-2 space-y-4 pt-2">
          {item.groupedItems ? (
            item.groupedItems.map(group => (
              <div key={group.category} className="space-y-2">
                <h5 className="text-sm font-medium text-primary uppercase tracking-wider opacity-80">{group.category}</h5>
                {group.items.map(subItem => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className="block py-1.5 text-base text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            ))
          ) : (
            item.items?.map((subItem) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                className="block py-1.5 text-base text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                {subItem.title}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

"use client"

import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"
import React from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/layout/theme-toggle"

export function DashboardHeader() {
  const pathname = usePathname()

  // Split pathname into segments
  const segments = pathname.split('/').filter(Boolean)

  // Filter out (admin) if it's in the URL, usually it's not but just in case
  const cleanSegments = segments.filter(s => s !== '(admin)')

  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16">
      <div className="flex w-full items-center gap-2 px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 "
          />
          <Breadcrumb>
            <BreadcrumbList>
              {cleanSegments.map((segment, index) => {
                const href = `/${cleanSegments.slice(0, index + 1).join('/')}`
                const isLast = index === cleanSegments.length - 1
                const title = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')

                return (
                  <React.Fragment key={href}>
                    <BreadcrumbItem className="hidden md:block">
                      {isLast ? (
                        <BreadcrumbPage>{title}</BreadcrumbPage>
                      ) : (
                        <Link href={href}>
                          {title}
                        </Link>
                      )}
                    </BreadcrumbItem>
                    {!isLast && <BreadcrumbSeparator className="hidden md:block" />}
                  </React.Fragment>
                )
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

"use client"

import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"
import React from "react"
import Link from "next/link"

export function DashboardHeader() {
  const pathname = usePathname()

  // Split pathname into segments
  const segments = pathname.split('/').filter(Boolean)

  // Filter out (admin) if it's in the URL, usually it's not but just in case
  const cleanSegments = segments.filter(s => s !== '(admin)')

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
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
                      <BreadcrumbLink asChild>
                        <Link href={href}>{title}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator className="hidden md:block" />}
                </React.Fragment>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="ml-auto flex items-center gap-2">
          {/* Add useful actions here later */}
        </div>
      </div>
    </header>
  )
}

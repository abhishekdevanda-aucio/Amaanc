"use client"

import {
  IconDashboard,
  IconFileDescription,
  IconFolder,
  IconUsers,
} from "@tabler/icons-react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: IconDashboard,
  },
  {
    title: "Services",
    url: "/dashboard/services",
    icon: IconFileDescription,
  },
  {
    title: "Industries",
    url: "/dashboard/industries",
    icon: IconFolder,
  },
  {
    title: "Case Studies",
    url: "/dashboard/case-studies",
    icon: IconFolder,
  },
  {
    title: "Leads",
    url: "/dashboard/leads",
    icon: IconUsers,
  },
]
export function NavLinks() {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {navLinks.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} asChild isActive={pathname === item.url}>
                <Link href={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

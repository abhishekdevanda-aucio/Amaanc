"use client"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { BookOpenText, Factory, Image, LayoutDashboard, Settings, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navGroups = [
  {
    label: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: "Content",
    items: [
      {
        title: "Assets",
        url: "/dashboard/assets",
        icon: Image,
      },
      {
        title: "Services",
        url: "/dashboard/services",
        icon: Settings,
      },
      {
        title: "Industries",
        url: "/dashboard/industries",
        icon: Factory,
      },
      {
        title: "Case Studies",
        url: "/dashboard/case-studies",
        icon: BookOpenText,
      },
    ],
  },
  {
    label: "CRM",
    items: [
      {
        title: "Leads",
        url: "/dashboard/leads",
        icon: Users,
      },
    ],
  },
]

export function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {navGroups.map((group) => (
        <SidebarGroup key={group.label}>
          <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link href={item.url} className="block">
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={
                        item.url === "/dashboard"
                          ? pathname === "/dashboard"
                          : pathname.startsWith(item.url)
                      }
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  )
}

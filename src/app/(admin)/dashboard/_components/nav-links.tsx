"use client"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { File, Folder, LayoutDashboard, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Services",
    url: "/dashboard/services",
    icon: File,
  },
  {
    title: "Industries",
    url: "/dashboard/industries",
    icon: Folder,
  },
  {
    title: "Case Studies",
    url: "/dashboard/case-studies",
    icon: Folder,
  },
  {
    title: "Leads",
    url: "/dashboard/leads",
    icon: Users,
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
              <Link href={item.url} className="block">
                <SidebarMenuButton
                  tooltip={item.title}
                  isActive={pathname === item.url}
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
  )
}

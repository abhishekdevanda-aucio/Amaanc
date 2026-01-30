import { NavUser } from "@/app/(admin)/dashboard/_components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { User } from "@supabase/supabase-js"
import { NavLinks } from "./nav-links"
import { Logo } from "@/components/layout/logo"

export function DashboardSidebar({ user }: { user: User }) {
  return (
    <Sidebar collapsible="offcanvas" >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/" className="flex items-center gap-2">
              <Logo subtext="Admin" />
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavLinks />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}

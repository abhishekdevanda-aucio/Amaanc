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
import Image from "next/image"
import { User } from "@supabase/supabase-js"
import { NavLinks } from "./nav-links"

export function DashboardSidebar({ user }: { user: User }) {
  return (
    <Sidebar collapsible="offcanvas" >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center">
                <Image
                  src="/logo/amaanc-logo.png"
                  alt="Amaanc Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto object-contain"
                  priority
                />
                <span className="ml-1 text-2xl font-bold text-primary">Amaanc</span>
              </div>
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

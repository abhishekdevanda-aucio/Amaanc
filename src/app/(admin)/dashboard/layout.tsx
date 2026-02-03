import { DashboardSidebar } from "@/app/(admin)/dashboard/_components/dashboard-sidebar"
import { DashboardHeader } from "@/app/(admin)/dashboard/_components/dashboard-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { getSession } from "@/lib/isAuthenticated"
import { Metadata } from "next"
import { redirect } from "next/navigation"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getSession()
  if (!user) {
    redirect("/login")
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
    >
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset>
          <DashboardHeader user={user} />
          <div className="flex flex-1 flex-col">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}

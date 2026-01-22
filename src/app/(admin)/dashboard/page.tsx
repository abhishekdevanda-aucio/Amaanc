import { getSession } from "@/lib/isAuthenticated";
import { redirect } from "next/navigation";
import { signOut } from "@/app/(admin)/login/_actions/auth-actions";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    LogOut,
    Home,
    User,
    Settings,
    BarChart3,
    FileText,
    Bell,
} from "lucide-react";

export default async function DashboardPage() {
    const user = await getSession();
    if (!user) {
        redirect("/login");
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Dashboard Header */}
            <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/dashboard" className="flex items-center gap-2">
                            <Image
                                src="/logo/amaanc-logo.png"
                                alt="Amaanc Logo"
                                width={36}
                                height={36}
                                className="h-8 w-auto object-contain"
                                priority
                            />
                            <span className="text-xl font-bold text-primary">Amaanc</span>
                            <Badge variant="outline" className="ml-2 text-xs">
                                Admin
                            </Badge>
                        </Link>

                        {/* Right Side */}
                        <div className="flex items-center gap-4">
                            <Button variant="ghost" size="icon" className="relative">
                                <Bell className="h-5 w-5" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
                            </Button>

                            <div className="hidden md:flex items-center gap-3 px-3 py-1.5 rounded-lg bg-muted/50">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <User className="h-4 w-4 text-primary" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-medium text-foreground">{user.email}</p>
                                    <p className="text-xs text-muted-foreground">Administrator</p>
                                </div>
                            </div>

                            <form action={signOut}>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-destructive border-destructive/30 hover:bg-destructive/10"
                                >
                                    <LogOut className="h-4 w-4 mr-2" />
                                    Sign Out
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                        Welcome back!
                    </h1>
                    <p className="text-muted-foreground">
                        Here&apos;s an overview of your admin dashboard.
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                        {
                            label: "Total Projects",
                            value: "12",
                            icon: FileText,
                            color: "text-blue-500",
                            bgColor: "bg-blue-500/10",
                        },
                        {
                            label: "Active Clients",
                            value: "8",
                            icon: User,
                            color: "text-green-500",
                            bgColor: "bg-green-500/10",
                        },
                        {
                            label: "Analytics",
                            value: "24.5%",
                            icon: BarChart3,
                            color: "text-purple-500",
                            bgColor: "bg-purple-500/10",
                        },
                        {
                            label: "Settings",
                            value: "Updated",
                            icon: Settings,
                            color: "text-orange-500",
                            bgColor: "bg-orange-500/10",
                        },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                    <p className="text-2xl font-bold text-foreground">
                                        {stat.value}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Panel */}
                    <div className="lg:col-span-2 p-6 rounded-xl border border-border bg-card">
                        <h2 className="text-xl font-semibold text-foreground mb-4">
                            Dashboard Overview
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Welcome to the protected admin dashboard. This is where you can
                            manage your Amaanc resources and settings.
                        </p>
                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                            <p className="text-sm text-primary">
                                <strong>Tip:</strong> You can customize this dashboard to show
                                the metrics and data most relevant to your needs.
                            </p>
                        </div>
                    </div>

                    {/* Side Panel */}
                    <div className="p-6 rounded-xl border border-border bg-card">
                        <h3 className="text-lg font-semibold text-foreground mb-4">
                            Quick Actions
                        </h3>
                        <div className="space-y-3">
                            <Link
                                href="/"
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                            >
                                <Home className="h-5 w-5 text-muted-foreground" />
                                <span className="text-sm font-medium">Back to Website</span>
                            </Link>
                            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left">
                                <Settings className="h-5 w-5 text-muted-foreground" />
                                <span className="text-sm font-medium">Account Settings</span>
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left">
                                <FileText className="h-5 w-5 text-muted-foreground" />
                                <span className="text-sm font-medium">View Reports</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

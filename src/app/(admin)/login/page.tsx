import { getSession } from "@/lib/isAuthenticated";
import { redirect } from "next/navigation";
import { LoginBranding } from "./_components/login-branding";
import { LoginInterface } from "./_components/login-interface";

export default async function LoginPage() {
    const user = await getSession();
    if (user) {
        redirect("/dashboard");
    }

    return (
        <div className="min-h-screen flex">
            <LoginBranding />
            <LoginInterface />
        </div>
    );
}

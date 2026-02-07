import { LoginBranding } from "./_components/login-branding";
import { LoginInterface } from "./_components/login-interface";

export default async function LoginPage() {
    return (
        <div className="min-h-screen flex">
            <LoginBranding />
            <LoginInterface />
        </div>
    );
}

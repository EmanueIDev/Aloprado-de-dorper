import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthShell titulo="Sistema de Gestão de Rebanhos">
      <LoginForm />
    </AuthShell>
  );
}

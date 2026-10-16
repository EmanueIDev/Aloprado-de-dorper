import { AuthShell } from "@/components/auth/AuthShell";
import { CadastroForm } from "@/components/auth/CadastroForm";

export default function CadastroPage() {
  return (
    <AuthShell
      titulo="Criar Conta"
      subtitulo="Gerencie seu rebanho de forma eficiente"
      compacto
    >
      <CadastroForm />
    </AuthShell>
  );
}

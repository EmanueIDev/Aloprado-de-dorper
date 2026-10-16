import { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { Logo } from "@/components/layout/Logo";

type AuthShellProps = {
  titulo: string;
  subtitulo?: string;
  compacto?: boolean;
  children: ReactNode;
};

export function AuthShell({
  titulo,
  subtitulo,
  compacto = false,
  children,
}: AuthShellProps) {
  return (
    <div
      className={`flex min-h-screen items-center justify-center bg-dorper-cream ${
        compacto ? "py-8" : ""
      }`}
    >
      <Card className="w-full max-w-md p-8 shadow-2xl">
        <div className={`flex justify-center ${compacto ? "mb-6" : "mb-8"}`}>
          <Logo className={compacto ? "h-20 w-auto" : "h-24 w-auto"} priority />
        </div>

        <h1
          className={`text-center text-3xl font-bold text-dorper-cream ${
            subtitulo ? "mb-2" : "mb-8"
          }`}
        >
          {titulo}
        </h1>
        {subtitulo && (
          <p className="mb-6 text-center text-dorper-cream/70">{subtitulo}</p>
        )}

        {children}
      </Card>
    </div>
  );
}

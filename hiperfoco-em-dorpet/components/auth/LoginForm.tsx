"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { faCircleUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { TextLink } from "@/components/ui/TextLink";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // Simulação de login - em produção, validar credenciais
    router.push("/home");
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <FormField
        id="email"
        label="Email ou Usuário"
        icone={faCircleUser}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu email ou usuário"
      />

      <FormField
        id="senha"
        label="Senha"
        icone={faLock}
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Digite sua senha"
      />

      <Button type="submit" fullWidth>
        Acessar Sistema
      </Button>

      <p className="mt-4 text-center text-dorper-cream">
        Não tem uma conta? <TextLink href="/cadastro">Cadastre-se</TextLink>
      </p>
    </form>
  );
}

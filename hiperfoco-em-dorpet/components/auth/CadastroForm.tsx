"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  faCircleUser,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { CadastroUsuario } from "@/entities/usuario";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { TextLink } from "@/components/ui/TextLink";

export function CadastroForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<CadastroUsuario>({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCadastro = (e: FormEvent) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    // Simulação de cadastro - em produção, enviar dados para API
    alert("Cadastro realizado com sucesso!");
    router.push("/");
  };

  return (
    <form onSubmit={handleCadastro} className="space-y-5">
      <FormField
        id="nome"
        label="Nome Completo"
        icone={faCircleUser}
        value={formData.nome}
        onChange={handleChange}
        placeholder="Digite seu nome completo"
      />

      <FormField
        id="email"
        label="Email"
        icone={faCircleUser}
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Digite seu email"
      />

      <FormField
        id="senha"
        label="Senha"
        icone={faLock}
        type="password"
        value={formData.senha}
        onChange={handleChange}
        placeholder="Digite sua senha"
        minLength={6}
      />

      <FormField
        id="confirmarSenha"
        label="Confirmar Senha"
        icone={faLockOpen}
        type="password"
        value={formData.confirmarSenha}
        onChange={handleChange}
        placeholder="Confirme sua senha"
        minLength={6}
      />

      <Button type="submit" fullWidth>
        Cadastrar
      </Button>

      <p className="mt-4 text-center text-dorper-cream">
        Já tem uma conta? <TextLink href="/">Faça Login</TextLink>
      </p>
    </form>
  );
}

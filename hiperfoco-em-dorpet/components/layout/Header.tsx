"use client";

import { useState } from "react";
import {
  faBars,
  faBell,
  faCaretDown,
  faCircleUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@/components/ui/IconButton";
import { Logo } from "@/components/layout/Logo";

type HeaderProps = {
  titulo: string;
};

export function Header({ titulo }: HeaderProps) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-dorper-black shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-4">
          <IconButton
            icone={faBars}
            label="Menu"
            expandido={menuAberto}
            onClick={() => setMenuAberto(!menuAberto)}
          />
          <Logo className="h-12 w-auto" priority />
          <h1 className="hidden text-xl font-bold text-dorper-cream md:block">
            {titulo}
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <IconButton icone={faBell} label="Notificações" notificacao />
          <IconButton icone={faGear} label="Configurações" />
          <IconButton
            icone={faCircleUser}
            iconeExtra={faCaretDown}
            label="Conta"
          />
        </div>
      </div>
    </header>
  );
}

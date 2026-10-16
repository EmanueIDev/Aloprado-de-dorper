import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "danger";
  fullWidth?: boolean;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variantes = {
  primary: "bg-dorper-green",
  danger: "bg-dorper-red",
};

export function Button({
  children,
  variant = "primary",
  fullWidth = false,
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const className = [
    "cursor-pointer rounded-lg py-3 font-bold text-dorper-cream transition-all hover:opacity-90",
    variantes[variant],
    fullWidth ? "block w-full text-center" : "inline-block px-8",
  ].join(" ");

  // Com href vira um link (navegação do Next); sem href, um botão comum.
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

import Link from "next/link";
import { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  children: ReactNode;
};

export function TextLink({ href, children }: TextLinkProps) {
  return (
    <Link href={href} className="font-bold text-dorper-green hover:underline">
      {children}
    </Link>
  );
}

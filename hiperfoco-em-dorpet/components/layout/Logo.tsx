import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-12 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src="/logoDorper.png"
      alt="Logo Dorper"
      width={677}
      height={674}
      priority={priority}
      className={className}
    />
  );
}

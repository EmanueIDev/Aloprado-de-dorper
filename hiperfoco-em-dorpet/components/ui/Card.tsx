import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-lg bg-dorper-black shadow-lg ${className}`}>
      {children}
    </div>
  );
}

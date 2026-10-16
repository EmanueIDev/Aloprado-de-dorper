"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type IconButtonProps = {
  icone: IconDefinition;
  label: string;
  iconeExtra?: IconDefinition;
  notificacao?: boolean;
  expandido?: boolean;
  onClick?: () => void;
};

export function IconButton({
  icone,
  label,
  iconeExtra,
  notificacao = false,
  expandido,
  onClick,
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-expanded={expandido}
      onClick={onClick}
      className="relative flex cursor-pointer items-center space-x-2 rounded-lg p-2 transition-colors hover:bg-white/10"
    >
      <FontAwesomeIcon icon={icone} size="lg" className="text-dorper-cream" />
      {iconeExtra && (
        <FontAwesomeIcon icon={iconeExtra} className="text-dorper-cream" />
      )}
      {notificacao && (
        <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
      )}
    </button>
  );
}

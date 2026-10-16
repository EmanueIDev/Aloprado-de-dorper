import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type AcaoRapidaButtonProps = {
  icone: IconDefinition;
  rotulo: string;
};

export function AcaoRapidaButton({ icone, rotulo }: AcaoRapidaButtonProps) {
  return (
    <button
      type="button"
      className="flex cursor-pointer flex-col items-center space-y-3 rounded-lg bg-dorper-black p-6 shadow-lg transition-all hover:shadow-xl"
    >
      <FontAwesomeIcon icon={icone} size="2x" className="text-dorper-green" />
      <span className="text-dorper-cream">{rotulo}</span>
    </button>
  );
}

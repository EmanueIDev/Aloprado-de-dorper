import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faArrowsRotate,
  faBell,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Atividade, TipoAtividade } from "@/entities/atividade";

const icones: Record<TipoAtividade, IconDefinition> = {
  nascimento: faPlus,
  atualizacao: faArrowsRotate,
  lembrete: faBell,
};

type AtividadeItemProps = {
  atividade: Atividade;
};

export function AtividadeItem({ atividade }: AtividadeItemProps) {
  return (
    <div className="flex items-start space-x-4 rounded-lg bg-dorper-cream/10 p-4">
      <FontAwesomeIcon
        icon={icones[atividade.tipo]}
        className="mt-1 text-dorper-green"
      />
      <div className="flex-1">
        <p className="font-semibold text-dorper-cream">{atividade.titulo}</p>
        <p className="text-dorper-cream/70">{atividade.detalhe}</p>
      </div>
    </div>
  );
}

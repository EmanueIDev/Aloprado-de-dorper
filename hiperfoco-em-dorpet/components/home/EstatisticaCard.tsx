import { Estatistica } from "@/entities/estatistica";
import { Card } from "@/components/ui/Card";

type EstatisticaCardProps = {
  estatistica: Estatistica;
};

export function EstatisticaCard({ estatistica }: EstatisticaCardProps) {
  return (
    <Card className="p-6">
      <h3 className="mb-2 text-lg font-semibold text-dorper-cream">
        {estatistica.titulo}
      </h3>
      <p className="mb-2 text-4xl font-bold text-dorper-green">
        {estatistica.valor}
      </p>
      <p className="text-dorper-cream/70">{estatistica.descricao}</p>
    </Card>
  );
}

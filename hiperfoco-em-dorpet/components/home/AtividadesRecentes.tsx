import { Atividade } from "@/entities/atividade";
import { Card } from "@/components/ui/Card";
import { AtividadeItem } from "@/components/home/AtividadeItem";

type AtividadesRecentesProps = {
  atividades: Atividade[];
};

export function AtividadesRecentes({ atividades }: AtividadesRecentesProps) {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-dorper-cream">
          Últimas Atividades
        </h2>
        <button
          type="button"
          className="cursor-pointer text-sm text-dorper-green hover:underline"
        >
          Ver todas
        </button>
      </div>

      <div className="space-y-4">
        {atividades.map((atividade) => (
          <AtividadeItem key={atividade.titulo} atividade={atividade} />
        ))}
      </div>
    </Card>
  );
}

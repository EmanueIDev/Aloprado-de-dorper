import {
  faArrowsRotate,
  faEllipsis,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Atividade } from "@/entities/atividade";
import { Estatistica } from "@/entities/estatistica";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { AcaoRapidaButton } from "@/components/home/AcaoRapidaButton";
import { AtividadesRecentes } from "@/components/home/AtividadesRecentes";
import { EstatisticaCard } from "@/components/home/EstatisticaCard";

export default function HomePage() {
  const estatisticas: Estatistica[] = [
    { titulo: "Rebanho de Ovinos", valor: "150", descricao: "animais registrados" },
    { titulo: "Rebanho de Caprinos", valor: "85", descricao: "animais registrados" },
    { titulo: "Nascimentos (Mês)", valor: "12", descricao: "novos animais" },
    { titulo: "Receita (Mês)", valor: "R$ 15.3k", descricao: "valor total" },
  ];

  const atividades: Atividade[] = [
    {
      tipo: "nascimento",
      titulo: "Novo nascimento registrado",
      detalhe: "Ovino #237 - Há 2 horas",
    },
    {
      tipo: "atualizacao",
      titulo: "Dados atualizados",
      detalhe: "Caprino #105 - Há 5 horas",
    },
    {
      tipo: "lembrete",
      titulo: "Lembrete de vacinação",
      detalhe: "Lote A - Amanhã às 10h",
    },
  ];

  return (
    <div className="min-h-screen bg-dorper-cream">
      <Header titulo="GET OVI - Gestão de Rebanhos" />

      <main className="mx-auto max-w-7xl px-4 py-8">
        <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {estatisticas.map((estatistica) => (
            <EstatisticaCard key={estatistica.titulo} estatistica={estatistica} />
          ))}
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-dorper-black">
            Ações Rápidas
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <AcaoRapidaButton icone={faPlus} rotulo="Novo Animal" />
            <AcaoRapidaButton icone={faMagnifyingGlass} rotulo="Buscar Animal" />
            <AcaoRapidaButton icone={faArrowsRotate} rotulo="Atualizar Dados" />
            <AcaoRapidaButton icone={faEllipsis} rotulo="Mais Opções" />
          </div>
        </section>

        <AtividadesRecentes atividades={atividades} />

        <div className="mt-8 text-center">
          <Button variant="danger" href="/">
            Sair do Sistema
          </Button>
        </div>
      </main>
    </div>
  );
}

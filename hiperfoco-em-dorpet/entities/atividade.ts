export type TipoAtividade = "nascimento" | "atualizacao" | "lembrete";

export type Atividade = {
  tipo: TipoAtividade;
  titulo: string;
  detalhe: string;
};

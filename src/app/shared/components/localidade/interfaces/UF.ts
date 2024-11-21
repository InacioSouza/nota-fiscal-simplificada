import { Regiao } from "./Regiao";

export interface UF {
    id: Number;
    sigla: string;
    nome: string;
    regiao: Regiao;
}
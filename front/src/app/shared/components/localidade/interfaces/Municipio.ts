import { Microrregiao } from "./Microrregiao";
import { RegiaoImediata } from "./RegiaoImediata";

export interface Municipio {
    id: Number;
    nome: string,
    microrregiao: Microrregiao;
    regiaoImediata: RegiaoImediata;
}
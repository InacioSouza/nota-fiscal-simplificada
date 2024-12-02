import { Cliente } from "../../crud-cliente/interfaces/Cliente";
import { Item } from "./Item";

export interface NotaForm{
    data_emissao: Date,
    cliente: Cliente,
    itens: Item[],
    valorTotal: number
}
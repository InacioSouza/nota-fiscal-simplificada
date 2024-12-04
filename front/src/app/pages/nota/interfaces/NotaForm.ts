import { Cliente } from "src/app/pages/cliente/interfaces/Cliente";
import { Item } from "./Item";

export interface NotaForm{
    data_emissao: Date,
    cliente: Cliente,
    itens: Item[],
    valorTotal: number
}
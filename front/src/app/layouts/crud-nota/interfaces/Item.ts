import { Produto } from "../../crud-produto/interfaces/Produto";

export interface Item {
    id: number,
    produto: Produto,
    quantidade: number,
    valorTotal: number
}
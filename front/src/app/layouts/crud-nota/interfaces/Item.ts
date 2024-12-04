import { Produto } from "src/app/pages/produto/interfaces/Produto";

export interface Item {
    id: number,
    produto: Produto,
    quantidade: number,
    valorTotal: number
}
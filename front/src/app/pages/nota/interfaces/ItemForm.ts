import { Produto } from "src/app/pages/produto/interfaces/Produto";

export interface ItemForm {
    produto: Produto,
    quantidade: number,
    valorTotal: number
}
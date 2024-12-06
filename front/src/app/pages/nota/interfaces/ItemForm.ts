import { Produto } from "src/app/pages/produto/interfaces/Produto";

export interface ItemForm {
    produto: Produto,
    precoUnitario: number,
    quantidade: number,
    valorTotal: number
}
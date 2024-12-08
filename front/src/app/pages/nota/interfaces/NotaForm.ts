import { Cliente } from "src/app/pages/cliente/interfaces/Cliente";
import { ItemForm } from "./ItemForm";

export interface NotaForm {
    data_emissao: Date,
    cliente: Cliente,
    itens: ItemForm[],
    valorTotal: number
}
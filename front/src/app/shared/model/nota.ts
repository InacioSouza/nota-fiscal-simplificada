import { Cliente } from "../../pages/cliente/interfaces/Cliente";
import { Item } from "../../pages/nota/interfaces/Item";

export class Nota {
  id!: number;
  numero!: string;
  data_emissao!: Date;
  cliente!: Cliente;
  valorTotal!: number;
  itens!: Item[];
}

import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/Item';
import { NotaService } from '../../services/nota.service';
import { Produto } from 'src/app/layouts/crud-produto/interfaces/Produto';
import { ProdutoService } from 'src/app/layouts/crud-produto/services/produto.service';
import { Cliente } from 'src/app/layouts/crud-cliente/interfaces/Cliente';
import { ClienteService } from 'src/app/layouts/crud-cliente/services/cliente.service';

@Component({
  selector: 'app-cadastra-nota',
  templateUrl: './cadastra-nota.component.html',
  styleUrls: ['./cadastra-nota.component.scss']
})
export class CadastraNotaComponent implements OnInit {

  dataHoje: Date = new Date();

  clientes!: Cliente[];

  produtos!: Produto[];
  itens: Item[] = [];

  produtoSelecionado!: Produto;

  precoUnit: number = 0;
  qtdProduto: number = 0;
  valorTotalItem: number = 0;
  valorTotalNota: number = 0;

  constructor(private clienteService: ClienteService, private produtoService: ProdutoService, private notaService: NotaService) { }

  ngOnInit(): void {

    this.clienteService.lista().subscribe(
      result => this.clientes = result
    );

    this.produtoService.lista().subscribe(result => {
      this.produtos = result;
    })

  }

  mostraPrecoUnit(event: any) {
    this.precoUnit = event.value.preco;
    this.calculaValorTot(); //caso o usuário selecione a qtd de produtos antes
  }

  calculaValorTot() {

    if (this.produtoSelecionado) {
      this.valorTotalItem = this.precoUnit * this.qtdProduto;
    }
  }

  adicionaItem(): void {

    const item: Item = {
      id: 0,
      produto: this.produtoSelecionado,
      quantidade: this.qtdProduto,
      valorTotal: this.valorTotalItem
    }

    if (this.itens.find(itemArray => itemArray.produto.id === item.produto.id))
      return;

    if (this.produtoSelecionado && this.qtdProduto > 0) {

      this.itens.push(item);

      this.calculaValorTotNota();
    }
  }

  calculaValorTotNota(): void {

  }

  emiteNota(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/Item';
import { NotaService } from '../../services/nota.service';
import { Produto } from 'src/app/layouts/crud-produto/interfaces/Produto';
import { ProdutoService } from 'src/app/layouts/crud-produto/services/produto.service';

@Component({
  selector: 'app-cadastra-nota',
  templateUrl: './cadastra-nota.component.html',
  styleUrls: ['./cadastra-nota.component.scss']
})
export class CadastraNotaComponent implements OnInit {

  produtos!: Produto[];
  itens: Item[] = [];

  produtoSelecionado!: Produto;

  precoUnit: number = 0;
  qtdProduto: number = 0;
  valorTot: number = 0;

  constructor(private produtoService: ProdutoService, private notaService: NotaService) { }

  ngOnInit(): void {

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
      this.valorTot = this.precoUnit * this.qtdProduto;
    }
  }

  adicionaItem(): void {

    const item: Item = {
      id: 0,
      produto: this.produtoSelecionado,
      quantidade: this.qtdProduto,
      valorTotal: this.valorTot
    }

    if (this.itens.find(itemArray => itemArray.produto.id === item.produto.id))
      return;

    if (this.produtoSelecionado && this.qtdProduto > 0) {

      this.itens.push(item);

      console.log(item);
    }
  }


}

import { NotaService } from './../../services/nota.service';
import { Component, OnInit, ViewChild, EventEmitter, Output, enableProdMode } from '@angular/core';
import { ItemForm } from '../../interfaces/ItemForm';

import { Produto } from 'src/app/pages/produto/interfaces/Produto';
import { ProdutoService } from 'src/app/pages/produto/services/produto.service';
import { Cliente } from 'src/app/pages/cliente/interfaces/Cliente';
import { ClienteService } from 'src/app/pages/cliente/services/cliente.service';
import notify from 'devextreme/ui/notify';
import { NotaForm } from '../../interfaces/NotaForm';

type FirstArgument<T> = T extends (...args: any) => any ? Parameters<T>[0] : never;

@Component({
  selector: 'app-cadastra-nota',
  templateUrl: './cadastra-nota.component.html',
  styleUrls: ['./cadastra-nota.component.scss']
})
export class CadastraNotaComponent implements OnInit {

  dataHoje: Date = new Date();

  clienteSelecionado!: Cliente;

  clientes!: Cliente[];

  itensFormDataSource: ItemForm[] = [];

  produtoSelecionado!: Produto;
  limpaPdt!: Produto;

  produtos!: Produto[];

  precoUnit: number = 0;
  qtdProduto: number = 0;
  valorTotalItem: number = 0;

  valorTotalNota: number = 0;

  @Output() idNotaCadastrada = new EventEmitter();

  constructor(private produtoService: ProdutoService, private clienteService: ClienteService, private notaservice: NotaService) { }

  ngOnInit(): void {
    this.produtoService.lista().subscribe(result => this.produtos = result);
    this.clienteService.lista().subscribe(result => this.clientes = result);
  }

  mostraPrecoUnit(produto: any, rowData: any): void {
    rowData['produto'] = produto.value;
    this.precoUnit = produto.value.preco;
    rowData['precoUnitario'] = this.precoUnit;
    this.calculaValorItem(rowData);
  }

  calculaValorItem(rowData: any): void {

    rowData['quantidade'] = this.qtdProduto;

    if (this.precoUnit != 0 && this.qtdProduto != 0) {
      this.valorTotalItem = this.precoUnit * this.qtdProduto;
      rowData['valorTotal'] = this.valorTotalItem;
    }
  }

  addItem(event: any): void {

    if (this.validaItem(event.changes[0].data)) {
      return;
    }

    const produtoItem = event.changes[0].data.produto;

    for (let i = 0; i < this.itensFormDataSource.length; i++) {
      if (this.itensFormDataSource[i].produto === produtoItem) {
        this.valorTotalNota -= this.itensFormDataSource[i].valorTotal;
        this.itensFormDataSource.splice(i, 1);
        this.valorTotalNota += event.changes[0].data.valorTotal;
        return;
      }
    }

    this.valorTotalNota += event.changes[0].data.valorTotal;
  }

  validaItem(dadosRegistro: any): boolean {

    if (!dadosRegistro.hasOwnProperty('produto') && !dadosRegistro.produto) {
      notify('Selecione um produto!', 'error', 4000);
      return true;

    } else if (!dadosRegistro.hasOwnProperty('precoUnitario') && dadosRegistro.precoUnitario == 0) {
      notify('Erro no preço do produto!', 'error', 4000);
      return true;

    } else if (!dadosRegistro.hasOwnProperty('quantidade') || dadosRegistro.quantidade <= 0) {
      notify('A quantidade deve ser maior que zero', 'error', 4000);
      return true;

    } else if (!dadosRegistro.hasOwnProperty('valorTotal') && !dadosRegistro.valorTotal) {
      notify('Erro no valor total do item', 'error', 4000);
      return true;
    }

    return false;
  }

  limpaCamposItem(): void {
    this.produtoSelecionado = this.limpaPdt;
    this.precoUnit = 0;
    this.qtdProduto = 0;
    this.valorTotalItem = 0;
  }

  deletaItem(event: any): void {
    this.valorTotalNota -= event.data.valorTotal;
  }

  emiteNota(): void {

    if (this.itensFormDataSource.length == 0) {
      notify('Deve haver ao menos 1 item na nota!', 'error', 3000);
      return;
    }

    if (!this.clienteSelecionado) {
      notify('Selecione 1 cliente!', 'error', 3000);
    }

    const nota: NotaForm = {
      data_emissao: this.dataHoje,
      cliente: this.clienteSelecionado,
      itens: this.itensFormDataSource,
      valorTotal: this.valorTotalNota
    }


    this.notaservice.cadastraNota(nota).subscribe(
      {
        next: (nota) => {
          notify('Nota cadstrada!', 'success', 4000);

          this.idNotaCadastrada.emit(nota.id);
        },
        error: (err) => {
          notify('Falha ao cadastrar nota!', 'error', 4000);
        }
      }
    );

  }



}
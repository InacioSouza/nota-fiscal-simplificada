import { DxDrawerModule } from 'devextreme-angular/ui/drawer';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { Component, OnInit, ViewChild, EventEmitter, Output, enableProdMode } from '@angular/core';
import { Item } from '../../interfaces/Item';
import { ItemForm } from '../../interfaces/ItemForm';

import { NotaService } from '../../services/nota.service';
import { NotaForm } from '../../interfaces/NotaForm';
import { DxSelectBoxComponent } from 'devextreme-angular';
import { Produto } from 'src/app/pages/produto/interfaces/Produto';
import { ProdutoService } from 'src/app/pages/produto/services/produto.service';
import { Cliente } from 'src/app/pages/cliente/interfaces/Cliente';
import { ClienteService } from 'src/app/pages/cliente/services/cliente.service';
import notify from 'devextreme/ui/notify';
import { DxDataGridModule, DxDataGridTypes } from 'devextreme-angular/ui/data-grid';

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


  customButtons = [
    {
      name: 'save',
      text: 'save',
      icon: 'save',
      onClick: (e: any) => console.log('Save')
    }
    /*
    {
      name: 'edit',
      text: 'Edit',
      icon: 'edit',
      onClick: (e: any) => console.log('Sobrescrevi o comportamento do edit!'),
    },
    {
      name: 'delete',
      text: 'Delete',
      icon: 'trash',
      onClick: (e: any) => console.log('Sobrescrevi o comportamento do delete!'),
    },
     */
  ]

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.lista().subscribe(result => this.produtos = result);
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

    console.log('entrei no add item!')

    if (this.validaItem(event.changes[0].data)) {
      return;
    }

    const itemFormAdd: ItemForm = {
      produto: this.produtoSelecionado,
      precoUnitario: this.precoUnit,
      quantidade: this.qtdProduto,
      valorTotal: this.valorTotalItem
    }

    this.itensFormDataSource.push(itemFormAdd);

    this.limpaCamposItem();

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

}



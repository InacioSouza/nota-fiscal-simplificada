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

  mostraPrecoUnit(produto: any): void {
    this.precoUnit = produto.value.preco;
    console.log(this.precoUnit)
    this.calculaValorItem();
  }

  calculaValorItem(): void {
    if (this.precoUnit != 0 && this.qtdProduto != 0) {
      this.valorTotalItem = this.precoUnit * this.qtdProduto;
    }

    console.log(this.valorTotalItem);
  }

  addItem(): void {

    const itemFormAdd: ItemForm = {
      produto: this.produtoSelecionado,
      precoUnitario: this.precoUnit,
      quantidade: this.qtdProduto,
      valorTotal: this.valorTotalItem
    }

    console.log(itemFormAdd)
  }


  isCloneIconVisible({ row }: FirstArgument<DxDataGridTypes.ColumnButton['visible']>) {
    return row!.isEditing;
  }

  vinculaPdtTemplateAPdtData(event: any, rowData: any): void {
    rowData['produto'] = event.value;
  }

}



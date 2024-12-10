import { Component, OnInit, ViewChild } from '@angular/core';
import { NotaService } from '../../services/nota.service';
import { Nota } from '../../interfaces/Nota';
import { AppInfoService } from 'src/app/shared/services';
import { DxDataGridComponent } from 'devextreme-angular';
import { Cliente } from 'src/app/pages/cliente/interfaces/Cliente';
import { ClienteService } from 'src/app/pages/cliente/services/cliente.service';
import { ProdutoService } from 'src/app/pages/produto/services/produto.service';
import { Produto } from 'src/app/pages/produto/interfaces/Produto';

@Component({
  selector: 'app-lista-nota',
  templateUrl: './lista-nota.component.html',
  styleUrls: ['./lista-nota.component.scss']
})
export class ListaNotaComponent implements OnInit {

  notas!: Nota[];

  clientes!: Cliente[];
  clienteSelecionado!: Cliente;

  produtos!: Produto[];
  produtoSelecionado!: Produto;
  limpaPdt!: Produto;

  qtdProduto!: number;
  valorTotalItem!: number;
  valorTotalAntItem!: number;

  get existemDados(): boolean {
    return this.notas && this.notas.length > 0;
  }

  exibePopupNota: boolean = false;

  toolbarModificada: boolean = false;

  focoRowId!: number;

  constructor(private notaService: NotaService, private appInfo: AppInfoService, private clienteService: ClienteService, private produtoService: ProdutoService) {

  }

  ngOnInit(): void {
    this.appInfo.title = "Notas";
    this.carregaDataGrid();

    this.clienteService.lista().subscribe(result => this.clientes = result);
    this.produtoService.lista().subscribe(result => this.produtos = result);
  }

  carregaDataGrid(): void {
    this.notaService.lista().subscribe(
      result => this.notas = result
    );
  }

  modificaToolbar(event: any): void {
    if (this.toolbarModificada) return;

    const itensToolbar = event.toolbarOptions.items;

    itensToolbar.push({
      widget: 'dxButton',
      options: {
        icon: 'add',
        hint: 'Adicionar nova linha',
        onClick: () => {
          this.exibePopupNota = true;
        },
      },
      location: 'after',
    });

    this.toolbarModificada = true;
  }

  focoNotaCadastrada(id: any) {
    this.fechaPopup();
    this.focoRowId = id;
  }

  fechaPopup(): void {
    this.exibePopupNota = false;
    this.carregaDataGrid();
  }

  recalculaValorNota(nota: any) {

    const idLinhaFoco = nota.data.id;

    const notaEmFoco = this.notas.find((item) => item.id === idLinhaFoco);

    const valorTot = notaEmFoco!.valorTotal;

    notaEmFoco!.valorTotal = (valorTot - this.valorTotalAntItem) + this.valorTotalItem;

    this.limpaCamposItem();
  }

  recalculaValorTotItem(rowData: any, origem: string): void {

    if (origem === 'pdt') {
      this.qtdProduto = rowData['quantidade'];
    }

    if (origem === 'qtd') {
      this.produtoSelecionado = rowData['produto'];
    }

    this.valorTotalAntItem = rowData['valorTotal'];

    if (this.qtdProduto && this.qtdProduto != 0 && this.produtoSelecionado) {
      this.valorTotalItem = this.produtoSelecionado.preco * this.qtdProduto;
      console.log('VALOR ITEM RECALCULADO: ', this.valorTotalItem)
      rowData['valorTotal'] = this.valorTotalItem;
    }
  }

  vinculaQtdData(rowData: any, event: any, qtd: any): void {
    rowData['qtdProduto'] = event.value;
    this.qtdProduto = event.value;
    qtd.data.quantidade = event.value;

    this.recalculaValorTotItem(rowData, 'qtd');
  }

  vinculaPdtData(rowData: any, event: any, selectPdt: any): void {

    if (event.value) {
      rowData['produto'] = event.value;
      this.produtoSelecionado = event.value;
    }

    this.recalculaValorTotItem(rowData, 'pdt');
  }

  limpaCamposItem(): void {

    this.produtoSelecionado = this.limpaPdt;
    this.qtdProduto = 0;
    this.valorTotalItem = 0;

  }

  removeItem(nota: any, dataItens: DxDataGridComponent): void {

    const itemFoco = dataItens.instance.option('focusedRowKey');

    const newItens = nota.data.itens.filter((item: any) => item.id !== itemFoco.id);

    nota.data.itens = newItens;

    const novoValor = nota.data.valorTotal - itemFoco.valorTotal

    nota.data.valorTotal = novoValor;
  }

  vamos(nota: any, dataItens: DxDataGridComponent): () => void {
    return () => this.removeItem(nota, dataItens);
  }

}

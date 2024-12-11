import { ItemForm } from './../../interfaces/ItemForm';
import { NotaForm } from './../../interfaces/NotaForm';
import { Component, OnInit } from '@angular/core';
import { AppInfoService } from 'src/app/shared/services';
import { Cliente } from 'src/app/pages/cliente/interfaces/Cliente';
import { Produto } from 'src/app/pages/produto/interfaces/Produto';
import { Nota } from "../../../../shared/model/nota";
import notify from 'devextreme/ui/notify';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { NotaService } from 'src/app/shared/services/nota.service';

@Component({
  selector: 'app-lista-nota',
  templateUrl: './lista-nota.component.html',
  styleUrls: ['./lista-nota.component.scss']
})
export class ListaNotaComponent implements OnInit {

  notas: Nota[] = [];

  clientes!: Cliente[];
  clienteSelecionado!: Cliente;

  produtos!: Produto[];
  produtoSelecionado!: Produto;
  limpaPdt!: Produto;

  qtdProduto!: number;
  valorTotalItem!: number;

  constructor(
    private notaService: NotaService,
    private appInfo: AppInfoService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.clienteService.lista().subscribe(result => this.clientes = result);
      this.produtoService.lista().subscribe(result => this.produtos = result);
      this.notaService.lista().subscribe(result => this.notas = result);
    }, 0);
  }

  cadastraNota(event: any): void {
    console.log(event)
    if (event.changes?.length === 0) {
      return;
    }

    if (event.changes[0]?.data?.itens?.length == 0) {
      notify('Deve haver ao menos 1 item na nota', 'error', 4000);
      event.cancel = true;
      return;
    }

    const itens: ItemForm[] = [];

    event.changes[0]?.data.itens.forEach((item: any) => {
      let itemForm: ItemForm = { produto: item.produto, quantidade: item.qtdProduto, valorTotal: item.valorTotal };
      itens.push(itemForm);
    });

    const nota: NotaForm = {
      data_emissao: event.changes[0]?.data.data_emissao,
      cliente: event.changes[0]?.data.cliente,
      itens: itens,
      valorTotal: event.changes[0]?.data.valorTotal
    }

    this.notaService.cadastraNota(nota).subscribe({
      next: (nota) => {
        notify('Nota cadastrada!', 'success', 4000);
      },
      error: (err) => {
        notify('Falha ao cadastrar nota!', 'error', 4000);
      }
    });
  }

  removeNota(event: any): void {
    this.notaService.removeNota(event.data.id).subscribe();
  }

  recalculaValorTotItem(rowData: any, origem: string): void {
    if (origem === 'pdt') {
      this.qtdProduto = rowData['quantidade'];
    }

    if (origem === 'qtd') {
      this.produtoSelecionado = rowData['produto'];
    }

    if (this.qtdProduto && this.qtdProduto != 0 && this.produtoSelecionado) {
      this.valorTotalItem = this.produtoSelecionado.preco * this.qtdProduto;
      rowData['valorTotal'] = this.valorTotalItem;
    }
  }

  vinculaQtdData(rowData: any, event: any, qtd: any): void {
    rowData['qtdProduto'] = event.value;
    this.qtdProduto = event.value;
    qtd.data.quantidade = event.value;

    this.recalculaValorTotItem(rowData, 'qtd');
  }

  vinculaPdtData(rowData: any, event: any, s: any): void {

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

  onInitNewRowNotas(event: any) {
    event.data = new Nota();
    event.data.itens = [];
  }

  atualizaNota(event: any): void {
    console.log(event)
  }

}

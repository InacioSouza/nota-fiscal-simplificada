import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../interfaces/Item';
import { NotaService } from '../../services/nota.service';
import { Produto } from 'src/app/layouts/crud-produto/interfaces/Produto';
import { ProdutoService } from 'src/app/layouts/crud-produto/services/produto.service';
import { Cliente } from 'src/app/layouts/crud-cliente/interfaces/Cliente';
import { ClienteService } from 'src/app/layouts/crud-cliente/services/cliente.service';
import { NotaForm } from '../../interfaces/NotaForm';
import { DxSelectBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'app-cadastra-nota',
  templateUrl: './cadastra-nota.component.html',
  styleUrls: ['./cadastra-nota.component.scss']
})
export class CadastraNotaComponent implements OnInit {

  dataHoje: Date = new Date();

  clientes!: Cliente[];
  clienteSelecionado!: Cliente;
  @ViewChild(DxSelectBoxComponent, { static: false }) selectCliente!: DxSelectBoxComponent;

  produtos!: Produto[];
  itens: Item[] = [];

  semItens = false;

  produtoSelecionado!: Produto;

  precoUnit: number = 0;
  qtdProduto: number = 0;
  valorTotalItem: number = 0;

  valorTotalNota: number = 0;

  notaEmitida!: NotaForm;

  verPopupOK: boolean = false;
  verPopupFalha: boolean = false;

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
    this.calculaValorTotItem(); //caso o usuário selecione a qtd de produtos antes
  }

  calculaValorTotItem() {

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

      this.calculaValorTotNota(item);
    }

    this.atualizaFlagSemItens();
  }

  calculaValorTotNota(item: Item): void {
    this.valorTotalNota += item.valorTotal;
  }

  subtraiItemNota(event: any): void {
    console.log('Evento:\n', event)
    this.valorTotalNota -= event.itemData.valorTotal;
    this.atualizaFlagSemItens();
  }

  atualizaFlagSemItens(): void {
    this.semItens = this.itens.length === 0;
  }

  limpaCampos(): void {
    this.clienteSelecionado;
    this.produtoSelecionado;
    this.precoUnit = 0;
    this.qtdProduto = 0;
    this.itens = [];
    this.valorTotalItem = 0;
    this.valorTotalNota = 0;
    alert('tentei')
  }

  emiteNota(): void {

    console.log(this.clienteSelecionado);
    console.log(this.selectCliente);

    if (this.clienteSelecionado === undefined) {
      this.selectCliente.isValid = false;
      this.verPopupFalha = true;
      return;
    }

    if (this.itens.length === 0) {
      this.atualizaFlagSemItens();
      this.verPopupFalha = true;
      return;
    }



    this.notaEmitida = {
      cliente: this.clienteSelecionado,
      itens: this.itens,
      data_emissao: this.dataHoje,
      valorTotal: this.valorTotalNota
    }

    this.notaService.cadastraNota(this.notaEmitida).subscribe({
      next: () => {
        this.limpaCampos();
        this.verPopupOK = true;
        
      },
      error: (err) => {
        this.verPopupFalha = true;
      }
    })

  }

}

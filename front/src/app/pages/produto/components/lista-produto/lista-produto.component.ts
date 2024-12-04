import { AppInfoService } from './../../../../shared/services/app-info.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../../interfaces/Produto';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})
export class ListaProdutoComponent implements OnInit {


  produtos!: Produto[];

  rowFocoKey!: number;

  popupCadastroProduto: boolean = false;

  textoAcoes = {
    confirmDeleteMessage: "Deseja excluir permanentemente este produto?"
  }

  get existemDados(): boolean {
    return this.produtos && this.produtos.length > 0;
  }

  toolbarModificada: boolean = false;

  constructor(private produtoService: ProdutoService, private router: Router, private appInfo: AppInfoService) {

  }

  ngOnInit(): void {
    this.carregaDataGrid();
    this.appInfo.title = 'Produtos'
  }

  carregaDataGrid(): void {
    this.produtoService.lista().subscribe(
      result => this.produtos = result
    )
  }

  editaProduto(rowData: any): void {
    this.produtoService.modifica(rowData.key, rowData.newData).subscribe();
  }

  deletaProduto(rowData: any): void {
    this.produtoService.deleta(rowData.data.id).subscribe();
  }

  exibirPopupCadastro(): void {
    this.popupCadastroProduto = true;
  }

  fechaPopup(): void {
    this.popupCadastroProduto = false;
    this.carregaDataGrid();
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
          this.exibirPopupCadastro();
        },
      },
      location: 'after',
    });

    this.toolbarModificada = true;
  }

  focoProdutoCadastrado(id: number) {
    this.fechaPopup();
    this.rowFocoKey = id;
  }
}
